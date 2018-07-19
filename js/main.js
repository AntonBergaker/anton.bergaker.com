var mottos = [
    "Because programming needs spreadsheets",
    "Turning beans into code",
    "When life gives you lemons",
    "Not actually a scarecrow",
    "Still stuck playing factorio"
];
var motto = document.getElementById("motto");
motto.innerHTML = mottos[Math.floor(Math.random()*mottos.length)];