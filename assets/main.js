// Roza — site behaviour: header chrome.

(() => {
  const root = document.documentElement;
  root.classList.remove("no-js");

  // Header picks up its glass once the page scrolls under it.
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
})();
