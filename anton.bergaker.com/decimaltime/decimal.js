const timeDom = document.getElementById("timeDisplay");
const dateDom = document.getElementById("dateDisplay");

const converterPickerDom =  document.getElementById("dateConverterPicker");

converterPickerDom.value = toValueString(new Date());
converterPickerDom.onchange = () => {
    converterInputDom.value = getDecimalDate(new Date(converterPickerDom.value));
}

const converterInputDom = document.getElementById("dateConverterInput");
converterInputDom.value = getDecimalDate(new Date(converterPickerDom.value));
converterInputDom.onchange = () => {
    const strSplit = converterInputDom.value.split('-');
    let year, date;
    if (strSplit.length == 0) {
        return;
    } else if (strSplit.length == 1) {
        year = 0;
        date = strSplit[0];
    }  else {
        year = strSplit[0];
        date = strSplit[1];
    }

    converterPickerDom.value = toValueString(getNormalDate(year, Number(date)));
}

for (let i=0;i < 7; i++) {
    const element = document.createElement("span");
    element.style.opacity = Math.max(0, Math.min(1, 1.4 - i / 5));
    timeDom.appendChild(element);
}

for (let i=0;i < 7; i++) {
    const element = document.createElement("span");
    element.style.opacity = Math.max(0, Math.min(1, 1.4 - i / 5));
    dateDom.appendChild(element);
}


function updateClock() {
    const currentDate = new Date();

    const decimalTime = getDecimalTime(currentDate);
    const daysSinceNewYear = getDaysSinceNewYear(currentDate);

    const timeString = decimalTime.toFixed(10).substr(1);

    for (let i=0;i<timeDom.children.length; i++) {
        timeDom.children[i].innerHTML = timeString.substr(i, 1)
    }

    dateDom.children[0].innerHTML = currentDate.getFullYear() + "-" + daysSinceNewYear + ".";
    for (let i=1;i<timeDom.children.length; i++) {
        dateDom.children[i].innerHTML = timeString.substr(i, 1)
    }

    setTimeout(updateClock, 5);
}

function getDecimalTime(date) {
    return  date.getUTCHours() / 24 +
            date.getUTCMinutes() / (24*60) +
            date.getUTCSeconds() / (24*60*60) +
            date.getUTCMilliseconds() / (24*60*60*1000);
}

function getDaysSinceNewYear(date) {
    const newYear = new Date(date.getUTCFullYear(), 0, 0, 0, 0, 0, 0);
    return Math.floor((date - newYear) / 1000 / 60 / 60 / 24) - 1;
}


function getDecimalDate(date) {
    return date.getUTCFullYear() + "-" + (getDaysSinceNewYear(date) + getDecimalTime(date)).toFixed(6);
}

function getNormalDate(year, decimalTime) {
    const days = Math.floor(decimalTime);
    const time = decimalTime % 1;

    let date = new Date(year + "-01-01T00:00:00.000+00:00");
    
    date.setUTCDate(date.getUTCDate() + days);
    

    const seconds = Math.floor(time * 24 * 60 * 60)

    date.setTime(date.getTime() + seconds*1000);

    return date;
}

function atLeast2Digits(number) {
    if (number < 10) {
        return "0" + number.toString();
    }
    return number.toString();
}

function toValueString(date) {
    return date.getFullYear() + "-" + atLeast2Digits(date.getMonth()+1) + "-" + atLeast2Digits(date.getDate()) + "T" 
         + atLeast2Digits(date.getHours()) + ":" + atLeast2Digits(date.getMinutes()) + ":" + atLeast2Digits(date.getSeconds());
}

updateClock();