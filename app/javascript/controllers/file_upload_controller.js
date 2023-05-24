import { Controller } from '@hotwired/stimulus';
import { post } from '@rails/request.js';

// Connects to data-controller="file-upload"
export default class extends Controller {
  handleFileChange(event) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    post('/direct_uploads', {
      body: formData,
      responseKind: 'turbo-stream',
    })
      .then((response) => {
        console.log('Upload successful!');
        // Perform further actions, such as updating the UI or displaying a success message
      })
      .catch((error) => {
        console.error('Upload failed: ' + error);
        // Handle upload errors
      });
  }
}
