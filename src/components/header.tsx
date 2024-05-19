import * as React from "react";
import { Helmet } from "react-helmet";

import {
    header,
    firstName,
    contactLinks,
    diagonalLine,
} from "./header.module.scss";
import EmailSvg from "./svgs/email";
import GithubSvg from "./svgs/github";
import TwitterSvg from "./svgs/twitter";

// markup
const Header = () => {
    return (
        <>
            <div id='header' className={header}>
                <a href='../'>
                    <h1>
                        <span className={firstName}>Anton</span> Bergåker
                    </h1>
                </a>
                <p id='motto'>Now without random taglines!</p>
                <div className={contactLinks}>
                    <a href='https://twitter.com/DragonCoke'>
                        <TwitterSvg color="#55acee" />
                    </a>
                    <a href='https://github.com/AntonBergaker'>
                        <GithubSvg color="#9c45aa" />
                    </a>
                    <a href='mailto:anton@bergaker.com'>
                        <EmailSvg color="#eba745" />
                    </a>
                </div>
                <div className={diagonalLine}>
                    <svg preserveAspectRatio='none' viewBox='0 0 100 100'>
                        <polygon
                            points='0,0 0,100 100,85 100,0'
                            style={{
                                fill: "#D51F3E",
                            }}
                        />
                    </svg>
                    <svg
                        overflow='visible'
                        preserveAspectRatio='none'
                        viewBox='0 0 100 100'
                    >
                        <polygon
                            points='0,-1000 0,93 100,30 100,-1000'
                            style={{
                                fill: "#1F2022",
                            }}
                        />
                    </svg>
                </div>
            </div>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
            const mottos = [
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
                "Send me cute things!",
                "This message only appears if you're cute",
                "Those that commit last, commits longest",
            ];
            const motto = document.getElementById("motto");
            motto.innerHTML = mottos[Math.floor(Math.random()*mottos.length)];
        `,
                }}
            />
        </>
    );
};

export default Header;
