# Analytics Dashboard - Legacy (UI5 Web Components)

**Simple, CDN-based analytics dashboard** for quick deployment without build tools.

> 💡 **Looking for the enterprise version?** Check out [analytics-dashboard-sapui5](https://github.com/yourusername/analytics-dashboard-sapui5) for the full-featured SAPUI5 MVC application with FlexibleColumnLayout, i18n, and advanced routing.

## Features

- ✅ **No Build Step Required** - Pure HTML/CSS/JavaScript with CDN
- ✅ **Excel File Upload** - Import .xlsx or .xls files
- ✅ **Interactive Charts** - Bar, Line, and Pie charts with Chart.js
- ✅ **SAP Fiori Tiles** - Complete tile showcase (15 types)
- ✅ **Data Table** - Sort and filter your data
- ✅ **Excel Export** - Download processed data
- ✅ **UI5 Web Components** - Modern web components from SAP
- ✅ **Responsive Design** - Works on desktop, tablet, and mobile
- ✅ **Client-Side Only** - All processing in browser, no server needed

## Technology Stack

- **UI5 Web Components** v1.24.0
- **Chart.js** v4.4.0
- **ExcelJS** v4.4.0 (via shared utilities)
- **OpenUI5 Router** for hash-based routing
- **ES Modules** for modern JavaScript
- **No Build Tools** - Works with any web server

## Quick Start

### Prerequisites

- A modern web browser (Chrome 89+, Firefox 87+, Safari 14.1+, Edge 89+)
- A local web server (Python, Node.js, PHP, or similar)

### Installation

1. **Clone the repository**
   ```bash
   git clone --recursive https://github.com/yourusername/analytics-dashboard-legacy.git
   cd analytics-dashboard-legacy
   ```

   Note: The `--recursive` flag is important to clone the shared utilities submodule.

2. **Initialize submodules** (if you forgot `--recursive`)
   ```bash
   git submodule update --init --recursive
   ```

3. **Start a local web server**

   Using Python 3:
   ```bash
   python3 -m http.server 8000
   ```

   Using Node.js:
   ```bash
   npx http-server -p 8000
   ```

   Using PHP:
   ```bash
   php -S localhost:8000
   ```

4. **Open your browser**
   ```
   http://localhost:8000
   ```

5. **Upload an Excel file and start analyzing!**

## Project Structure

```
analytics-dashboard-legacy/
├── index.html                  # Main entry point
├── README.md                   # This file
├── .gitignore
│
├── js/
│   ├── app.js                 # Application bootstrap
│   ├── router.js              # Hash-based routing
│   └── views/                 # View components
│       ├── upload-view.js
│       ├── dashboard-view.js
│       ├── data-view.js
│       ├── chart-types-view.js
│       ├── tiles-view.js
│       ├── ui5-components-view.js
│       ├── sap-icons-view.js
│       ├── sap-colors-view.js
│       └── about-view.js
│
├── assets/
│   ├── css/
│   │   └── styles.css         # Application styles
│   └── images/
│
├── docs/                       # Documentation
│   ├── QUICK_START.md
│   └── requirements.md
│
└── shared/                     # Git submodule (shared utilities)
    ├── src/
    │   ├── excel-handler.js   # Excel processing
    │   ├── data-processor.js  # Data transformation
    │   ├── chart-utils.js     # Chart.js helpers
    │   ├── tile-renderer.js   # Tile rendering
    │   ├── toast.js           # Notifications
    │   └── constants.js       # App constants
    └── assets/
        └── sample-data/       # Test files
```

## How It Works

### Architecture

This is a **simple procedural application**:
- Each view is a JavaScript function that generates HTML
- Views are rendered by directly manipulating the DOM
- State is managed in a global `window.appState` object
- Routing uses OpenUI5's HashChanger with a fallback mechanism
- All UI components from UI5 Web Components loaded via CDN

### View Pattern

```javascript
// Example view structure
export function showMyView() {
  const content = document.getElementById('content');

  content.innerHTML = `
    <div class="view-container">
      <h2>My View</h2>
      <!-- View content as HTML template literal -->
    </div>
  `;

  // Attach event listeners
  document.getElementById('myButton').addEventListener('click', handleClick);
}
```

### Shared Utilities

Business logic is shared with the enterprise version via a git submodule:
- Excel file processing
- Data transformation
- Chart configuration
- Tile rendering
- Constants and configuration

## Usage

### 1. Upload Data

- Click "Upload" in the navigation
- Select an Excel file (.xlsx or .xls, max 10MB)
- Click "Process File"
- Data is loaded and you're redirected to the Dashboard

### 2. View Charts and Analytics

- **Dashboard**: Overview with KPI cards and basic charts
- **Chart Types**: Explore different chart visualizations
- **Data**: Table view with sorting and filtering

### 3. Explore SAP Components

- **Tiles**: Browse 15 types of SAP Fiori tiles
- **UI5 Components**: Interactive demos of UI5 Web Components
- **SAP Icons**: Browse 100+ SAP icons
- **SAP Colors**: Explore SAP Fiori color palette

### 4. Export Data

- Click "Export to Excel" in the Dashboard or Data view
- Downloads an .xlsx file with your processed data

## Browser Requirements

- **Chrome** 89+ (March 2021)
- **Firefox** 87+ (March 2021)
- **Safari** 14.1+ (April 2021)
- **Edge** 89+ (March 2021)

Requires **Import Maps** support for ES module resolution.

## Comparison: Legacy vs. Enterprise

| Feature | Legacy (This Version) | Enterprise (SAPUI5) |
|---------|----------------------|---------------------|
| **Setup** | Zero config, CDN-based | npm install, build tools |
| **Architecture** | Procedural, direct DOM | MVC, component-based |
| **UI Framework** | UI5 Web Components v1.24 | SAPUI5 1.108+ |
| **Navigation** | Simple hash routing | FlexibleColumnLayout |
| **Build Tools** | ❌ None required | ✅ UI5 Tooling |
| **i18n** | ❌ Not supported | ✅ Full i18n support |
| **Routing** | Basic hash-based | Advanced with targets |
| **State Management** | Global object | Component models |
| **Drill-Down** | ❌ Single level | ✅ 3-column detail views |
| **Best For** | Prototypes, simple apps | Enterprise applications |
| **Learning Curve** | ⭐ Easy | ⭐⭐⭐ Moderate |

## When to Use This Version

✅ **Use Legacy Version When:**
- Quick prototyping or proof-of-concept
- No build tools available/desired
- Simple data visualization needs
- Learning UI5 Web Components
- Embedding in existing static sites
- Minimal dependencies preferred

⚠️ **Use Enterprise Version When:**
- Building production enterprise applications
- Need FlexibleColumnLayout navigation
- Require internationalization (i18n)
- Want proper MVC architecture
- Need SAP Fiori compliance
- Planning long-term maintenance

## Development

### Adding a New View

1. Create `js/views/my-view.js`:
   ```javascript
   import { SAP_COLORS } from '../shared/src/constants.js';

   export function showMyView() {
     const content = document.getElementById('content');
     content.innerHTML = `<h2>My View</h2>`;
   }
   ```

2. Add route in `js/router.js`:
   ```javascript
   import { showMyView } from './views/my-view.js';

   // In route handlers
   case 'my-route':
     showMyView();
     break;
   ```

3. Add navigation item in `index.html`

### Updating Shared Utilities

```bash
# Update to latest shared utilities
cd shared
git pull origin main
cd ..
git add shared
git commit -m "Update shared utilities to latest version"
```

## Troubleshooting

### Application doesn't load
- Check browser console for errors
- Verify you're using HTTP (not file://)
- Ensure browser supports Import Maps
- Check that shared submodule is initialized

### Import errors
- Run `git submodule update --init --recursive`
- Verify `shared/` directory exists and has content

### Excel upload fails
- Check file format (.xlsx or .xls)
- Verify file size < 10MB
- Check browser console for specific errors

## Performance

- **Initial Load**: ~1-2 seconds (CDN-cached)
- **File Processing**: Handles up to 5,000 rows efficiently
- **Navigation**: Instant page transitions
- **Bundle Size**: ~1.1MB total (CDN resources)

## Privacy & Security

- ✅ **Client-Side Only** - No server communication
- ✅ **No Tracking** - No analytics or telemetry
- ✅ **Local Processing** - Data never leaves your browser
- ✅ **No Storage** - Data not persisted between sessions

## License

MIT License - Free to use for learning and development

## Related Repositories

- **[analytics-dashboard-sapui5](https://github.com/yourusername/analytics-dashboard-sapui5)** - Enterprise SAPUI5 MVC version
- **[analytics-dashboard-shared](https://github.com/yourusername/analytics-dashboard-shared)** - Shared utilities package

## Support

For questions or issues:
1. Check the [Quick Start Guide](docs/QUICK_START.md)
2. Review [Requirements](docs/requirements.md)
3. Open an issue on GitHub

## Migration Path

To upgrade to the enterprise SAPUI5 version:
1. Clone [analytics-dashboard-sapui5](https://github.com/yourusername/analytics-dashboard-sapui5)
2. Install dependencies: `npm install`
3. Start dev server: `npm run start-noflp`
4. Your data processing logic is already shared!

---

**Simple Analytics, Powerful Insights!** 📊
