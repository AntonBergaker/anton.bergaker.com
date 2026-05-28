import type { ReactNode } from "react";
import Content from "../Content";
import Header from "../Header";
import Page from "../Page";
import styles from "./project_page.module.scss";

type Props = {
    children: ReactNode;
};

export default function ProjectPage({ children }: Props) {
    return (
        <Page>
            <Header />
            <Content>
                <div className={styles.projectPage}>{children}</div>
            </Content>
        </Page>
    );
}
