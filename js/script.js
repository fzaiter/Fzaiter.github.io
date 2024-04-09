function CopyToClipboard(text_id) {
    var Text = document.getElementById(text_id);
    navigator.clipboard.writeText(Text.value);
    
    console.log("Email copied to clipboard");

}