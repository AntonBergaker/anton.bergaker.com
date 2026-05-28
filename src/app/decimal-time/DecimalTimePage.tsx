"use client";
import { ChangeEvent, InputEventHandler, useEffect, useRef, useState } from "react";
import ProjectPage from "@components/layouts/ProjectPage";
import styles from "./decimal-time.module.scss";
import { repeat } from "../../utils";
const { centeredTimers, converterContainer, dateConverterPicker, timer, timerHeader } = styles;

function getDecimalTime(date: Date): number {
    return (
        date.getHours() / 24 +
        date.getMinutes() / (24 * 60) +
        date.getSeconds() / (24 * 60 * 60) +
        date.getMilliseconds() / (24 * 60 * 60 * 1000)
    );
}

function getDaysSinceNewYear(date: Date): number {
    const newYear = new Date(date.getFullYear(), 0, 0, 0, 0, 0, 0);
    const today = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
    return Math.round((today.getTime() - newYear.getTime()) / 1000 / 60 / 60 / 24) - 1;
}

function getDecimalDate(date: Date): string {
    return date.getFullYear() + "-" + (getDaysSinceNewYear(date) + getDecimalTime(date)).toFixed(6);
}

function getNormalDate(year: number, decimalTime: number): Date {
    const days = Math.floor(decimalTime);
    const time = decimalTime % 1;
    const date = new Date(year + "-01-01T00:00:00.000+00:00");
    date.setDate(date.getDate() + days);
    date.setTime(date.getTime() + Math.floor(time * 24 * 60 * 60) * 1000);
    return date;
}

function atLeast2Digits(n: number): string {
    return n < 10 ? "0" + n : n.toString();
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

export default function DecimalTimePage() {
    const [currentTime, setCurrentTime] = useState(new Date(0));
    
    const [pickerValue, setPickerValue] = useState<string | undefined>(undefined);
    const [converterValue, setConverterValue] = useState<string | undefined>(undefined);

    const onPickerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPickerValue(e.currentTarget.value)
        setConverterValue(getDecimalDate(new Date(e.currentTarget.value)));
    }

    const onConverterInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Prevent further changes
        setConverterValue(e.currentTarget.value)

        const strSplit = e.currentTarget.value.split("-");
        let year: number, date: string;
        if (strSplit.length === 0) return;
        if (strSplit.length === 1) {
            year = 0;
            date = strSplit[0];
        } else {
            year = Number(strSplit[0]);
            date = strSplit[1];
        }
        
        setPickerValue(toValueString(getNormalDate(year, Number(date))));
    }

    useEffect(() => {

        let timeoutId: ReturnType<typeof setTimeout>;

        function updateClock() {
            setCurrentTime(new Date());

            timeoutId = setTimeout(updateClock, 5);
        }

        updateClock();

        return () => clearTimeout(timeoutId);
    }, []);

    const decimalTime = getDecimalTime(currentTime);
    const timeString = decimalTime.toFixed(10).substring(1);

    const daysSinceNewYear = getDaysSinceNewYear(currentTime);
    const dateString = currentTime.getFullYear() + "-" + daysSinceNewYear 
    
    const DecimalSpan = (props: {index: number}) => <span style={{opacity: Math.max(0, Math.min(1, 1.4 - props.index / 5))}}>{timeString.substring(props.index, props.index+1)}</span>

    return (
        <ProjectPage>
            <div className={centeredTimers}>
                <h2 className={timerHeader}>Live Decimal Time</h2>
                <h2 className={timer}> { repeat(7, ( i => <DecimalSpan key={i} index={i}/>)) } </h2>

                <h2 className={timerHeader}>Live Decimal Date</h2>
                <h2 className={timer}> {dateString}{ repeat(7, ( i => <DecimalSpan key={i} index={i}/>)) } </h2>

                <h2 className={timerHeader}>Convert Dates</h2>
                <div>
                    <div className={converterContainer}>
                        <p>Nonsense date</p>
                        <input value={pickerValue ?? toValueString(new Date())} onChange={onPickerInput} className={dateConverterPicker} type="datetime-local" />
                    </div>
                    <div className={converterContainer}>
                        <p>Decimal date</p>
                        <input value={converterValue ?? getDecimalDate(new Date())} onChange={onConverterInput} />
                    </div>
                </div>
            </div>

            <div>
                <h2>About</h2>
                <p>
                    If you're like me, you've probably also struggled to learn to tell the time at some point in
                    your life. A bunch of arbitrary divisions that make absolutely no sense. When does the AM/PM go?
                    When does it reset, on 12 or after? Why are they divided into 12ths and 60ths? Madness!
                </p>
                <p>
                    Can we really make fun of the janks for their inches in a stone in a footlong when we also use a
                    system with weird divisions? That is as much as 10 football fields worth of conversions.
                </p>
                <p>We cannot. We need to adapt.</p>
                <p>
                    Decimal time solves all this and more! The day is represented by a single number, going from 0
                    to 1. You can be as precise as you wish, by simply adding or removing decimals. It's also more
                    compact, because no number has a boundary at 12 or 60.
                </p>
                <p>
                    It's possible to use decimal time with time zones, and this website will use your local time
                    zone. Abolishing time zones is an equally valid but separate discussion.
                </p>
            </div>
        </ProjectPage>
    );
}
