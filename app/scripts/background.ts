// Enable chromereload by uncommenting this line:
// import 'chromereload/devonly'

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});

// TODO: devtoolsインスタンスはタブ数だけあるはずなので、管理方法の最適化が必要
const ports: chrome.runtime.Port[] = [];
chrome.runtime.onConnect.addListener(function(port) {
  if (port.name !== 'devtools') return;

  ports.push(port);
  // Remove port when destroyed (eg when devtools instance is closed)
  port.onDisconnect.addListener(function() {
    let i = ports.indexOf(port);
    if (i !== -1) ports.splice(i, 1);
  });
  port.onMessage.addListener(function(msg) {
    // no-op
  });
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (tab.status === 'complete') {
    chrome.tabs.sendMessage(
      tabId,
      { msg: 'message' },
      (response: { isFlowEditor: boolean }) => {
        // alert('response:' + JSON.stringify(response));
        if (response && response.isFlowEditor) {
          // TODO: devtools インスタンスとそのコネクションはタブの数だけあるはず。送り先を考えないと。
          ports.forEach(port =>
            port.postMessage({
              msg: 'FlowEditor',
              tabId: tabId,
              changeInfo: changeInfo,
              tab: tab
            })
          );
        } else {
          ports.forEach(port =>
            port.postMessage({
              msg: 'not',
              tabId: tabId,
              changeInfo: changeInfo,
              tab: tab
            })
          );
        }
      }
    );
  }
});
