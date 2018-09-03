// BLERGH IGNORE
var importedItems = document.getElementsByClassName("imported");
for (var i=0;i<importedItems.length;i++) {
    var item = importedItems[i];
    var ajax = new XMLHttpRequest();
    
    ajax.open("GET", item.innerHTML, false);
    ajax.send();
    item.outerHTML = ajax.responseText;
}
// BLERGH IGNORE END

var mottos = [
    "Because programming needs spreadsheets",
    "Anton <3 coffee",
    "When life gives you lemons",
    "Not actually a scarecrow",
    "Still stuck playing factorio",
    "It works on my machine",
    "From Sweden with love",
    "We'll burn that bridge when we get there"
];
var motto = document.getElementById("motto");
motto.innerHTML = mottos[Math.floor(Math.random()*mottos.length)];