var contatore= 0

function aggiungi(){
    contatore++;
    document.getElementById("number").innerHTML = contatore;
}

function togli(){
    if (contatore>0) {
        contatore--;
        document.getElementById("number").innerHTML = contatore;
    }
    else {
        window.alert("CONTATORE A ZERO!")
    }
}

function reset(){
    contatore=0
    document.getElementById("number").innerHTML = contatore;
}