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
        binaryCalc = parseInt(binary, 2);
        if (isNaN(binaryCalc)) {
            alert("Só é permitido 0's ou 1's.");
        }
        else {
            alert(binaryCalc);
        }
    }
}
