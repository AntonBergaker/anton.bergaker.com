import type { Metadata } from "next";
import BrandButtonPremade from "@components/BrandButtonPremade";
import ProjectPage from "@components/layouts/ProjectPage";
import PageBanner from "@components/PageBanner";
import Scroller from "@components/Scroller";

import LargeBanner from "./banner_minisweeper_large.png";
import MobileBanner from "./banner_minisweeper_mobile.png";

export const metadata: Metadata = {
    title: "Anton Bergåker - miniSweeper",
    description: "Brief information about my MineSweeper clone miniSweeper, as well as a links to where you can play it.",
    keywords: ["programming", "programmer", "app", "gamedev", "game", "minesweeper"],
};

export default function MinisweeperPage() {
    return (
        <ProjectPage>
            <PageBanner largeImage={LargeBanner.src} mobileImage={MobileBanner.src} alt="miniSweeper Banner" />
            <Scroller>
                <BrandButtonPremade
                    text="Get it on Google Play"
                    brand="google_play"
                    link="https://play.google.com/store/apps/details?id=com.AntonBergaker.minisweeper"
                />
                <BrandButtonPremade
                    text="Get it on the App Store"
                    brand="app_store"
                    link="https://itunes.apple.com/us/app/minisweeper/id1363589808"
                />
                <BrandButtonPremade text="Play in Browser" brand="website" link="/minisweeper/play" />
                <BrandButtonPremade
                    text="View on Github"
                    brand="github"
                    link="https://github.com/AntonBergaker/miniSweeper"
                />
                <BrandButtonPremade
                    text="Download for Windows"
                    brand="windows"
                    link="/minisweeper/miniSweeper.1.0.9.zip"
                />
            </Scroller>
            <div>
                <h2>miniSweeper</h2>
                <p>
                    miniSweeper is a small project I made because I was not satisfied with any MineSweeper games on
                    Android. As projects tend to do, slowly it became more involved and it's not available on four
                    different platforms.
                </p>
                <p>
                    The game is made in GameMaker Studio 2 with some modifications for the Android export. The game
                    is completely open source.
                </p>
            </div>
        </ProjectPage>
    );
}
