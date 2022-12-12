// If Stetements


var color = prompt("Trage eine farbe ein");
var lowerColorName = color.toLocaleLowerCase();



// Wenn Grün -> fahren
if(lowerColorName == "grün"){
    alert("Du kannst");
} else if (lowerColorName == "oragne"){
    alert("Halte");
} else if (lowerColorName == "rot"){
    alert("Stop");
} else if (lowerColorName == "blau"){
    alert("du bist fikka");
} else {
    alert("Heute nicht");	
}

// Wenn Oragne -> anfahren/anbremsen

// Wenn Rot -> halten

// Fehlermeldeung zurück geben bei falscher Farbe

// Der Erste Buchstabe muss immer klein sein !

// ZEILE 5: var (steht für Variable) age (ist die Variable) = prompt("hier der Text der Aufgerufen soll")
// ZEILE 5: var prompt ist eine funktion die ein einagbe fenster aufruft
// ZEILE 5: var (steht für Variable) lowerColerName (ist die Variable) = coler (die Variable auf Zeile 4).toLocaleLowerCase(); dadurch wird Groß und Kleinschreibung gelesen also egal ob gro0 oder klein
