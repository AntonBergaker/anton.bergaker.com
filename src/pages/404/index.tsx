import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

import Content from "../../components/content";
import Header from "../../components/header";
import Page from "../../components/page";
import Tags from "../../components/tags";
import { fourOhFour, image } from "./index.module.scss";

// markup
const IndexPage = () => {
    return (
        <>
            <Tags
                title='Four oh four'
                description="It's gone"
                keywords={["programming", "programmer", "error", "404"]}
            />
            <Page>
                <Header />
                <Content>
                    <div className={fourOhFour}>
                        <StaticImage
                            className={image}
                            src='./miko_dead.png'
                            alt='Uh oh'
                            placeholder='none'
                        />
                        <h1>404</h1>
                        <p>Page not found</p>
                    </div>
                </Content>
            </Page>
        </>
    );
};

export default IndexPage;
