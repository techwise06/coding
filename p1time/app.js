// script.js
function updateTime() {
    const timeDisplay = document.getElementById('time-display');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
  }
  
  // Update the time every second
  setInterval(updateTime, 1000);
  
  // Initialize the time immediately
  updateTime();
  