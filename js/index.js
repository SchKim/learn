

function showKarakter() {
  var state = document.getElementsByClassName(
    "karakter__revealer");
    var aNode = state[0];
    aNode.style.visibility = aNode.style.visibility === "hidden" ? "visible" : "hidden";
}
