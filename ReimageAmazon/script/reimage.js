function ship() {
        console.log('Button clicked')
        const el = document.getElementsByClassName("shipping");
        console.log(el);
        document.getElementById("ship1").style.visibility = "visible";
}
function ship2() {
        console.log('Button clicked')
        const el = document.getElementsByClassName("shipping");
        console.log(el);
        document.getElementById("ship2").style.visibility = "visible";
}
function ship3() {
        console.log('Button clicked')
        const el = document.getElementsByClassName("shipping");
        console.log(el);
        document.getElementById("ship3").style.visibility = "visible";
}


// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}