function copyToClipboard(textId) {
  const textElement = document.getElementById(textId);
  navigator.clipboard.writeText(textElement.value);
  console.log("Email copied to clipboard");
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
