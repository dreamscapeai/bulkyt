// script.js
document.addEventListener('DOMContentLoaded', function() {
  const urlInput = document.getElementById('urlInput');
  const downloadButton = document.getElementById('downloadButton');

  downloadButton.addEventListener('click', function() {
    const videoUrl = urlInput.value;
    if (videoUrl) {
      window.location.href = '/download?url=' + encodeURIComponent(videoUrl);
    }
  });
});
