/**
 * Dashboard View (Simplified) - Overview Page
 */

import { exportToExcel } from '../shared/excel-handler.js';
import { MESSAGES, ICONS, UI, ROUTES, TIMING, DATA_DISPLAY } from '../shared/constants.js';
import { showSuccess, showError } from '../shared/toast.js';

export function showDashboardViewSimple() {
  const { currentData, metrics, fileName } = window.appState;

  if (!currentData || !metrics) {
    document.getElementById(UI.CONTENT_ID).innerHTML = `
      <div class="${UI.CARD_CLASS}">
        <div class="${UI.MESSAGE_ERROR_CLASS}">${MESSAGES.NO_DATA}</div>
      </div>
    `;
    return;
  }

  const content = document.getElementById(UI.CONTENT_ID);
  content.innerHTML = `
    <ui5-page style="height: 100%;">
      <ui5-bar slot="header" design="Header">
        <ui5-title level="H5" slot="startContent">Dashboard</ui5-title>
        <ui5-button icon="download" slot="endContent" id="exportBtn">Export to Excel</ui5-button>
      </ui5-bar>

      <div style="padding: 1rem;">
        <div class="${UI.MESSAGE_INFO_CLASS}">
          Viewing data from: <strong>${fileName}</strong> (${metrics.rowCount} rows, ${metrics.columnCount} columns)
        </div>

        <!-- Quick Navigation Tiles -->
        <div class="tile-container" style="max-width: 800px; margin: 2rem auto;">
          <div class="sap-tile action" data-navigate="${ROUTES.CHART_TYPES}">
            <div class="action-icon">${ICONS.CHART}</div>
            <div class="action-label">Chart Visualizations</div>
            <div class="action-description">View bar, line, pie, and doughnut charts</div>
          </div>

          <div class="sap-tile action tile-green" data-navigate="${ROUTES.TILES}">
            <div class="action-icon">${ICONS.TILES}</div>
            <div class="action-label">SAP Fiori Tiles</div>
            <div class="action-description">Explore all 8 tile types</div>
          </div>

          <div class="sap-tile action tile-blue" data-navigate="${ROUTES.UPLOAD_COLLECTION}">
            <div class="action-icon">📂</div>
            <div class="action-label">Upload Collection</div>
            <div class="action-description">Showcase Upload Collection</div>
          </div>

          <div class="sap-tile action tile-purple" data-navigate="${ROUTES.TOOLBAR}">
            <div class="action-icon">🛠️</div>
            <div class="action-label">Toolbar</div>
            <div class="action-description">Showcase Toolbar</div>
          </div>
          
          <div class="sap-tile action tile-green" data-navigate="${ROUTES.TREE}">
            <div class="action-icon">🌲</div>
            <div class="action-label">Tree</div>
            <div class="action-description">Showcase Tree</div>
          </div>
          
          <div class="sap-tile action tile-blue" data-navigate="${ROUTES.PRODUCT_SWITCH}">
            <div class="action-icon">📱</div>
            <div class="action-label">Product Switch</div>
            <div class="action-description">Showcase Product Switch</div>
          </div>
          
          <div class="sap-tile action tile-blue" data-navigate="${ROUTES.CALENDAR}">
            <div class="action-icon">📅</div>
            <div class="action-label">Calendar</div>
            <div class="action-description">Showcase Calendar</div>
          </div>
          
          <div class="sap-tile action tile-orange" data-navigate="${ROUTES.DATA}">
            <div class="action-icon">${ICONS.DATA}</div>
            <div class="action-label">Data Table</div>
            <div class="action-description">View, sort, and filter your data</div>
          </div>
        </div>

        <!-- Data Summary Cards -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
          <div class="card">
            <div class="card-header">Dataset Information</div>
            <p style="margin: 0.5rem 0;"><strong>File:</strong> ${fileName}</p>
            <p style="margin: 0.5rem 0;"><strong>Total Records:</strong> ${metrics.rowCount.toLocaleString()}</p>
            <p style="margin: 0.5rem 0;"><strong>Total Columns:</strong> ${metrics.columnCount}</p>
            <p style="margin: 0.5rem 0;"><strong>Data Density:</strong> ${(metrics.rowCount * metrics.columnCount).toLocaleString()} cells</p>
          </div>

          <div class="card">
            <div class="card-header">Numeric Columns</div>
            ${renderNumericColumnsSummary(metrics)}
          </div>

          <div class="card">
            <div class="card-header">Quick Actions</div>
            <button class="btn btn-primary" style="width: 100%; margin-bottom: 0.5rem;" onclick="window.location.hash='${ROUTES.CHART_TYPES}'">${ICONS.CHART} View Charts</button>
            <button class="btn btn-primary" style="width: 100%; margin-bottom: 0.5rem;" onclick="window.location.hash='${ROUTES.TILES}'">${ICONS.TILES} View Tiles</button>
            <button class="btn btn-primary" style="width: 100%;" onclick="window.location.hash='${ROUTES.DATA}'">${ICONS.DATA} View Data</button>
          </div>
        </div>
      </div>
    </ui5-page>
  `;

  setTimeout(() => {
    attachHandlers();
  }, TIMING.VIEW_INIT_DELAY);
}

function renderNumericColumnsSummary(metrics) {
  const numericCols = Object.keys(metrics.numericColumns);

  if (numericCols.length === 0) {
    return `<p style="margin: 0; color: #666;">${MESSAGES.NO_NUMERIC_COLUMNS}</p>`;
  }

  return `
    <p style="margin: 0 0 0.5rem 0;"><strong>Count:</strong> ${numericCols.length}</p>
    <ul style="margin: 0; padding-left: 1.5rem;">
      ${numericCols.slice(0, DATA_DISPLAY.MAX_NUMERIC_COLUMNS).map(col => `<li>${col}</li>`).join('')}
      ${numericCols.length > DATA_DISPLAY.MAX_NUMERIC_COLUMNS ? `<li style="color: #666;">... and ${numericCols.length - DATA_DISPLAY.MAX_NUMERIC_COLUMNS} more</li>` : ''}
    </ul>
  `;
}

function attachHandlers() {
  const exportBtn = document.getElementById('exportBtn');
  if (exportBtn) {
    exportBtn.addEventListener('click', async () => {
      const success = await exportToExcel(window.appState.currentData, 'dashboard-export');
      if (success) {
        showSuccess(MESSAGES.EXPORT_SUCCESS);
      } else {
        showError(MESSAGES.EXPORT_FAILED);
      }
    });
  }

  // Add navigation handlers to action tiles
  const navTiles = document.querySelectorAll('[data-navigate]');
  navTiles.forEach(tile => {
    tile.addEventListener('click', () => {
      const route = tile.getAttribute('data-navigate');
      window.location.hash = route;
    });
  });
}
