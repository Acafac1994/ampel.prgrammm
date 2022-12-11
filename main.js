// If Stetements

function main () {


var input = document.getElementById("inputColor");

var color = input.value;

var lowerColorName = color.toLocaleLowerCase();



    console.log("Funktion wurde aufgerufen")

    if(lowerColorName == "grün"){
        alert("Du kannst");
    } else if (lowerColorName == "oragne"){
        alert("Halte");
    } else if (lowerColorName == "rot"){
        alert("Stop");
    } else if (lowerColorName == "blau"){
        alert("du bist fikka");
    } else if (lowerColorName == "schwarz") {
        alert("Du Idiot");	
    } else {
        alert("Aca ist König wenn das funktioniert!")
    }
    

}