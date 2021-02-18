

function showKarakter() {
  var state = document.getElementsByClassName(
    "karakter");
    var aNode = state[0];
    aNode.style.visibility = aNode.style.visibility === "hidden" ? "visible" : "hidden";
}
