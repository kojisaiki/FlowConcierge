export function setupDragdrop() {
  const body = document.querySelectorAll('body').item(0);
  const editor = document.querySelectorAll('div.manage-flow-section').item(0);

  if (body instanceof HTMLElement && editor instanceof HTMLElement) {
    editor.addEventListener('dragstart', () => {
      editor.classList.add('dragstep');
    });

    document.addEventListener('mouseup', () => {
      editor.classList.remove('dragstep');
    });
    document.addEventListener('drop', () => {
      editor.classList.remove('dragstep');
    });
  }
}
