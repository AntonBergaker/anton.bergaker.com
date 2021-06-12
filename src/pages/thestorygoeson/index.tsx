import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Content from '../../components/content';
import Header from '../../components/header';
import Page from '../../components/page';
import PageBanner from '../../components/page_banner';
import Tags from '../../components/tags';
import { root, text } from './index.module.scss';
import Scroller from '../../components/scroller';
import BrandButton from '../../components/brand_button';

// markup
const IndexPage = () => {
    return (
        <>
            <Tags
                title='The Story Goes On'
                description="It's gone"
                keywords={['programming', 'programmer', 'error', '404']}
            />
            <Page>
                <Header />
                <Content>
                    <PageBanner
                        largeImage={
                            <StaticImage src='./banner_tsgo_large.png' alt='' />
                        }
                        mobileImage={
                            <StaticImage
                                src='./banner_tsgo_mobile.png'
                                alt=''
                            />
                        }
                        alt='The Story Goes On Banner'
                    />
                    <Scroller>
                        <BrandButton
                            text='View on Steam'
                            color='#00AEEF'
                            image={
                                <svg
                                    aria-hidden='true'
                                    focusable='false'
                                    viewBox='0 0 496 512'
                                >
                                    <path
                                        fill='currentColor'
                                        d='M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.79 52.79 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3.1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z'
                                    ></path>
                                </svg>
                            }
                            link='https://store.steampowered.com/app/369560/The_Story_Goes_On/'
                        />
                        <BrandButton
                            text='View on Xbox Store'
                            color='#0F780F'
                            image={
                                <svg
                                    aria-hidden='true'
                                    focusable='false'
                                    viewBox='0 0 512 512'
                                >
                                    <path
                                        fill='currentColor'
                                        d='M369.9 318.2c44.3 54.3 64.7 98.8 54.4 118.7-7.9 15.1-56.7 44.6-92.6 55.9-29.6 9.3-68.4 13.3-100.4 10.2-38.2-3.7-76.9-17.4-110.1-39C93.3 445.8 87 438.3 87 423.4c0-29.9 32.9-82.3 89.2-142.1 32-33.9 76.5-73.7 81.4-72.6 9.4 2.1 84.3 75.1 112.3 109.5zM188.6 143.8c-29.7-26.9-58.1-53.9-86.4-63.4-15.2-5.1-16.3-4.8-28.7 8.1-29.2 30.4-53.5 79.7-60.3 122.4-5.4 34.2-6.1 43.8-4.2 60.5 5.6 50.5 17.3 85.4 40.5 120.9 9.5 14.6 12.1 17.3 9.3 9.9-4.2-11-.3-37.5 9.5-64 14.3-39 53.9-112.9 120.3-194.4zm311.6 63.5C483.3 127.3 432.7 77 425.6 77c-7.3 0-24.2 6.5-36 13.9-23.3 14.5-41 31.4-64.3 52.8C367.7 197 427.5 283.1 448.2 346c6.8 20.7 9.7 41.1 7.4 52.3-1.7 8.5-1.7 8.5 1.4 4.6 6.1-7.7 19.9-31.3 25.4-43.5 7.4-16.2 15-40.2 18.6-58.7 4.3-22.5 3.9-70.8-.8-93.4zM141.3 43C189 40.5 251 77.5 255.6 78.4c.7.1 10.4-4.2 21.6-9.7 63.9-31.1 94-25.8 107.4-25.2-63.9-39.3-152.7-50-233.9-11.7-23.4 11.1-24 11.9-9.4 11.2z'
                                    ></path>
                                </svg>
                            }
                            link='https://www.microsoft.com/en-us/p/the-story-goes-on/bpm55kq2gtp3'
                        />
                        <BrandButton
                            text='View on Nintendo Store'
                            color='#DA121E'
                            image={
                                <svg
                                    aria-hidden='true'
                                    focusable='false'
                                    viewBox='150 0 600 600'
                                >
                                    <g
                                        transform='translate(0.000000,900.000000) scale(0.100000,-0.100000)'
                                        fill='currentColor'
                                        stroke='none'
                                    >
                                        <path
                                            d='M2965 8314 c-481 -86 -868 -442 -990 -910 -44 -169 -47 -268 -42
                                -1579 3 -1204 4 -1232 24 -1325 111 -501 467 -858 973 -976 66 -15 150 -18
                                691 -21 560 -4 618 -3 633 12 15 15 16 208 16 2396 0 1622 -3 2386 -10 2400
                                -10 18 -27 19 -613 18 -476 -1 -619 -4 -682 -15z m905 -2400 l0 -2026 -407 5
                                c-375 4 -415 6 -490 25 -322 83 -561 331 -628 654 -22 101 -22 2589 -1 2688
                                60 281 255 514 518 619 132 53 193 59 621 60 l387 1 0 -2026z'
                                        />
                                        <path
                                            d='M3051 7329 c-63 -12 -159 -60 -210 -105 -105 -91 -157 -220 -149
                                -372 4 -79 9 -100 41 -164 47 -97 118 -168 215 -216 67 -33 84 -37 171 -40 79
                                -3 107 0 160 18 217 73 348 284 311 500 -43 257 -287 429 -539 379z'
                                        />
                                        <path
                                            d='M4757 8323 c-4 -3 -7 -1087 -7 -2409 0 -2181 1 -2402 16 -2408 27
                                -10 803 -6 899 4 406 46 764 293 959 660 25 47 58 126 75 175 63 188 61 138
                                61 1575 0 1147 -2 1318 -16 1391 -99 521 -496 914 -1018 1004 -70 12 -178 15
                                -526 15 -240 0 -440 -3 -443 -7z m1068 -2178 c156 -41 284 -160 336 -312 33
                                -94 32 -232 -1 -318 -61 -158 -181 -269 -335 -310 -250 -65 -516 86 -589 334
                                -22 76 -21 204 4 282 75 245 335 389 585 324z'
                                        />
                                    </g>
                                </svg>
                            }
                            link='https://www.nintendo.com/games/detail/the-story-goes-on-switch/'
                        />
                        <BrandButton
                            text='Visit the website'
                            color='#56D1F7'
                            image={
                                <svg
                                    aria-hidden='true'
                                    focusable='false'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        fill='currentColor'
                                        d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z'
                                    />
                                </svg>
                            }
                            link='http://tsgogame.com/'
                        />
                    </Scroller>
                    <div className={root}>
                        <h2 className={text}>The Story Goes On</h2>
                        <p className={text}>
                            <i>
                                “You are the hero inside the storybook of an
                                obsessed author pondering with his life’s work.
                                Explore repeating worlds, befriend a talking
                                scarecrow and swing your sword really fast,
                                while uncovering the true, overarching adventure
                                within.”
                            </i>
                            &nbsp;&nbsp;- Game's official tagline
                        </p>
                        <p className={text}>
                            The Story Goes On was my first project at Scarecrow
                            Arts. I took over as the games Lead Programmer in
                            March 2015 and worked on the project for three years
                            until it's release in March 2018. The game features
                            randomly generated levels, a load of items, a few
                            carefully scripted pre-made dungeons and much more.
                        </p>
                        <p className={text}>
                            My role as the Lead Programmer meant I was
                            responsible for implementing all features into the
                            game. This put me in touch with all elements of game
                            development, as everything had to pass through me. I
                            was also responsible for bringing the game to Xbox
                            One and I developed multiple internal tools to take
                            over various manual tasks, mostly related to
                            formatting our localization data to the various
                            storefronts and into the game.
                        </p>
                    </div>
                </Content>
            </Page>
        </>
    );
};

export default IndexPage;
