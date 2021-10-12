window.onload = function() {
    document.getElementsByClassName("wrapper")[0].onclick = look;
    document.getElementById("view").onclick = del;
}

function look(event) {
    if (event.target.tagName === 'IMG') {
        document.getElementById("big_photo").src = event.target.src;
        document.getElementById("bas").style.visibility = "visible";
        document.getElementById("view").style.visibility = "visible";
    }
}

function del() {
    console.log('sdacasdc');
    document.getElementById("big_photo").src = "./img/point.png";
    document.getElementById("bas").style.visibility = "hidden";
    document.getElementById("view").style.visibility = "hidden";
}