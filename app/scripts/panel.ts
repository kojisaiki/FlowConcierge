const OWN_TAB_ID = chrome.devtools.inspectedWindow.tabId;

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
  (payload: {
    msg: string;
    tabId: number;
    changeInfo: chrome.tabs.TabChangeInfo;
    tab: chrome.tabs.Tab;
  }) => {
    if (payload.tabId !== OWN_TAB_ID) return;

    if (!status_element) return;

    // Write information to the panel, if exists.
    // If we don't have a panel reference (yet), queue the data.
    if (payload.msg === 'FlowEditor') {
      status_element.innerHTML = 'FlowEditor!: ' + JSON.stringify(payload);
    } else {
      status_element.innerHTML = 'any msg: ' + JSON.stringify(payload);
    }

    chrome.tabs.query({ index: payload.tab.index }, tabs => {
      if (hostname) {
        hostname.innerHTML = JSON.stringify(tabs[0].url);
      }
    });
  }
);
