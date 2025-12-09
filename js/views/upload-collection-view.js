/**
 * Upload Collection View
 * Showcase for ui5-upload-collection and ui5-upload-collection-item
 */

export function showUploadCollectionViewSimple() {
  const content = document.getElementById('content');

  content.innerHTML = `
    <ui5-page style="height: 100%;">
      <ui5-bar slot="header" design="Header">
        <ui5-title level="H5" slot="startContent">Upload Collection Showcase</ui5-title>
      </ui5-bar>

      <div style="padding: 1rem;">
        <div class="message message-info">
          The <strong>UploadCollection</strong> component allows users to upload single or multiple files.
          It supports drag and doubt, file renaming, and various upload states.
        </div>

        <div class="card" style="margin-top: 1rem;">
          <div class="card-header">Basic Upload Collection</div>
          
          <ui5-upload-collection id="uploadCollection"
            accessible-name="Uploaded Files"
            selection-mode="Multiple"
            no-data-text="Drop files here or click to upload"
            no-data-description="Supported formats: .jpg, .png, .pdf, .xlsx"
          >
            <!-- Header Slot -->
            <div slot="header" style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
              <ui5-title level="H6">Attached Files (4)</ui5-title>
              <ui5-button icon="add" design="Emphasized">Add File</ui5-button>
            </div>

            <!-- Items -->
            <ui5-upload-collection-item
              file-name="Project_Plan_2024.xlsx"
              file-name-clickable
              type="Active"
              upload-state="Complete"
              progress="100"
            >
              <ui5-icon slot="thumbnail" name="excel-attachment"></ui5-icon>
              <div slot="default">Uploaded on: Dec 8, 2025</div>
            </ui5-upload-collection-item>

            <ui5-upload-collection-item
              file-name="Design_Mockups.png"
              file-name-clickable
              type="Active"
              upload-state="Complete"
              progress="100"
            >
              <img slot="thumbnail" src="https://sdk.openui5.org/test-resources/sap/m/images/HT-1000.jpg" alt="Thumbnail">
            </ui5-upload-collection-item>

            <ui5-upload-collection-item
              file-name="Q4_Report_Draft.pdf"
              type="Detail"
              upload-state="Uploading"
              progress="60"
            >
              <ui5-icon slot="thumbnail" name="pdf-attachment"></ui5-icon>
            </ui5-upload-collection-item>

            <ui5-upload-collection-item
              file-name="Error_Log_Dump.txt"
              type="Active"
              upload-state="Error"
            >
              <ui5-icon slot="thumbnail" name="document-text"></ui5-icon>
            </ui5-upload-collection-item>

          </ui5-upload-collection>
        </div>

        <div class="card" style="margin-top: 2rem;">
          <div class="card-header">Configuration & Features</div>
          <ul style="margin-left: 1.5rem; margin-top: 0.5rem; color: #666;">
            <li><strong>Selection Mode:</strong> Multiple, Single, or Delete</li>
            <li><strong>Drag & Drop:</strong> Native support for file dropping</li>
            <li><strong>Upload States:</strong> Ready, Uploading, Complete, Error</li>
            <li><strong>Thumbnails:</strong> Support for icons or images</li>
            <li><strong>Renaming:</strong> Built-in support for renaming files</li>
          </ul>
        </div>
      </div>
    </ui5-page>
  `;

  // Attach event handlers
  const uploadCollection = document.getElementById('uploadCollection');
  
  if (uploadCollection) {
    // Handle item deletion
    uploadCollection.addEventListener('item-delete', (event) => {
      event.detail.item.remove();
    });

    // Handle file name click
    uploadCollection.addEventListener('file-name-click', (event) => {
      alert(`Clicked file: ${event.detail.item.fileName}`);
    });

    // Handle rename
    uploadCollection.addEventListener('rename', (event) => {
      console.log('Renaming:', event.detail.item.fileName);
    });
  }
}
