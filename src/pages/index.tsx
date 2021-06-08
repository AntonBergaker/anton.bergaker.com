import * as React from 'react';
import { Helmet } from 'react-helmet';
import { mainPage, scroller } from './index.module.scss';
import { graphql } from 'gatsby';
import Header from '../components/header';
import ScrollCard from '../components/scroll_card';
import ScrollCardTag, { TagNames } from '../components/scroll_card_tag';
import ScrollCardSmol from '../components/scroll_card_smol';
import Tags from '../components/tags';

// markup
const IndexPage = ({ data }: any) => {
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
                    'programming',
                    'programmer',
                    'gamedev',
                    'gamedevelopment',
                    'game',
                    'gamemaker',
                    'csharp',
                    'the story goes on',
                ]}
            />
            <Header />
            <div className={mainPage}>
                <section>
                    <h2>Projects</h2>
                    <div className={scroller}>{mainProjects}</div>
                    <h2>Other things</h2>
                    <div className={scroller}>{smallProjects}</div>
                </section>
            </div>
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
