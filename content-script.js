// Listen for changes in the DOM
const observer = new MutationObserver(() => {
    // Find and remove any ad elements
    const adElements = document.querySelectorAll('.video-ads');
    adElements.forEach(element => element.remove());
  });



  
  // Start observing the DOM
  observer.observe(document, { childList: true, subtree: true });

  // Listen for messages from the popup
chrome.runtime.onMessage.addListener(message => {
    if (message.action === 'enableAdBlocking') {
        // Find and remove any ad elements
        const adElements = document.querySelectorAll('.video-ads');
        adElements.forEach(element => element.remove());
      }
    if (message.action === 'disableAdBlocking') {
        // Find and remove any ad elements
        const adElements = document.querySelectorAll('.video-ads');
        adElements.forEach(element => element.add());
      }
  });
  