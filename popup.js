// Get a reference to the study mode toggle button
var studyModeToggle = document.getElementById("toggleButton");

// Add a click event listener to the study mode toggle button
studyModeToggle.addEventListener("click", function() {
  // Send a message to the content script to toggle study mode
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { command: "toggleStudyMode" }, function(response) {
      console.log(response.status);
    });
  });
})
