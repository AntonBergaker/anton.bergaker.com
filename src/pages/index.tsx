import { graphql } from "gatsby";
import * as React from "react";

import Content from "../components/content";
import Header from "../components/header";
import Page from "../components/page";
import ScrollCard from "../components/scroll_card";
import ScrollCardSmol from "../components/scroll_card_smol";
import ScrollCardTag from "../components/scroll_card_tag";
import Scroller from "../components/scroller";
import Tags from "../components/tags";
import { mainPage } from "./index.module.scss";

interface Props {
    data: any;
}

// markup
const IndexPage = ({ data }: Props) => {
    const mainProjects = data.allProjectsJson.nodes
        .filter((x: any) => x.major_project == true)
        .map((x: any) => {
            return (
                <ScrollCard
                    key={x.name}
                    title={x.name}
                    link={x.url}
                    image={x.image}
                >
                    {x.tags.map((y: any) => (
                        <ScrollCardTag key={y} tag={y} />
                    ))}
                </ScrollCard>
            );
        });

    const smallProjects = data.allProjectsJson.nodes
        .filter((x: any) => x.major_project == false)
        .map((x: any) => {
            return (
                <ScrollCardSmol
                    key={x.name}
                    title={x.name}
                    link={x.url}
                    image={x.image}
                >
                    {x.tags.map((y: any) => (
                        <ScrollCardTag key={y} tag={y} />
                    ))}
                </ScrollCardSmol>
            );
        });

    return (
        <>
            <Tags
                title='Anton Bergåker'
                description='Your one stop shop for everything made by Anton Bergåker. Projects and games, many playable in your browser.'
                keywords={[
                    "programming",
                    "programmer",
                    "gamedev",
                    "gamedevelopment",
                    "game",
                    "gamemaker",
                    "csharp",
                    "the story goes on",
                ]}
            />
            <Page>
                <Header />
                <Content>
                    <div className={mainPage}>
                        <section>
                            <h2>Projects</h2>
                            <Scroller>{mainProjects}</Scroller>
                            <h2>Other things</h2>
                            <Scroller>{smallProjects}</Scroller>
                        </section>
                    </div>
                </Content>
            </Page>
        </>
    );
};

export const query = graphql`
    query ProjectsQuery {
        allProjectsJson {
            nodes {
                major_project
                name
                url
                image {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
                tags
            }
        }
    }
`;

export default IndexPage;
