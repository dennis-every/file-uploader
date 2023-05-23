import { Controller } from '@hotwired/stimulus';

// Connects to data-controller="file-upload"
export default class extends Controller {
  static targets = ['source'];

  handleFileChange(event) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
  }
}
