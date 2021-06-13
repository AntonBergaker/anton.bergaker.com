import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

import BrandButtonPremade from '../../components/brand_button_premade';
import Content from '../../components/content';
import Header from '../../components/header';
import ProjectPageLayout from '../../components/layouts/project_page';
import Page from '../../components/page';
import PageBanner from '../../components/page_banner';
import Scroller from '../../components/scroller';
import Tags from '../../components/tags';

// markup
const IndexPage = () => {
    return (
        <ProjectPageLayout>
            <Tags
                title='The Story Goes On'
                description='Brief overview of my work on The Story Goes On'
                keywords={[
                    'programming',
                    'programmer',
                    'gamedev',
                    'game',
                    'the story goes on',
                    'xbox',
                    'steam',
                    'switch',
                    'nintendo switch',
                    'scarecrow arts',
                ]}
            />
            <PageBanner
                largeImage={
                    <StaticImage src='./banner_tsgo_large.png' alt='' />
                }
                mobileImage={
                    <StaticImage src='./banner_tsgo_mobile.png' alt='' />
                }
                alt='The Story Goes On Banner'
            />
            <Scroller>
                <BrandButtonPremade
                    text='View on Steam'
                    brand='steam'
                    link='https://store.steampowered.com/app/369560/The_Story_Goes_On/'
                />
                <BrandButtonPremade
                    text='View on Xbox Store'
                    brand='xbox'
                    link='https://www.microsoft.com/en-us/p/the-story-goes-on/bpm55kq2gtp3'
                />
                <BrandButtonPremade
                    text='View on Nintendo Store'
                    brand='switch'
                    link='https://www.nintendo.com/games/detail/the-story-goes-on-switch/'
                />
                <BrandButtonPremade
                    text='Visit the website'
                    brand='website'
                    link='http://tsgogame.com/'
                />
            </Scroller>
            <div>
                <h2>The Story Goes On</h2>
                <p>
                    <i>
                        “You are the hero inside the storybook of an obsessed
                        author pondering with his life’s work. Explore repeating
                        worlds, befriend a talking scarecrow and swing your
                        sword really fast, while uncovering the true,
                        overarching adventure within.”
                    </i>
                    &nbsp;&nbsp;- Game's official tagline
                </p>
                <p>
                    The Story Goes On was my first project at Scarecrow Arts. I
                    took over as the games Lead Programmer in March 2015 and
                    worked on the project for three years until it's release in
                    March 2018. The game features randomly generated levels, a
                    load of items, a few carefully scripted pre-made dungeons
                    and much more.
                </p>
                <p>
                    My role as the Lead Programmer meant I was responsible for
                    implementing all features into the game. This put me in
                    touch with all elements of game development, as everything
                    had to pass through me. I was also responsible for bringing
                    the game to Xbox One and I developed multiple internal tools
                    to take over various manual tasks, mostly related to
                    formatting our localization data to the various storefronts
                    and into the game.
                </p>
            </div>
        </ProjectPageLayout>
    );
};

export default IndexPage;
