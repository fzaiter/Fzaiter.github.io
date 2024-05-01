//Copy text to clipboard
function copyToClipboard(textId, tooltipId) {
  const textElement = document.getElementById(textId);
  const tooltip = document.getElementById(tooltipId);
  navigator.clipboard.writeText(textElement.value);
  tooltip.style.opacity = 1;
  setTimeout(function () {
    tooltip.style.opacity = 0;
  }, 1500);
}

// Progress bar - source: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_indicator
function progressFunction() {
  const winScroll = window.scrollY || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = `${scrolled}%`;
}

// Scroll To Top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
