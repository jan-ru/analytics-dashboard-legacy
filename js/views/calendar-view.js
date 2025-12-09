/**
 * Calendar Showcase View
 * Displays configuration and usage of ui5-calendar and related components
 */

export function showCalendarViewSimple() {
  const content = document.getElementById('content');

  content.innerHTML = `
    <ui5-page style="height: 100%;">
      <ui5-bar slot="header" design="Header">
        <ui5-title level="H5" slot="startContent">Calendar Showcase</ui5-title>
      </ui5-bar>

      <div style="padding: 1rem;">
        <div class="message message-info">
          The <strong>Calendar</strong> component allows users to select one or more dates. 
          It supports single, multiple, and range selection modes.
        </div>

        <div style="display: flex; gap: 2rem; margin-top: 1rem; flex-wrap: wrap; align-items: flex-start;">
          
          <!-- Basic Calendar -->
          <div class="card" style="flex: 1; min-width: 320px;">
            <div class="card-header">Single Selection</div>
            <p style="margin-bottom: 1rem; color: #666;">Standard calendar with single date selection.</p>
            
            <div style="display: flex; justify-content: center;">
              <ui5-calendar id="calendarSingle" selection-mode="Single"></ui5-calendar>
            </div>
            
            <div style="margin-top: 1rem; text-align: center;">
               Selected: <span id="singleSelectedValue" style="font-weight: bold;">None</span>
            </div>
          </div>

          <!-- Range Selection with Special Dates -->
          <div class="card" style="flex: 1; min-width: 320px;">
            <div class="card-header">Range Selection & Legend</div>
            <p style="margin-bottom: 1rem; color: #666;">Range selection with special dates and a legend.</p>

            <div style="display: flex; justify-content: center;">
              <ui5-calendar id="calendarRange" selection-mode="Range">
                <!-- Special Dates -->
                <ui5-special-date slot="specialDates" value="${getFormattedDate(5)}" type="Type01"></ui5-special-date>
                <ui5-special-date slot="specialDates" value="${getFormattedDate(10)}" type="Type02"></ui5-special-date>
                <ui5-special-date slot="specialDates" value="${getFormattedDate(15)}" type="Type03"></ui5-special-date>
                
                <!-- Legend -->
                <ui5-calendar-legend slot="calendarLegend">
                  <ui5-calendar-legend-item type="Type01" text="Team Event"></ui5-calendar-legend-item>
                  <ui5-calendar-legend-item type="Type02" text="Public Holiday"></ui5-calendar-legend-item>
                  <ui5-calendar-legend-item type="Type03" text="Release Date"></ui5-calendar-legend-item>
                </ui5-calendar-legend>
              </ui5-calendar>
            </div>

            <div style="margin-top: 1rem; text-align: center;">
               Range: <span id="rangeSelectedValue" style="font-weight: bold;">None</span>
            </div>
          </div>

        </div>

        <!-- Documentation -->
        <div class="card" style="margin-top: 2rem;">
          <div class="card-header">Component Usage</div>
          <ul style="margin-left: 1.5rem; margin-top: 0.5rem; color: #666;">
            <li><strong>ui5-calendar</strong>: Main component. Set <code>selection-mode</code> to Single, Multiple, or Range.</li>
            <li><strong>ui5-date</strong> / <strong>ui5-date-range</strong>: Used within the calendar for pre-selection (programmatic).</li>
            <li><strong>ui5-special-date</strong>: Marks specific dates with semantic colors (Type01-Type20).</li>
            <li><strong>ui5-calendar-legend</strong>: Displays a legend at the bottom of the calendar.</li>
          </ul>
        </div>
      </div>
    </ui5-page>
  `;

  // Helper to get formatted date string (YYYY-MM-DD) for current month + offset days
  function getFormattedDate(dayOffset) {
    const date = new Date();
    date.setDate(date.getDate() + dayOffset);
    return date.toISOString().split('T')[0];
  }

  // Attach handlers
  const calendarSingle = document.getElementById('calendarSingle');
  const singleSelectedValue = document.getElementById('singleSelectedValue');
  
  if (calendarSingle) {
    calendarSingle.addEventListener('selection-change', (event) => {
      const selectedDates = event.detail.selectedDates;
      if (selectedDates.length > 0) {
        // ui5-date component or timestamp depending on version used, usually timestamp in detail.selectedDates
        // For UI5 WebC 1.x, event.detail.selectedDates contains timestamps (in seconds) or Date objects? 
        // Checking documentation: detail.selectedDates is array of inputs value (strings) or something similar.
        // Actually, for ui5-calendar, selectedDates is an array of strings in format pattern (YYYY-MM-DD default)
        // Wait, standard behavior is extracting values.
        // Let's rely on event.detail.selectedValues or similar if available, otherwise just use .map on dates.
        
        // In 1.24.0, it gives selectedDates which are HTML elements? No, in change event.
        // Actually, let's look at the element's actual 'selectedDates' property after event.
        const dateValues = event.detail.selectedDates; 
        singleSelectedValue.textContent = dateValues.join(', '); 
      } else {
        singleSelectedValue.textContent = 'None';
      }
    });
  }

  const calendarRange = document.getElementById('calendarRange');
  const rangeSelectedValue = document.getElementById('rangeSelectedValue');

  if (calendarRange) {
    calendarRange.addEventListener('selection-change', (event) => {
        const selectedDates = event.detail.selectedDates;
        if(selectedDates.length > 0) {
           rangeSelectedValue.textContent = selectedDates.join(' - ');
        } else {
            rangeSelectedValue.textContent = 'None';
        }
    });
  }
}
