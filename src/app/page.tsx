import type { Metadata } from "next";
import Content from "@components/Content";
import Header from "@components/Header";
import Page from "@components/Page";
import ScrollCard from "@components/ScrollCard";
import ScrollCardSmol from "@components/ScrollCardSmol";
import ScrollCardTag from "@components/ScrollCardTag";
import Scroller from "@components/Scroller";
import styles from "./page.module.scss";
const { mainPage } = styles;

import { projects as allProjects } from "../data/projects";

export const metadata: Metadata = {
    title: "Anton Bergåker",
    description:
        "Your one stop shop for everything made by Anton Bergåker. Projects and games, many playable in your browser.",
    keywords: ["programming", "programmer", "gamedev", "gamedevelopment", "game", "gamemaker", "csharp", "the story goes on"],
};

const mainProjects = allProjects.filter((x) => x.major_project === true);
const smallProjects = allProjects.filter((x) => x.major_project === false);

export default function IndexPage() {
    return (
        <Page>
            <Header />
            <Content>
                <div className={mainPage}>
                    <section>
                        <h2>Major Projects</h2>
                        <Scroller>
                            {mainProjects.map((x) => (
                                <ScrollCard key={x.name} title={x.name} link={x.url} image={x.image}>
                                    {x.tags.map((y) => (
                                        <ScrollCardTag key={y} tag={y} />
                                    ))}
                                </ScrollCard>
                            ))}
                        </Scroller>
                        <h2>Other things</h2>
                        <Scroller>
                            {smallProjects.map((x) => (
                                <ScrollCardSmol key={x.name} title={x.name} link={x.url} image={x.image}>
                                    {x.tags.map((y) => (
                                        <ScrollCardTag key={y} tag={y} />
                                    ))}
                                </ScrollCardSmol>
                            ))}
                        </Scroller>
                    </section>
                </div>
            </Content>
        </Page>
    );
}
