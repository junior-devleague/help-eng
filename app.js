function getSelectionText() {
    console.log("hi");
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
        document.getElementsByTagName('div').innerHTML = text;
        console.log(text);
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}