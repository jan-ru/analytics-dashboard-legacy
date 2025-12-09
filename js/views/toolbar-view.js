/**
 * Toolbar Showcase View
 * Displays various configurations of the ui5-toolbar component
 */

export function showToolbarViewSimple() {
  const content = document.getElementById('content');

  content.innerHTML = `
    <ui5-page style="height: 100%;">
      <ui5-bar slot="header" design="Header">
        <ui5-title level="H5" slot="startContent">Toolbar Showcase</ui5-title>
      </ui5-bar>

      <div style="padding: 1rem;">
        <div class="message message-info">
          The <strong>Toolbar</strong> component allows you to create a horizontal layout with items.
          It supports overflow, spacers, separators, and various alignment options.
        </div>

        <!-- Basic Toolbar -->
        <div class="card" style="margin-top: 1rem;">
          <div class="card-header">Basic Toolbar</div>
          
          <ui5-toolbar id="basicToolbar" align-content="Start">
            <ui5-toolbar-button text="Edit" icon="edit"></ui5-toolbar-button>
            <ui5-toolbar-button text="Save" icon="save" design="Emphasized"></ui5-toolbar-button>
            <ui5-toolbar-separator></ui5-toolbar-separator>
            <ui5-toolbar-button text="Delete" icon="delete" design="Negative"></ui5-toolbar-button>
            <ui5-toolbar-spacer></ui5-toolbar-spacer>
            <ui5-toolbar-button icon="settings" text="Settings"></ui5-toolbar-button>
          </ui5-toolbar>
        </div>

        <!-- Toolbar with Selection -->
        <div class="card" style="margin-top: 2rem;">
          <div class="card-header">Toolbar with Select and Spacer</div>
          
          <ui5-toolbar align-content="Start">
            <ui5-toolbar-button icon="home" text="Home"></ui5-toolbar-button>
            
            <ui5-toolbar-select>
              <ui5-toolbar-select-option>Option 1</ui5-toolbar-select-option>
              <ui5-toolbar-select-option selected>Option 2</ui5-toolbar-select-option>
              <ui5-toolbar-select-option>Option 3</ui5-toolbar-select-option>
            </ui5-toolbar-select>

            <ui5-toolbar-spacer></ui5-toolbar-spacer>
            
            <ui5-toolbar-button text="Action 1"></ui5-toolbar-button>
            <ui5-toolbar-button text="Action 2"></ui5-toolbar-button>
          </ui5-toolbar>
        </div>

        <!-- Right Aligned Toolbar -->
        <div class="card" style="margin-top: 2rem;">
          <div class="card-header">Right Aligned Content</div>
          
          <ui5-toolbar align-content="End">
            <ui5-toolbar-button text="Decline" design="Transparent"></ui5-toolbar-button>
            <ui5-toolbar-button text="Accept" design="Emphasized"></ui5-toolbar-button>
          </ui5-toolbar>
        </div>

        <!-- Playground -->
        <div class="card" style="margin-top: 2rem;">
          <div class="card-header">Toolbar Components Description</div>
          <ul style="margin-left: 1.5rem; margin-top: 0.5rem; color: #666;">
            <li><strong>ui5-toolbar-button</strong>: A button specifically designed for toolbars.</li>
            <li><strong>ui5-toolbar-select</strong>: A dropdown menu for toolbars.</li>
            <li><strong>ui5-toolbar-separator</strong>: A vertical line to separate items.</li>
            <li><strong>ui5-toolbar-spacer</strong>: A flexible space that pushes items apart.</li>
          </ul>
        </div>

      </div>
    </ui5-page>
  `;

  // Attach handlers
  const basicToolbar = document.getElementById('basicToolbar');
  if (basicToolbar) {
    basicToolbar.addEventListener('click', (e) => {
      // Basic event delegation or specific item handling
      if (e.target.tagName.toLowerCase().includes('button')) {
        console.log('Toolbar button clicked:', e.target.text || e.target.icon);
      }
    });
  }
}
