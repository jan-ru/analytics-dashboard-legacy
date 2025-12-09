/**
 * SAP Icons Showcase View
 * Displays 100+ SAP UI5 icons with their codes
 */

export function showSapIconsViewSimple() {
  const content = document.getElementById('content');

  // Collection of 100 SAP UI5 icons with their codes and names
  const sapIcons = [
    { code: '&#xe0c1;', hex: 'e0c1', name: 'bar-chart' },
    { code: '&#xe1b3;', hex: 'e1b3', name: 'table-view' },
    { code: '&#xe112;', hex: 'e112', name: 'home' },
    { code: '&#xe1e2;', hex: 'e1e2', name: 'chart-table-view' },
    { code: '&#xe1db;', hex: 'e1db', name: 'calendar' },
    { code: '&#xe0f3;', hex: 'e0f3', name: 'action-settings' },
    { code: '&#xe0b1;', hex: 'e0b1', name: 'filter' },
    { code: '&#xe0d5;', hex: 'e0d5', name: 'search' },
    { code: '&#xe1ed;', hex: 'e1ed', name: 'refresh' },
    { code: '&#xe22c;', hex: 'e22c', name: 'download' },
    { code: '&#xe074;', hex: 'e074', name: 'upload' },
    { code: '&#xe1c1;', hex: 'e1c1', name: 'add' },
    { code: '&#xe03d;', hex: 'e03d', name: 'delete' },
    { code: '&#xe0ab;', hex: 'e0ab', name: 'edit' },
    { code: '&#xe05b;', hex: 'e05b', name: 'save' },
    { code: '&#xe226;', hex: 'e226', name: 'cancel' },
    { code: '&#xe05a;', hex: 'e05a', name: 'accept' },
    { code: '&#xe1e0;', hex: 'e1e0', name: 'decline' },
    { code: '&#xe1ef;', hex: 'e1ef', name: 'information' },
    { code: '&#xe1f1;', hex: 'e1f1', name: 'warning' },
    { code: '&#xe0b1;', hex: 'e0b1', name: 'filter' },
    { code: '&#xe1c4;', hex: 'e1c4', name: 'sort' },
    { code: '&#xe1c3;', hex: 'e1c3', name: 'sort-ascending' },
    { code: '&#xe1c2;', hex: 'e1c2', name: 'sort-descending' },
    { code: '&#xe1ed;', hex: 'e1ed', name: 'synchronize' },
    { code: '&#xe075;', hex: 'e075', name: 'undo' },
    { code: '&#xe080;', hex: 'e080', name: 'redo' },
    { code: '&#xe1e7;', hex: 'e1e7', name: 'copy' },
    { code: '&#xe1f7;', hex: 'e1f7', name: 'paste' },
    { code: '&#xe22a;', hex: 'e22a', name: 'activate' },
    { code: '&#xe1eb;', hex: 'e1eb', name: 'create' },
    { code: '&#xe0d2;', hex: 'e0d2', name: 'display' },
    { code: '&#xe22d;', hex: 'e22d', name: 'open-folder' },
    { code: '&#xe1f4;', hex: 'e1f4', name: 'folder' },
    { code: '&#xe1f9;', hex: 'e1f9', name: 'document' },
    { code: '&#xe1fc;', hex: 'e1fc', name: 'pdf-attachment' },
    { code: '&#xe1fd;', hex: 'e1fd', name: 'excel-attachment' },
    { code: '&#xe201;', hex: 'e201', name: 'word-text' },
    { code: '&#xe200;', hex: 'e200', name: 'ppt-attachment' },
    { code: '&#xe1fb;', hex: 'e1fb', name: 'attachment' },
    { code: '&#xe0e0;', hex: 'e0e0', name: 'email' },
    { code: '&#xe1f8;', hex: 'e1f8', name: 'inbox' },
    { code: '&#xe1fa;', hex: 'e1fa', name: 'outbox' },
    { code: '&#xe0e1;', hex: 'e0e1', name: 'phone' },
    { code: '&#xe1e8;', hex: 'e1e8', name: 'fax-machine' },
    { code: '&#xe0dc;', hex: 'e0dc', name: 'print' },
    { code: '&#xe1c8;', hex: 'e1c8', name: 'share' },
    { code: '&#xe22b;', hex: 'e22b', name: 'post' },
    { code: '&#xe0d4;', hex: 'e0d4', name: 'comment' },
    { code: '&#xe1e9;', hex: 'e1e9', name: 'alert' },
    { code: '&#xe0b2;', hex: 'e0b2', name: 'notification' },
    { code: '&#xe22e;', hex: 'e22e', name: 'flag' },
    { code: '&#xe1ea;', hex: 'e1ea', name: 'bookmark' },
    { code: '&#xe0d6;', hex: 'e0d6', name: 'favorite' },
    { code: '&#xe0d7;', hex: 'e0d7', name: 'unfavorite' },
    { code: '&#xe1c5;', hex: 'e1c5', name: 'tag' },
    { code: '&#xe0cf;', hex: 'e0cf', name: 'globe' },
    { code: '&#xe1f2;', hex: 'e1f2', name: 'map' },
    { code: '&#xe1f3;', hex: 'e1f3', name: 'retail-store' },
    { code: '&#xe0d0;', hex: 'e0d0', name: 'building' },
    { code: '&#xe1f5;', hex: 'e1f5', name: 'factory' },
    { code: '&#xe1f6;', hex: 'e1f6', name: 'customer' },
    { code: '&#xe1ec;', hex: 'e1ec', name: 'supplier' },
    { code: '&#xe0e2;', hex: 'e0e2', name: 'employee' },
    { code: '&#xe0e3;', hex: 'e0e3', name: 'person-placeholder' },
    { code: '&#xe1ee;', hex: 'e1ee', name: 'group' },
    { code: '&#xe0e4;', hex: 'e0e4', name: 'contacts' },
    { code: '&#xe228;', hex: 'e228', name: 'org-chart' },
    { code: '&#xe1fe;', hex: 'e1fe', name: 'collaborator' },
    { code: '&#xe0d8;', hex: 'e0d8', name: 'cart' },
    { code: '&#xe1ff;', hex: 'e1ff', name: 'basket' },
    { code: '&#xe202;', hex: 'e202', name: 'credit-card' },
    { code: '&#xe203;', hex: 'e203', name: 'money-bills' },
    { code: '&#xe0d9;', hex: 'e0d9', name: 'sales-order' },
    { code: '&#xe0da;', hex: 'e0da', name: 'sales-quote' },
    { code: '&#xe204;', hex: 'e204', name: 'product' },
    { code: '&#xe205;', hex: 'e205', name: 'inventory' },
    { code: '&#xe0db;', hex: 'e0db', name: 'shipping-status' },
    { code: '&#xe206;', hex: 'e206', name: 'truck' },
    { code: '&#xe207;', hex: 'e207', name: 'flight' },
    { code: '&#xe208;', hex: 'e208', name: 'car-rental' },
    { code: '&#xe209;', hex: 'e209', name: 'subway-train' },
    { code: '&#xe0dd;', hex: 'e0dd', name: 'time-entry-request' },
    { code: '&#xe0de;', hex: 'e0de', name: 'clock' },
    { code: '&#xe20a;', hex: 'e20a', name: 'stopwatch' },
    { code: '&#xe20b;', hex: 'e20b', name: 'timesheet' },
    { code: '&#xe0df;', hex: 'e0df', name: 'history' },
    { code: '&#xe20c;', hex: 'e20c', name: 'gantt-bars' },
    { code: '&#xe20d;', hex: 'e20d', name: 'project-definition-triangle' },
    { code: '&#xe20e;', hex: 'e20e', name: 'workflow-tasks' },
    { code: '&#xe20f;', hex: 'e20f', name: 'checklist' },
    { code: '&#xe210;', hex: 'e210', name: 'checklist-item' },
    { code: '&#xe211;', hex: 'e211', name: 'complete' },
    { code: '&#xe212;', hex: 'e212', name: 'task' },
    { code: '&#xe213;', hex: 'e213', name: 'to-do-list' },
    { code: '&#xe0e5;', hex: 'e0e5', name: 'education' },
    { code: '&#xe214;', hex: 'e214', name: 'course-book' },
    { code: '&#xe215;', hex: 'e215', name: 'course-program' },
    { code: '&#xe216;', hex: 'e216', name: 'study-leave' },
    { code: '&#xe0e6;', hex: 'e0e6', name: 'settings' }
  ];

  // Define categories
  const categories = {
    "Charts & Data": [
      "bar-chart", "table-view", "chart-table-view", "filter", "sort",
      "sort-ascending", "sort-descending", "synchronize", "map", "globe"
    ],
    "Documents": [
      "document", "folder", "open-folder", "pdf-attachment", "excel-attachment",
      "word-text", "ppt-attachment", "attachment", "course-book",
      "course-program", "study-leave", "education"
    ],
    "Actions": [
      "action-settings", "search", "refresh", "download", "upload", "add",
      "delete", "edit", "save", "cancel", "accept", "decline", "undo",
      "redo", "copy", "paste", "create", "display", "activate", "settings"
    ],
    "People": [
      "home", "customer", "employee", "person-placeholder", "group",
      "contacts", "collaborator", "org-chart"
    ],
    "Commerce": [
      "cart", "basket", "credit-card", "money-bills", "sales-order",
      "sales-quote", "product", "inventory", "retail-store", "leads"
    ],
    "Time & Tasks": [
      "calendar", "clock", "stopwatch", "timesheet", "history", "task",
      "checklist", "checklist-item", "complete", "to-do-list", "date-time",
      "time-entry-request", "gantt-bars", "project-definition-triangle",
      "workflow-tasks"
    ],
    "Communication": [
      "information", "warning", "email", "inbox", "outbox", "phone",
      "fax-machine", "share", "post", "comment", "alert", "notification",
      "flag", "bookmark", "favorite", "unfavorite", "tag", "discussion",
      "message-information"
    ],
    "Logistics": [
      "shipping-status", "truck", "flight", "car-rental", "subway-train",
      "factory", "building"
    ]
  };

  // Build the icons HTML grouped by category
  let categoriesHtml = '';
  let totalIcons = 0;

  for (const [categoryName, iconNames] of Object.entries(categories)) {
    // Find icon objects for this category
    const categoryIcons = iconNames
      .map(name => sapIcons.find(icon => icon.name === name))
      .filter(icon => icon !== undefined);

    if (categoryIcons.length > 0) {
      totalIcons += categoryIcons.length;

      categoriesHtml += `
        <div style="margin-top: 2rem;">
          <h3 style="color: #0854a0; font-size: 1.1rem; border-bottom: 1px solid #eee; padding-bottom: 0.5rem; margin-bottom: 1rem;">
            ${categoryName}
          </h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 1rem;">
            ${categoryIcons.map(icon => `
              <div class="icon-showcase-item" data-code="${icon.code}" title="Click to copy code">
                <ui5-icon name="${icon.name}" class="icon-showcase-icon"></ui5-icon>
                <div class="icon-showcase-name">${icon.name}</div>
                <div class="icon-showcase-code">${icon.code}</div>
                <div class="icon-showcase-hex">U+${icon.hex.toUpperCase()}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
  }

  content.innerHTML = `
    <ui5-page style="height: 100%;">
      <ui5-bar slot="header" design="Header">
        <ui5-title level="H5" slot="startContent">SAP UI5 Icons Showcase</ui5-title>
      </ui5-bar>

      <div style="padding: 1rem;">
        <div class="message message-info">
          Displaying <strong>${totalIcons}</strong> SAP UI5 icons in <strong>${Object.keys(categories).length}</strong> categories.
          Click any icon to copy its HTML entity code.
        </div>

        <div class="card">
          <div class="card-header">SAP-icons Font Family</div>
          <p style="margin: 1rem 0; color: #666;">
            These icons are part of the official SAP UI5 icon font. Use the HTML entity code or
            Unicode hex value to display them in your application.
          </p>

          ${categoriesHtml}
        </div>

        <div class="card" style="margin-top: 2rem;">
          <div class="card-header">How to Use SAP Icons</div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-top: 1rem;">
            <div>
              <strong>1. HTML Entity Code</strong>
              <pre style="background: #f5f5f5; padding: 1rem; border-radius: 4px; margin-top: 0.5rem; overflow-x: auto;"><code>&lt;span class="sap-icon"&gt;&amp;#xe0c1;&lt;/span&gt;</code></pre>
              <p style="margin: 0.5rem 0 0 0; color: #666; font-size: 0.9rem;">
                Most common method - works in HTML
              </p>
            </div>
            <div>
              <strong>2. Unicode Escape</strong>
              <pre style="background: #f5f5f5; padding: 1rem; border-radius: 4px; margin-top: 0.5rem; overflow-x: auto;"><code>content: "\\e0c1";</code></pre>
              <p style="margin: 0.5rem 0 0 0; color: #666; font-size: 0.9rem;">
                For use in CSS ::before or ::after
              </p>
            </div>
            <div>
              <strong>3. JavaScript String</strong>
              <pre style="background: #f5f5f5; padding: 1rem; border-radius: 4px; margin-top: 0.5rem; overflow-x: auto;"><code>const icon = "\\ue0c1";</code></pre>
              <p style="margin: 0.5rem 0 0 0; color: #666; font-size: 0.9rem;">
                For dynamic icon insertion
              </p>
            </div>
          </div>
        </div>
      </div>
    </ui5-page>
  `;

  // Attach click handlers to copy icon codes
  setTimeout(() => {
    attachIconHandlers();
  }, 100);
}

function attachIconHandlers() {
  const iconItems = document.querySelectorAll('.icon-showcase-item');

  iconItems.forEach(item => {
    item.addEventListener('click', () => {
      const code = item.getAttribute('data-code');

      // Copy to clipboard
      navigator.clipboard.writeText(code).then(() => {
        // Visual feedback
        item.style.backgroundColor = '#e3f2fd';
        setTimeout(() => {
          item.style.backgroundColor = '';
        }, 500);

        // Show toast notification (if available)
        if (window.showSuccess) {
          window.showSuccess(`Copied: ${code}`);
        }
      }).catch(err => {
        console.error('Failed to copy:', err);
      });
    });
  });
}
