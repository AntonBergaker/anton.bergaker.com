import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

import BrandButtonPremade from "../../components/brand_button_premade";
import Content from "../../components/content";
import Header from "../../components/header";
import ProjectPageLayout from "../../components/layouts/project_page";
import Page from "../../components/page";
import PageBanner from "../../components/page_banner";
import Scroller from "../../components/scroller";
import Tags from "../../components/tags";

// markup
const IndexPage = () => {
    return (
        <ProjectPageLayout>
            <Tags
                title='Pentapop'
                description='Brief information about my gomoku game Pentapop, as well as a link where you can play it.'
                keywords={[
                    "programming",
                    "programmer",
                    "app",
                    "gamedev",
                    "game",
                    "gomoku",
                    "five in a row",
                    "online",
                ]}
            />
            <PageBanner
                largeImage={
                    <StaticImage src='./banner_pentapop_large.png' alt='' />
                }
                mobileImage={
                    <StaticImage src='./banner_pentapop_mobile.png' alt='' />
                }
                alt='Pentapop Banner'
            />
            <Scroller>
                <BrandButtonPremade
                    text='Get it on Google Play'
                    brand='google_play'
                    link='https://play.google.com/store/apps/details?id=com.AntonBergaker.Pentapop'
                />
                <BrandButtonPremade
                    text='Get it on the App Store'
                    brand='app_store'
                    link='https://apps.apple.com/us/app/pentapop/id1463884191'
                />
                <BrandButtonPremade
                    text='Play in Browser'
                    brand='website'
                    link='/pentapop/play'
                />
            </Scroller>
            <div>
                <h2>Pentapop</h2>
                <p>
                    Pentapop is one of my larger projects, trying to make use of
                    the resources I had previously created for miniSweeper. It's
                    a two player board game very similar to Gomoku / Five in a
                    row where you try and get five in a row before the opponent
                    does.
                </p>
                <p>
                    The project turned out to be significantly more involved
                    than miniSweeper, featuring both local AI as well as online
                    play with an account system. Due to the requirements of
                    online accounts, this is where most of the time was spent.
                    Things like password recovery / password management etc. and
                    other account legal requirements.
                </p>
                <p>
                    The client is written in GameMaker making heavy use of
                    extensions, some of which I've published seperately.
                </p>
                <p>
                    The server is written in C# and is mostly custom without
                    using many frameworks. Mainly because I wasn't familiar with
                    them when I started the project. The project has been a huge
                    learning opportunity and I'm working on bringing the server
                    API up to more modern standards.
                </p>
            </div>
        </ProjectPageLayout>
    );
};

export default IndexPage;
