let env_id = document.getElementById('environment-id');
if (env_id) {
  env_id.innerHTML = 'env!';
}

let flow_id = document.getElementById('flow-id');
if (flow_id) {
  flow_id.innerHTML = 'flow!';
}

let status_element = document.getElementById('status');

const port = chrome.runtime.connect({ name: 'devtools' });
port.onMessage.addListener(function(msg: { msg: string }) {
  // Write information to the panel, if exists.
  // If we don't have a panel reference (yet), queue the data.
  if (!status_element) return;
  if (msg.msg === 'FlowEditor') {
    status_element.innerHTML = 'FlowEditor!';
  } else {
    status_element.innerHTML = 'any msg: ' + JSON.stringify(msg);
  }
});
