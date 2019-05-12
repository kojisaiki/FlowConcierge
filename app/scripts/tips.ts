/**
 * View tips on Flow Editor.
 */
export function tips() {
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
