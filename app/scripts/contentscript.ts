import { tips } from './tips';
import { setupDragdrop } from './dragdrop';

let setup: boolean = false;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (setup) return;
  setup = true;

  let isFlowEditor = false;
  if (document.querySelectorAll('div.manage-flow-section').length === 1) {
    isFlowEditor = true;

    tips();
    setupDragdrop();
  }

  // write some code
  sendResponse({ msg: 'response', isFlowEditor: isFlowEditor });
});
