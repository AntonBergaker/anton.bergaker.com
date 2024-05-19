import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

import EmailSvg from "../../components/svgs/email";
import GithubSvg from "../../components/svgs/github";
import GlobeSvg from "../../components/svgs/globe";
import PhoneSvg from "../../components/svgs/phone";
import {
    header,
    firstName,
    diagonalLine,
    a4Paper,
    topInfoContainer,
    bio,
    contact,
    contactField,
    contactFieldImage,
    splitContainer,
    verticalLine,
    split,
    thingBox,
    thingHeader,
    thingShortDesc,
    thingContent,
    projectStats,
    projectBox,
    projectImage,
    languageBox,
    more_projects_label,
} from "./index.module.scss";

function ContactField(props: {
    image: JSX.Element;
    text: string;
    link?: string;
}) {
    return (
        <div className={contactField}>
            <div className={contactFieldImage}>{props.image}</div>
            <a href={props.link ?? props.text}>{props.text}</a>
        </div>
    );
}

function WorkEducationBox(props: {
    title: string;
    years: string;
    desc: string;
    children?: React.ReactNode;
}) {
    return (
        <div className={thingBox}>
            <div className={thingHeader}>
                <h3>{props.title}</h3>
                <p>{props.years}</p>
            </div>
            <p className={thingShortDesc}>
                <i>{props.desc}</i>
            </p>
            {props.children && (
                <div className={thingContent}>{props.children}</div>
            )}
        </div>
    );
}

function ProjectBox(props: {
    title: string;
    years: string;
    image: React.ReactNode;
    stats0: string;
    stats1: string;
    children?: React.ReactNode;
}) {
    return (
        <div className={projectBox}>
            <div className={projectImage}>{props.image}</div>
            <div className={thingBox}>
                <div className={thingHeader}>
                    <h3>{props.title}</h3>
                    <p>{props.years}</p>
                </div>
                <div className={projectStats}>
                    <p>{props.stats0}</p>
                    <p>{props.stats1}</p>
                </div>
                {props.children && (
                    <div className={thingContent}>{props.children}</div>
                )}
            </div>
        </div>
    );
}

