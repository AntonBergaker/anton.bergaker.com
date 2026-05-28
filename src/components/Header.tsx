"use client";
import { useState } from "react";
import styles from "./header.module.scss";
const { header, firstName, contactLinks, diagonalLine } = styles;
import Email from "./svgs/Email";
import Github from "./svgs/Github";
import Bluesky from "./svgs/Bluesky";
import React from "react";
import { PHASE_PRODUCTION_BUILD } from "next/dist/shared/lib/constants";

export default function Header() {
    const dangerousInnerHtml = `<script>
        const mottos = [
            "Because programming needs spreadsheets",
            "Anton <3 coffee",
            "Probably not a scarecrow",
            "Probably not a chain chomp",
            "It works on my machine",
            "From Sweden with love",
            "We'll burn that bridge when we get there",
            "Let's add it to a list! Let's add the list to a list!",
            "You can do it 🎉",
            "Send me cute things!",
            "This message only appears if you're cute",
            "Those that commit last, commits longest",
            "Denying the furry allegations",
            "Big technology",
            "Small technology",
            "This is a very Anton thing to say",
            "It isn't easy when it's difficult",
            'ERROR: "Index out of bounds" on "mottos".',
            "Bomba",
            "🐸",
        ];

        const mottoDom = document.getElementById("motto");
        mottoDom.innerText = mottos[Math.floor(Math.random() * mottos.length)];
    </script>`.replaceAll("\r", "").replaceAll("\n", "").replaceAll("    ", "");

    let props = {
        dangerouslySetInnerHTML: {__html: "No fun."}
    }

    if (process.env.NEXT_PHASE === PHASE_PRODUCTION_BUILD) {
        props = {
            dangerouslySetInnerHTML: {__html: dangerousInnerHtml }
        }
    }
    

    return (
        <div id="header" className={header}>
            <a href="/">
                <h1>
                    <span className={firstName}>Anton</span> Bergåker
                </h1>
            </a>
            <p id="motto" {...props}></p>
            <div className={contactLinks}>
                <a href="https://bsky.app/profile/anton.bergaker.com">
                    <Bluesky color="#55acee" />
                </a>
                <a href="https://github.com/AntonBergaker">
                    <Github color="#9c45aa" />
                </a>
                <a href="mailto:anton@bergaker.com">
                    <Email color="#eba745" />
                </a>
            </div>
            <div className={diagonalLine}>
                <svg preserveAspectRatio="none" viewBox="0 0 100 100">
                    <polygon points="0,0 0,100 100,85 100,0" style={{ fill: "#D51F3E" }} />
                </svg>
                <svg overflow="visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <polygon points="0,-1000 0,93 100,30 100,-1000" style={{ fill: "#1F2022" }} />
                </svg>
            </div>
        </div>
    );
}
