chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  let isFlowEditor = false;

  if (document.querySelectorAll('div.manage-flow-section').length === 1) {
    isFlowEditor = true;
  }

  // write some code
  sendResponse({ msg: 'response', isFlowEditor: isFlowEditor });
});
