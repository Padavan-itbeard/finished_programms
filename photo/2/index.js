window.onload = function () {
    document.getElementById("photo").onclick = look;
    document.getElementById("view").onclick = del;

    function look() {
        document.getElementById("view").style.visibility = "visible";
        document.getElementById("bas").style.visibility = "visible";
        console.log('object look :>> ');
        return false;
    }

    function del() {
        document.getElementById("view").style.visibility = "hidden";
        document.getElementById("bas").style.visibility = "hidden";
        console.log('object del :>> ');

        return false;
    }
};
