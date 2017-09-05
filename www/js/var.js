var modal = document.getElementById('id01');
var model = document.getElementById('id02');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal || event.target == model) {
        modal.style.display = "none";
        model.style.display = "none";
    }
}
