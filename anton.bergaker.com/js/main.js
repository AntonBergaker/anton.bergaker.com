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
    "You can do it 🎉",
	"But can we make it cuter?",
	"This message only appears if you're cute"
];
let motto = document.getElementById("motto");
motto.innerHTML = mottos[Math.floor(Math.random()*mottos.length)];