function LanguageBox(props: { title: string; description: string }) {
    return (
        <div className={languageBox}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
}

export interface ResumeProps {
    bio: string;
    education: string;
    uu: string;
    uu_desc: string;
    bd_desc: string;
    work: string;
    ksu_title: string;
    ksu_desc: string;
    programmer: string;
    scarecrow_desc: string;
    eris_desc: string;
    warehouse_worker: string;
    khs_desc: string;
    my_projects: string;
    visitors: string;
    prr_desc: string;
    prr_line: string;
    std_desc: string;
    installs: string;
    pp_desc: string;
    mini_desc: string;
    more_projects: string;
    programming_languages: string;
    csharp_desc: string;
    ts_desc: string;
    unity_desc: string;
    java_desc: string;
    gm_desc: string;
}

// markup
const Resume = (props: ResumeProps) => {
    return (
        <>
            <div className={a4Paper}>
                <div id='header' className={header}>
                    <h1>
                        <span className={firstName}>Anton</span> Bergåker
                    </h1>
                    <div className={diagonalLine}>
                        <svg preserveAspectRatio='none' viewBox='0 0 100 100'>
                            <polygon
                                points='0,0 0,100 100,70 100,0'
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
                                points='0,-1000 0,80 100,30 100,-1000'
                                style={{
                                    fill: "#1F2022",
                                }}
                            />
                        </svg>
                    </div>
                </div>
                <div className={topInfoContainer}>
                    <div className={bio}>{props.bio}</div>
                    <div className={contact}>
                        <ContactField
                            image={<EmailSvg />}
                            text='anton@bergaker.com'
                            link='mailto:anton@bergaker.com'
                        />
                        <ContactField
                            image={<PhoneSvg />}
                            text='0709480949'
                            link='tel://+46709480949'
                        />
                        <ContactField
                            image={<GlobeSvg />}
                            text='https://anton.bergaker.com'
                        />
                        <ContactField
                            image={<GithubSvg />}
                            text='https://github.com/AntonBergaker'
                        />
                    </div>
                </div>
                <div className={verticalLine} />
                <div className={splitContainer}>
                    <div className={split}>
                        <h2>{props.education}</h2>
                        <WorkEducationBox
                            title={props.uu}
                            years='2017 - 2022'
                            desc={props.uu_desc}
                        >
                            <p></p>
                        </WorkEducationBox>
                        <WorkEducationBox
                            title='Bäckadalsgymnasiet'
                            years='2013 - 2016'
                            desc={props.bd_desc}
                        ></WorkEducationBox>

                        <h2>{props.work}</h2>
                        <WorkEducationBox
                            title={props.ksu_title}
                            years='2022 -'
                            desc={props.programmer}
                        >
                            <p>{props.ksu_desc}</p>
                        </WorkEducationBox>
                        <WorkEducationBox
                            title='Scarecrow Arts'
                            years='2016 - 2021'
                            desc={props.programmer}
                        >
                            <p>{props.scarecrow_desc}</p>
                        </WorkEducationBox>
                        <WorkEducationBox
                            title='Studio Eris'
                            years='2018 - 2018'
                            desc={props.programmer}
                        >
                            <p>{props.eris_desc}</p>
                        </WorkEducationBox>
                        <WorkEducationBox
                            title='Karl H Ström'
                            years='2013 - 2017'
                            desc={props.warehouse_worker}
                        >
                            <p>{props.khs_desc}</p>
                        </WorkEducationBox>
                    </div>
                    <div className={split}>
                        <h2>{props.my_projects}</h2>
                        <ProjectBox
                            title='Petrock Rocket Racing'
                            years='2022-'
                            image={
                                <StaticImage src='./images/PetrockIcon.png'></StaticImage>
                            }
                            stats0={props.prr_line}
                            stats1=''
                        >
                            <p>{props.prr_desc}</p>
                        </ProjectBox>

                        <ProjectBox
                            title='Super Tower Defense'
                            years='2021 - 2022'
                            image={
                                <StaticImage src='./images/STDIcon.png'></StaticImage>
                            }
                            stats0={`500 000+ ${props.visitors}`}
                            stats1='30 000 ★'
                        >
                            <p>{props.std_desc}</p>
                        </ProjectBox>
                        <ProjectBox
                            title='Pentapop'
                            years='2018 - 2019'
                            image={
                                <StaticImage src='./images/PentapopIcon.png'></StaticImage>
                            }
                            stats0={`10 000+ ${props.installs}`}
                            stats1='4.5 ★'
                        >
                            <p> {props.pp_desc}</p>
                        </ProjectBox>
                        {false && (
                            <ProjectBox
                                title='miniSweeper'
                                years='2017 - 2018'
                                image={
                                    <StaticImage src='./images/minisweeperIcon.png'></StaticImage>
                                }
                                stats0={`50 000+ ${props.installs}`}
                                stats1='4.7 ★'
                            >
                                <p> {props.mini_desc}</p>
                            </ProjectBox>
                        )}

                        <p className={more_projects_label}>
                            {props.more_projects}{" "}
                            <a href='https://github.com/AntonBergaker'>
                                GitHub
                            </a>
                            .
                        </p>

                        <h2>{props.programming_languages}</h2>
                        <LanguageBox
                            title='C#'
                            description={props.csharp_desc}
                        ></LanguageBox>
                        <LanguageBox
                            title='TypeScript / JavaScript'
                            description={props.ts_desc}
                        ></LanguageBox>
                        <LanguageBox
                            title='Unity 3D'
                            description={props.unity_desc}
                        ></LanguageBox>
                        <LanguageBox
                            title='Java'
                            description={props.java_desc}
                        ></LanguageBox>
                        <LanguageBox
                            title='GameMaker'
                            description={props.gm_desc}
                        ></LanguageBox>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Resume;
