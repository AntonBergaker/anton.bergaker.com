// BLERGH IGNORE
let importedItems = document.getElementsByClassName("imported");
for (let i=0;i<importedItems.length;i++) {
    let item = importedItems[i];
     let ajax = new XMLHttpRequest();
    
    ajax.open("GET", item.innerHTML, false);
    ajax.send();
    item.outerHTML = ajax.responseText;
}
// BLERGH IGNORE END
let mottos = [
    "Because programming needs spreadsheets",
    "Anton <3 coffee",
    "When life gives you lemons",
    "Not actually a scarecrow",
    "Still stuck playing factorio",
    "It works on my machine",
    "From Sweden with love",
    "We'll burn that bridge when we get there",
    "Let's add it to a list! Let's add the list to a list!",
    "You can do it 🎉"
];
let motto = document.getElementById("motto");
motto.innerHTML = mottos[Math.floor(Math.random()*mottos.length)];