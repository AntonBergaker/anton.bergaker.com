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
                title='Pentapop'
                description='Brief information about my gomoku game Pentapop, as well as a link where you can play it.'
                keywords={[
                    'programming',
                    'programmer',
                    'app',
                    'gamedev',
                    'game',
                    'gomoku',
                    'five in a row',
                    'online',
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
                <h2>miniSweeper</h2>
                <p>
                    miniSweeper is a small project I made because I was not
                    satisfied with any MineSweeper games on Android. As projects
                    tend to do, slowly it became more involved and it's not
                    available on four different platforms.
                </p>
                <p>
                    The game is made in GameMaker Studio 2 with some
                    modifications for the Android export. The game is completely
                    open source.
                </p>
            </div>
        </ProjectPageLayout>
    );
};

export default IndexPage;
