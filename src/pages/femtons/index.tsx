import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

import ProjectPageLayout from "../../components/layouts/project_page";
import Tags from "../../components/tags";

const IndexPage = () => {
    return (
        <ProjectPageLayout>
            <Tags
                title="Jacob's femtons"
                description='Pretty ladies on the internet. Very hot.'
                keywords={[""]}
            />
            <div>
                <h2>100 femtons</h2>
                <p>Made by Jacob's pet skinwaker.</p>
                <StaticImage src='./img/115-1.png' alt='' />
                <StaticImage src='./img/115-2.png' alt='' />
                <StaticImage src='./img/115-3.png' alt='' />
                <StaticImage src='./img/115-4.png' alt='' />
            </div>
        </ProjectPageLayout>
    );
};

export default IndexPage;
