const loader = document.getElementById('loader');
const noInternetError = document.getElementById('noInternetError');
const reconnectBtn = document.getElementById('reconnectBtn');
const exitBtn = document.getElementById('exitBtn');

function checkConnection() {
  // Show loader, hide error
  loader.classList.remove('hidden');
  noInternetError.classList.add('hidden');
  
  // Ask backend to perform a strict DNS check
  window.electronAPI.checkInternet();
}

// Listen for backend DNS check result
window.electronAPI.onInternetStatus((isOnline) => {
  if (isOnline) {
    // Wait slightly for the smooth splash animation, then proceed
    setTimeout(() => {
      window.electronAPI.proceedToHome();
    }, 1500);
  } else {
    // No internet, show error modal
    loader.classList.add('hidden');
    noInternetError.classList.remove('hidden');
  }
});

reconnectBtn.addEventListener('click', () => {
  checkConnection();
});

exitBtn.addEventListener('click', () => {
  window.electronAPI.exitApp();
});

// Initial check on load
checkConnection();