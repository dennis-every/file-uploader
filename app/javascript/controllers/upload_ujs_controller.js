import { Controller } from '@hotwired/stimulus';
import Rails from '@rails/ujs';

Rails.start();

// Connects to data-controller="upload-ujs"
export default class extends Controller {
  handleFileChange(event) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    Rails.ajax({
      url: '/direct_ujs_uploads',
      type: 'POST',
      data: formData,
      dataType: 'script',
      processData: false,
      contentType: false,
      success: (response) => {
        console.log('Upload successful!');
        // Perform further actions, such as updating the UI or displaying a success message
      },
      error: (xhr, status, error) => {
        console.error('Upload failed: ' + error);
        // Handle upload errors
      },
    });
  }
}
