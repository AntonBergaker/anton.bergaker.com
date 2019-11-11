const honkButton = document.getElementById("honk_me");
const honkCollection = document.getElementById("honk_collection");
const activeUsers =  document.getElementById("active_users");
const volumeButton = document.getElementById("volume");
const honkOptions = document.getElementById("honk_options");
const socket = io("https://honk.bergaker.com");

volumes = [
    1,
    0.2,
    0
];

let activeHonks = 0;

let volumeIndex = 0;
let volume = volumes[volumeIndex];
let colorIndex = 0;

let oldEgg = undefined;

function randomRange(x1, x2) {
    return x1 + (x2-x1)*Math.random();
}


function createHonk(x, y, angle, color) {
    const honk = document.createElement("object");

    honk.data = "./honk" + color + ".png";
    honk.className = "honk";
    honk.style.transform = "rotate(" + (-15 + angle*30) + "deg)";
    x *= (window.innerWidth-150);
    y *= (window.innerHeight-50);
    honk.style.top = y;
    honk.style.left = x;

    if (volume > 0 && activeHonks < 30) {
        const audio = new Audio('honk.ogg');
        audio.playbackRate = randomRange(0.75, 1.25);
        audio.volume = volume * (1 - activeHonks/30);
        audio.play();
        activeHonks++;
    }

    setTimeout(function() {
        honk.classList.add("fade");
        setTimeout(function() {
            honk.remove();
            activeHonks--;
            if (activeHonks < 0) {
                activeHonks = 0;
            }
        }, 300);
    }, 500);
    honkCollection.appendChild(honk);
}

for (let i=0; i < 8; i++) {
    const egg = document.createElement("img");
    egg.className = "egg";
    egg.src = "./egg" + i + ".png";

    updateFunc = function() {
        if (oldEgg != undefined) {
            oldEgg.style.outline = "";
        }

        colorIndex = i;
        egg.style.outline = "solid 1px"
        oldEgg = egg;
    }
    
    if (i == 0) {
        updateFunc();
    }

    egg.addEventListener('mousedown', updateFunc);
    honkOptions.appendChild(egg);
}

honkButton.addEventListener("mousedown", function() {
    this.src = "./honking.png";

    let x, y;

    do {
        x = Math.random();
        y = Math.random();
    } while( Math.abs(x-0.5) < 0.1 && Math.abs(y-0.5) < 0.1 )

    const ang = Math.random();

    socket.emit('honk', {
        x: x,
        y: y,
        ang: ang,
        color: colorIndex
    });
    createHonk(x, y, ang, colorIndex);
});

volumeButton.addEventListener("mousedown", function() {
    volumeIndex++;
    if (volumeIndex >= 3) {
        volumeIndex = 0;
    }
    volume = volumes[volumeIndex];
    this.src = "./volume" + volumeIndex + ".png";
})

socket.on('honk', function(honkData) {
    createHonk(honkData.x, honkData.y, honkData.ang, honkData.color);
});

socket.on('honkers', function(honkers) {
    activeUsers.innerText = "Active ducks: " + honkers;
});