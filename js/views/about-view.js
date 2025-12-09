/**
 * About View (Simplified)
 */

export function showAboutViewSimple() {
  const content = document.getElementById('content');

  content.innerHTML = `
    <ui5-page style="height: 100%;">
      <ui5-bar slot="header" design="Header">
        <ui5-title level="H5" slot="startContent">About This Application</ui5-title>
      </ui5-bar>

      <div class="sapUiSmallMargin" style="padding: 1rem;">
        <p class="sapUiMediumMarginBottom" style="margin-bottom: 2rem;"><strong>Analytics Dashboard</strong> - Version 1.0.0</p>

        <ui5-title level="H4" style="margin: 1.5rem 0 1rem 0;">Features</ui5-title>
        <ul style="margin: 1rem 0; padding-left: 2rem; line-height: 1.6;">
          <li>Upload Excel files (.xlsx, .xls)</li>
          <li>Automatic data processing and validation</li>
          <li>Interactive dashboard with KPI cards</li>
          <li>Multiple chart types (Bar, Line, Pie)</li>
          <li>Sortable and filterable data tables</li>
          <li>Export data to Excel format</li>
          <li>Fully client-side processing</li>
        </ul>

        <ui5-title level="H4" style="margin: 2rem 0 1rem 0;">Technology Stack</ui5-title>
        <ul style="margin: 1rem 0; padding-left: 2rem; line-height: 1.6;">
          <li><strong>Chart.js</strong> - Interactive charts</li>
          <li><strong>SheetJS (xlsx)</strong> - Excel processing</li>
          <li><strong>Navigo</strong> - Client-side routing</li>
          <li><strong>Vanilla JavaScript</strong> - No frameworks</li>
        </ul>

        <ui5-title level="H4" style="margin: 2rem 0 1rem 0;">How to Use</ui5-title>
        <ol style="margin: 1rem 0; padding-left: 2rem; line-height: 1.6;">
          <li>Click "Upload" to select an Excel file</li>
          <li>Click "Process File" to analyze the data</li>
          <li>View "Dashboard" for charts and KPIs</li>
          <li>View "Data Table" to explore your data</li>
          <li>Click "Export" to download results</li>
        </ol>

        <div class="message message-info" style="margin-top: 2rem; display: inline-block;">
          <ui5-icon name="information" style="margin-right: 0.5rem; vertical-align: middle;"></ui5-icon>
          All processing happens locally in your browser. Your data never leaves your device.
        </div>
      </div>
    </ui5-page>
    `;
}
