// Enable chromereload by uncommenting this line:
// import 'chromereload/devonly'

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (tab.status === 'complete') {
    chrome.tabs.sendMessage(tabId, { msg: 'message' }, response => {
      alert('response:' + JSON.stringify(response));
    });
  }
});
