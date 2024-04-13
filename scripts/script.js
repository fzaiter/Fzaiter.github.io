function CopyToClipboard(text_id) {
    var Text = document.getElementById(text_id);
    navigator.clipboard.writeText(Text.value);
    console.log("Email copied to clipboard");
}

// Progress bar - source: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_indicator
function ProgressFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
