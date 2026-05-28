import type { Metadata } from "next";
import BrandButtonPremade from "@components/BrandButtonPremade";
import ProjectPage from "@components/layouts/ProjectPage";
import PageBanner from "@components/PageBanner";
import Scroller from "@components/Scroller";

import LargeBanner from "./banner_doodledigits_large.png";
import MobileBanner from "./banner_doodledigits_mobile.png";

export const metadata: Metadata = {
    title: "Anton Bergåker - Doodle Digits",
    description: "Information about my calculator Doodle Digits, and relevant links.",
    keywords: ["programming", "programmer", "app", "calculator", "calculations", "webapp"]
};

export default function DoodleDigitsPage() {
    return (
        <ProjectPage>
            <PageBanner largeImage={LargeBanner.src} mobileImage={MobileBanner.src} alt="Doodle Digits Banner" />
            <Scroller>
                <BrandButtonPremade
                    text="View on Github"
                    brand="github"
                    link="https://github.com/AntonBergaker/DoodleDigits"
                />
                <BrandButtonPremade
                    text="Open In Browser"
                    brand="website"
                    link="https://anton.bergaker.com/doodle_digits/"
                />
            </Scroller>
            <div>
                <h2>Doodle Digits</h2>
                <p>
                    Doodle Digits is an inline calculator where you write equations into a large textbox and the answers are given to you as you type.
                    This big notebox style is ideal for if you need to do longer calculations with many steps, and lets you go back and change things as you go along.
                </p>
                <p>
                    Doodle Digits is seperated into two parts, a C# core module called DoodleDigits.Core and an electron react webapp that calls into it.
                    The C# core is exported using webassembly so the calculations can run locally. Because it's an electron app there's also a web version available.
                </p>
                <p>
                    Writing the core math module was in many ways similar to writing a programming language.
                    It's seperated into two steps, first parsing into an Abstract Syntax Tree and then running calculations on that tree.
                    Unlike a programming language however, math has a lot of overlapping syntax for different functions, which makes parsing it more difficult and the tree less defined.
                    Because of this, the calculator requires a lot more consideration of the context the line is written.
                </p>
            </div>
        </ProjectPage>
    );
}
