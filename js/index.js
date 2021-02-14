// function showKarakter() {
//   document.getElementById("karakter_container").style.visibility = "visible";
// }

// function showKarakter() {
//     var currentState = document.getElementById("karakter_container").style.visibility = "hidden";
//     var state = currentState ? "visible":"hidden";
//     document.getElementById("karakter_container").style.visibility  = state;
// }

function showKarakter() {
  var state = document.getElementById(
    "karakter_container");
    state.style.visibility = state.style.visibility === "hidden" ? "visible" : "hidden";
}
