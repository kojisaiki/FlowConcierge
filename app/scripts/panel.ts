let env_id = document.getElementById('environment-id');
if (env_id) {
  env_id.innerHTML = 'env!';
}

let flow_id = document.getElementById('flow-id');
if (flow_id) {
  flow_id.innerHTML = 'flow!';
}

let hostname = document.getElementById('hostname');
if (hostname) {
  hostname.innerHTML = 'hostname!';
}

let status_element = document.getElementById('status');

const port = chrome.runtime.connect({ name: 'devtools' });
port.onMessage.addListener(
  (msg: {
    msg: string;
    tabId: number;
    changeInfo: chrome.tabs.TabChangeInfo;
    tab: chrome.tabs.Tab;
  }) => {
    // Write information to the panel, if exists.
    // If we don't have a panel reference (yet), queue the data.
    if (!status_element) return;
    if (msg.msg === 'FlowEditor') {
      status_element.innerHTML = 'FlowEditor!: ' + JSON.stringify(msg);
    } else {
      status_element.innerHTML = 'any msg: ' + JSON.stringify(msg);
    }

    chrome.tabs.query({ index: msg.tab.index }, tabs => {
      if (hostname) {
        hostname.innerHTML = JSON.stringify(tabs[0].url);
      }
    });
  }
);
