/**
 * Product Switch Showcase View
 * Displays configuration and usage of ui5-product-switch and ui5-product-switch-item
 */

export function showProductSwitchViewSimple() {
  const content = document.getElementById('content');

  content.innerHTML = `
    <ui5-page style="height: 100%;">
      <ui5-bar slot="header" design="Header">
        <ui5-title level="H5" slot="startContent">Product Switch Showcase</ui5-title>
      </ui5-bar>

      <div style="padding: 1rem;">
        <div class="message message-info">
          The <strong>ProductSwitch</strong> component is used to navigate between different applications or products.
          It is typically used within a <strong>ShellBar</strong>.
        </div>

        <div style="display: flex; gap: 2rem; margin-top: 1rem; flex-wrap: wrap;">
          
          <!-- Basic Product Switch -->
          <div class="card" style="flex: 1; min-width: 300px;">
            <div class="card-header">Basic Usage</div>
            <p style="margin-bottom: 1rem; color: #666;">Standard product switch with icons and titles.</p>
            
            <div style="background: #f5f5f5; padding: 1rem; border-radius: 4px; display: flex; justify-content: center;">
              <ui5-product-switch>
                <ui5-product-switch-item title-text="Home" subtitle-text="Central Home" icon="home"></ui5-product-switch-item>
                <ui5-product-switch-item title-text="Analytics" subtitle-text="Business Intelligence" icon="business-objects-experience"></ui5-product-switch-item>
                <ui5-product-switch-item title-text="Catalog" subtitle-text="Product Inventory" icon="contacts"></ui5-product-switch-item>
                <ui5-product-switch-item title-text="Settings" subtitle-text="System Configuration" icon="action-settings"></ui5-product-switch-item>
              </ui5-product-switch>
            </div>
          </div>

          <!-- Product Switch in Context -->
          <div class="card" style="flex: 1; min-width: 300px;">
            <div class="card-header">Simulated ShellBar Context</div>
            <p style="margin-bottom: 1rem; color: #666;">Clicking items triggers navigation events.</p>

            <div style="border: 1px solid #ddd; border-radius: 0.25rem;">
              <ui5-shellbar primary-title="My Application" secondary-title="Analytics">
                <ui5-button slot="startButton" icon="menu"></ui5-button>
                <ui5-avatar slot="profile" icon="employee"></ui5-avatar>
                <ui5-button slot="productSwitch" icon="grid" id="productSwitchBtn"></ui5-button>
              </ui5-shellbar>
              
              <div id="productSwitchContainer" style="display: none; justify-content: flex-end; padding: 0.5rem; border-bottom: 1px solid #ddd; background: white;">
                <ui5-product-switch id="contextProductSwitch">
                   <ui5-product-switch-item title-text="SAP S/4HANA" subtitle-text="Cloud ERP" icon="sap-ui5"></ui5-product-switch-item>
                   <ui5-product-switch-item title-text="SuccessFactors" subtitle-text="HR Management" icon="group"></ui5-product-switch-item>
                   <ui5-product-switch-item title-text="Concur" subtitle-text="Travel & Expense" icon="flight"></ui5-product-switch-item>
                   <ui5-product-switch-item title-text="Ariba" subtitle-text="Procurement" icon="cart"></ui5-product-switch-item>
                </ui5-product-switch>
              </div>

              <div style="padding: 2rem; text-align: center; background: #fafafa; min-height: 150px; display: flex; align-items: center; justify-content: center;">
                <span id="navigationResult" style="color: #666; font-style: italic;">Select a product from the grid icon above...</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </ui5-page>
  `;

  // Attach handlers
  const productSwitchBtn = document.getElementById('productSwitchBtn');
  const productSwitchContainer = document.getElementById('productSwitchContainer');
  const contextProductSwitch = document.getElementById('contextProductSwitch');
  const navigationResult = document.getElementById('navigationResult');

  if (productSwitchBtn && productSwitchContainer) {
    productSwitchBtn.addEventListener('click', () => {
      const isVisible = productSwitchContainer.style.display === 'flex';
      productSwitchContainer.style.display = isVisible ? 'none' : 'flex';
    });
  }

  if (contextProductSwitch) {
    contextProductSwitch.addEventListener('click', (event) => {
      const item = event.target.closest('ui5-product-switch-item');
      if (item) {
        navigationResult.innerHTML = `Navigating to: <strong>${item.titleText}</strong><br><small>${item.subtitleText}</small>`;
        productSwitchContainer.style.display = 'none';
        
        // Visual feedback
        item.removeAttribute('selected'); // Reset selection for demo
      }
    });
  }
}
