import * as React from 'react';

import Content from '../content';
import Header from '../header';
import Page from '../page';
import { projectPage } from './project_page.module.scss';

export type ProjectPageLayoutProps = React.PropsWithChildren<{}>;

const ProjectPageLayout = (props: ProjectPageLayoutProps) => {
    return (
        <Page>
            <Header />
            <Content>
                <div className={projectPage}>{props.children}</div>
            </Content>
        </Page>
    );
};

export default ProjectPageLayout;
