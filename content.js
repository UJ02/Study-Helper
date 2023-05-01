// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.command === "toggleStudyMode") {
    // Toggle the visibility of the playbar
    var playbar = document.getElementsByClassName("ytp-chrome-bottom")[0];
    if (playbar.style.display === "none") {
      playbar.style.display = "";
      document.getElementsByTagName("video")[0].style.width = "calc(100vw - 300px)"; // Subtract the width of the removed playbar
      document.getElementsByTagName("video")[0].style.objectFit = "contain"; // Keep the aspect ratio of the video
    } else {
      playbar.style.display = "none";
      document.getElementsByTagName("video")[0].style.width = "100vw"; // Stretch the video to occupy 100% of the viewport width
      document.getElementsByTagName("video")[0].style.objectFit = "cover"; // Fill the available space with the video
    }
   
    // Toggle the visibility of the suggestions and comments
    var secondaryInfo = document.getElementById("secondary");
    var comments = document.getElementById("comments");
    if (secondaryInfo.style.display === "none") {
      secondaryInfo.style.display = "";
      comments.style.display = "";
    } else {
      secondaryInfo.style.display = "none";
      comments.style.display = "none";
    }

    sendResponse({ status: "toggled" });
  }
});
