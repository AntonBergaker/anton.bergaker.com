
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
    "Turning beans into code",
    "When life gives you lemons",
    "Not actually a scarecrow",
    "Still stuck playing factorio"
];
var motto = document.getElementById("motto");
motto.innerHTML = mottos[Math.floor(Math.random()*mottos.length)];