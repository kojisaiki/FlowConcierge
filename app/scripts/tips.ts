/**
 * View tips on Flow Editor.
 */
export function tips() {
  // add tips panel
  const panel = document.createElement('div');
  panel.classList.add('tips-panel');
  const manageFlowSection = document
    .querySelectorAll('div.manage-flow-section')
    .item(0);
  manageFlowSection.parentElement!.insertBefore(panel, manageFlowSection);

  // Test button
  const icon = document.querySelectorAll('[data-icon-name="TestBeaker"]');
  if (icon.length === 1) {
    // alert(icon[0].className);
    // alert(icon[0].parentElement!.parentElement!.getAttribute('aria-label'));
    icon[0].parentElement!.parentElement!.addEventListener('mouseenter', e => {
      console.log('mouseenter test');
    });
    icon[0].parentElement!.parentElement!.addEventListener('mouseleave', e => {
      console.log('mouseleave test');
    });
  }
}
