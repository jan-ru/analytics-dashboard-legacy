
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import { calculateMetrics, processData } from "../js/shared/data-processor.js";

// Mock Data
const mockData = [
    { id: 1, name: "Alpha", value: 10, category: "A" },
    { id: 2, name: "Beta", value: 20, category: "B" },
    { id: 3, name: "Gamma", value: 5, category: "A" },
    { id: 4, name: "Delta", value: 15, category: "C" },
    { id: 5, name: "Epsilon", value: 100, category: "B" }
];

Deno.test("calculateMetrics - should correctly count rows and columns", () => {
    const metrics = calculateMetrics(mockData);
    assertEquals(metrics.rowCount, 5);
    assertEquals(metrics.columnCount, 4);
});

Deno.test("calculateMetrics - should identify numeric columns correctly", () => {
    const metrics = calculateMetrics(mockData);
    // 'value' and 'id' are numeric
    assertEquals(Object.keys(metrics.numericColumns).includes("value"), true);
    assertEquals(Object.keys(metrics.numericColumns).includes("id"), true);
    // 'name' is not
    assertEquals(Object.keys(metrics.numericColumns).includes("name"), false);
});

Deno.test("calculateMetrics - should calculate correct sum and average", () => {
    const metrics = calculateMetrics(mockData);
    const valueMetrics = metrics.numericColumns["value"];
    assertEquals(valueMetrics.sum, 150); // 10+20+5+15+100
    assertEquals(valueMetrics.avg, 30);  // 150 / 5
});

Deno.test("calculateMetrics - should handle empty data", () => {
    const metrics = calculateMetrics([]);
    assertEquals(metrics.rowCount, 0);
    assertEquals(metrics.columns.length, 0);
});

Deno.test("processData - should return all data when no filters/sort provided", () => {
    const result = processData(mockData, {}, null, null);
    assertEquals(result.length, 5);
    assertEquals(result[0].name, "Alpha");
});

Deno.test("processData - should filter by text match (case insensitive)", () => {
    const filters = { name: "AL" }; // Matches "Alpha"
    const result = processData(mockData, filters, null, null);
    assertEquals(result.length, 1);
    assertEquals(result[0].name, "Alpha");
});

Deno.test("processData - should return empty array if filter matches nothing", () => {
    const filters = { category: "Z" };
    const result = processData(mockData, filters, null, null);
    assertEquals(result.length, 0);
});

Deno.test("processData - should sort numeric columns ASC", () => {
    const result = processData(mockData, {}, "value", "asc");
    assertEquals(result[0].value, 5);   // Gamma
    assertEquals(result[4].value, 100); // Epsilon
});

Deno.test("processData - should sort numeric columns DESC", () => {
    const result = processData(mockData, {}, "value", "desc");
    assertEquals(result[0].value, 100); // Epsilon
    assertEquals(result[4].value, 5);   // Gamma
});

Deno.test("processData - should sort string columns", () => {
    const result = processData(mockData, {}, "name", "asc");
    assertEquals(result[0].name, "Alpha");
    assertEquals(result[4].name, "Gamma"); // Alpha, Beta, Delta, Epsilon, Gamma
});
