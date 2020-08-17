binary = null;

function capture() {

    binary = document.getElementById("binary").value;
    if (binary.length == 0){
        return 0;
    }
    else if (binary.length > 8){
        return 0;
    }
    else {
        alert(parseInt(binary, 2));
    }

}