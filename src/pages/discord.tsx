export default function RedirectToDiscord() {
  if (typeof window !== 'undefined') {
    window.location.href = 'https://discord.gg/pelican-panel';
  }
  return null; // Return null since no UI is needed.
}
