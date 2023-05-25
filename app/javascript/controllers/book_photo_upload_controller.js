import { Controller } from '@hotwired/stimulus';

// Connects to data-controller="book-photo-upload"
export default class extends Controller {
  handleFileChange(event) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

    fetch('/fetch_direct_uploads', {
      method: 'POST',
      body: formData,
      headers: {
        'X-CSRF-Token': csrfToken,
        Accept: 'text/javascript',
      },
    })
      .then((response) => {
        // Handle the response
        console.log('Upload successful!');
        // Perform further actions, such as updating the UI or displaying a success message
      })
      .catch((error) => {
        // Handle any errors
        console.error('Upload failed: ' + error);
        // Handle upload errors
      });
  }
}
