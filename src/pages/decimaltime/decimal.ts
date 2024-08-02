// I don't know why it tries to run this code server side, but to guard against that here's a quick check. It's kinda awkward.
if (typeof document != 'undefined') {
    const timeDom = document.getElementById("timeDisplay")!;
    const dateDom = document.getElementById("dateDisplay")!;

    const converterPickerDom = document.getElementById("dateConverterPicker")! as HTMLInputElement;

    converterPickerDom.value = toValueString(new Date());
    converterPickerDom.onchange = () => {
        converterInputDom.value = getDecimalDate(
            new Date(converterPickerDom.value),
        );
    };

    const converterInputDom = document.getElementById("dateConverterInput")! as HTMLInputElement;
    converterInputDom.value = getDecimalDate(new Date(converterPickerDom.value));
    converterInputDom.onchange = () => {
        const strSplit = converterInputDom.value.split("-");
        let year, date;
        if (strSplit.length == 0) {
            return;
        } else if (strSplit.length == 1) {
            year = 0;
            date = strSplit[0];
        } else {
            year = strSplit[0];
            date = strSplit[1];
        }

        converterPickerDom.value = toValueString(getNormalDate(Number(year), Number(date)));
    };

    for (let i = 0; i < 7; i++) {
        const element = document.createElement("span");
        element.style.opacity = Math.max(0, Math.min(1, 1.4 - i / 5)).toString();
        timeDom.appendChild(element);
    }

    for (let i = 0; i < 7; i++) {
        const element = document.createElement("span");
        element.style.opacity = Math.max(0, Math.min(1, 1.4 - i / 5)).toString();
        dateDom.appendChild(element);
    }

    function updateClock() {
        const currentDate = new Date();

        const decimalTime = getDecimalTime(currentDate);
        const daysSinceNewYear = getDaysSinceNewYear(currentDate);

        const timeString = decimalTime.toFixed(10).substring(1);

        for (let i = 0; i < timeDom.children.length; i++) {
            timeDom.children[i].innerHTML = timeString.substring(i, i+1);
        }

        dateDom.children[0].innerHTML =
            currentDate.getFullYear() + "-" + daysSinceNewYear + ".";
        for (let i = 1; i < timeDom.children.length; i++) {
            dateDom.children[i].innerHTML = timeString.substring(i, i+1);
        }

        setTimeout(updateClock, 5);
    }

    function getDecimalTime(date: Date) {
        return (
            date.getHours() / 24 +
            date.getMinutes() / (24 * 60) +
            date.getSeconds() / (24 * 60 * 60) +
            date.getMilliseconds() / (24 * 60 * 60 * 1000)
        );
    }

    function getDaysSinceNewYear(date: Date): number {
        // Compare today to newyear. Using round and getting the correct day at midnight prevents issues with daylight savings time adding an hour
        // (assuming there was never 12h of daylight savings or something. God I hate time.)
        const newYear = new Date(date.getFullYear(), 0, 0, 0, 0, 0, 0);
        const today = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
        return Math.round((today.getTime() - newYear.getTime()) / 1000 / 60 / 60 / 24) - 1;
    }

    function getDecimalDate(date: Date): string {
        return (
            date.getFullYear() +
            "-" +
            (getDaysSinceNewYear(date) + getDecimalTime(date)).toFixed(6)
        );
    }

    function getNormalDate(year: number, decimalTime: number) {
        const days = Math.floor(decimalTime);
        const time = decimalTime % 1;

        let date = new Date(year + "-01-01T00:00:00.000+00:00");

        date.setDate(date.getDate() + days);

        const seconds = Math.floor(time * 24 * 60 * 60);

        date.setTime(date.getTime() + seconds * 1000);

        return date;
    }

    function atLeast2Digits(number: number): string {
        if (number < 10) {
            return "0" + number.toString();
        }
        return number.toString();
    }

    function toValueString(date: Date): string {
        return (
            date.getFullYear() +
            "-" +
            atLeast2Digits(date.getMonth() + 1) +
            "-" +
            atLeast2Digits(date.getDate()) +
            "T" +
            atLeast2Digits(date.getHours()) +
            ":" +
            atLeast2Digits(date.getMinutes()) +
            ":" +
            atLeast2Digits(date.getSeconds())
        );
    }

    updateClock();
}