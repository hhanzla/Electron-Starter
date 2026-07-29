document.addEventListener('DOMContentLoaded', () => {
  // Logic for the home page will go here
  console.log("Home page loaded successfully.");

  // Handle Close Button click
  const closeBtn = document.getElementById('closeAppBtn');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      // Calls the exitApp function exposed in preload.js
      window.electronAPI.exitApp();
    });
  }
});
