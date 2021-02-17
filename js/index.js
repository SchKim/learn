

function showKarakter() {
  var state = document.getElementsByClassName(
    "karakter_container");
    var aNode = state[0];
    aNode.style.visibility = aNode.style.visibility === "hidden" ? "visible" : "hidden";
}
