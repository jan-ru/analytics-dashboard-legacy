/**
 * Tree & List Showcase View
 * Displays configuration and usage of ui5-tree, ui5-list, and their items
 */

export function showTreeViewSimple() {
  const content = document.getElementById('content');

  content.innerHTML = `
    <ui5-page style="height: 100%;">
      <ui5-bar slot="header" design="Header">
        <ui5-title level="H5" slot="startContent">Tree & List Showcase</ui5-title>
      </ui5-bar>

      <div style="padding: 1rem;">
        <div class="message message-info">
          This page demonstrates hierarchical data with <strong>Tree</strong> and linear data with <strong>List</strong>.
        </div>

        <!-- Trees -->
        <h3 style="margin-top: 1rem;">Tree Components</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; margin-top: 1rem;">
          
          <!-- Basic Tree (Chart of Accounts) -->
          <div class="card">
            <div class="card-header">Chart of Accounts (Basic Tree)</div>
            <ui5-tree id="basicTree" selection-mode="Single">
              <ui5-tree-item text="Assets" icon="money-bills" expanded>
                <ui5-tree-item text="Current Assets" icon="folder-blank" expanded>
                  <ui5-tree-item text="Cash & Equivalents" icon="official-service"></ui5-tree-item>
                  <ui5-tree-item text="Accounts Receivable" icon="loan"></ui5-tree-item>
                  <ui5-tree-item text="Inventory" icon="product"></ui5-tree-item>
                </ui5-tree-item>
                <ui5-tree-item text="Non-Current Assets" icon="folder-blank">
                  <ui5-tree-item text="Property, Plant & Equipment" icon="factory"></ui5-tree-item>
                  <ui5-tree-item text="Intangible Assets" icon="idea-wall"></ui5-tree-item>
                </ui5-tree-item>
              </ui5-tree-item>
              
              <ui5-tree-item text="Liabilities" icon="loan" expanded>
                <ui5-tree-item text="Current Liabilities" icon="folder-blank">
                  <ui5-tree-item text="Accounts Payable" icon="payment-approval"></ui5-tree-item>
                </ui5-tree-item>
                <ui5-tree-item text="Long-Term Liabilities" icon="folder-blank">
                  <ui5-tree-item text="Bonds Payable" icon="official-service"></ui5-tree-item>
                </ui5-tree-item>
              </ui5-tree-item>
              
              <ui5-tree-item text="Equity" icon="capital-projects">
                <ui5-tree-item text="Share Capital" icon="official-service"></ui5-tree-item>
                <ui5-tree-item text="Retained Earnings" icon="money-bills"></ui5-tree-item>
              </ui5-tree-item>

              <ui5-tree-item text="Revenue" icon="sales-order"></ui5-tree-item>
              <ui5-tree-item text="Expenses" icon="monitor-payments"></ui5-tree-item>
            </ui5-tree>
            <div style="padding: 0.5rem; color: #666; font-style: italic; font-size: 0.8rem;">
              * Note: Placeholder structure based on standard Chart of Accounts.
            </div>
          </div>

          <!-- Custom Tree Items -->
          <div class="card">
            <div class="card-header">Custom Tree Items</div>
            <ui5-tree id="customTree" selection-mode="Multiple">
              <ui5-tree-item-custom expanded>
                <div slot="content" class="custom-tree-item-content">
                  <ui5-icon name="group"></ui5-icon>
                  <strong>Team A</strong>
                  <ui5-badge color-scheme="8">Active</ui5-badge>
                </div>
                
                <ui5-tree-item-custom>
                  <div slot="content" class="custom-tree-item-content">
                    <ui5-avatar icon="employee" size="XS"></ui5-avatar>
                    <span>John Doe</span>
                    <span style="color: gray; font-size: 0.8rem;">(Developer)</span>
                  </div>
                </ui5-tree-item-custom>

                <ui5-tree-item-custom>
                  <div slot="content" class="custom-tree-item-content">
                    <ui5-avatar icon="employee" size="XS"></ui5-avatar>
                    <span>Jane Smith</span>
                    <span style="color: gray; font-size: 0.8rem;">(Designer)</span>
                  </div>
                </ui5-tree-item-custom>
              </ui5-tree-item-custom>

              <ui5-tree-item-custom>
                <div slot="content" class="custom-tree-item-content">
                   <ui5-icon name="group"></ui5-icon>
                   <strong>Team B</strong>
                   <ui5-badge color-scheme="1">On Hold</ui5-badge>
                </div>
              </ui5-tree-item-custom>
            </ui5-tree>
          </div>
        </div>
        
        <!-- Lists -->
        <h3 style="margin-top: 2rem;">List Components</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; margin-top: 1rem;">
          
          <!-- Standard List with Groups -->
          <div class="card">
            <div class="card-header">Standard List with Groups</div>
            <ui5-list id="basicList" mode="SingleSelect">
              <ui5-li-group header-text="Fruits"></ui5-li-group>
              <ui5-li icon="nutrition-activity" description="Red Delicious" additional-text="In Stock">Apple</ui5-li>
              <ui5-li icon="nutrition-activity" description="Cavendish" additional-text="Low Stock" additional-text-state="Warning">Banana</ui5-li>
              
              <ui5-li-group header-text="Vegetables"></ui5-li-group>
              <ui5-li icon="nutrition-activity" description="Baby Carrots" additional-text="Out of Stock" additional-text-state="Error">Carrot</ui5-li>
              <ui5-li icon="nutrition-activity" description="Broccoli Florets">Broccoli</ui5-li>
            </ui5-list>
          </div>

          <!-- Custom List Items -->
          <div class="card">
            <div class="card-header">Custom List Items</div>
            <ui5-list id="customList" mode="None">
              <ui5-li-custom>
                <div class="custom-list-item">
                  <div class="custom-list-image" style="background-color: #e3f2fd;">📦</div>
                  <div class="custom-list-content">
                    <div class="custom-list-title">Order #1234</div>
                    <div class="custom-list-subtitle">Shipped on Dec 8, 2025</div>
                  </div>
                  <ui5-button icon="navigation-right-arrow" design="Transparent"></ui5-button>
                </div>
              </ui5-li-custom>

              <ui5-li-custom>
                <div class="custom-list-item">
                  <div class="custom-list-image" style="background-color: #ffebee;">⚠️</div>
                  <div class="custom-list-content">
                    <div class="custom-list-title">Order #1235</div>
                    <div class="custom-list-subtitle" style="color: #bb0000;">Payment Failed</div>
                  </div>
                  <ui5-button icon="refresh" design="Emphasized">Retry</ui5-button>
                </div>
              </ui5-li-custom>

               <ui5-li-custom>
                <div class="custom-list-item">
                  <div class="custom-list-image" style="background-color: #e8f5e9;">✅</div>
                  <div class="custom-list-content">
                    <div class="custom-list-title">Order #1236</div>
                    <div class="custom-list-subtitle">Delivered</div>
                  </div>
                  <ui5-badge color-scheme="7">Completed</ui5-badge>
                </div>
              </ui5-li-custom>
            </ui5-list>
          </div>

        </div>

        <style>
          .custom-tree-item-content {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 0;
            width: 100%;
          }
          
          .custom-list-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            width: 100%;
            padding: 0.5rem 0;
          }
          
          .custom-list-image {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
          }
          
          .custom-list-content {
            flex: 1;
            display: flex;
            flex-direction: column;
          }
          
          .custom-list-title {
            font-weight: bold;
            font-size: 1rem;
          }
          
          .custom-list-subtitle {
            font-size: 0.8rem;
            color: #666;
          }
        </style>

      </div>
    </ui5-page>
  `;

  // Attach handlers
  const basicTree = document.getElementById('basicTree');
  if (basicTree) {
    basicTree.addEventListener('item-click', (event) => {
      console.log('Clicked tree item:', event.detail.item.text);
    });
  }
  
  const basicList = document.getElementById('basicList');
  if (basicList) {
    basicList.addEventListener('item-click', (event) => {
       console.log('Clicked list item:', event.detail.item.textContent);
    });
  }
}
