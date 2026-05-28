import type { Metadata } from "next";
import Content from "@components/Content";
import Header from "@components/Header";
import Page from "@components/Page";
import styles from "./not-found.module.scss";
const { fourOhFour, image } = styles;

import imageSource from "./not-found-image.png";

export const metadata: Metadata = {
    title: "Four oh four",
    description: "It's gone",
    keywords: ["programming", "programmer", "error", "404"],
};

export default function NotFoundPage() {
    return (
        <Page>
            <Header />
            <Content>
                <div className={fourOhFour}>
                    <img className={image} src={imageSource.src} alt="Uh oh" />
                    <h1>404</h1>
                    <p>Page not found</p>
                </div>
            </Content>
        </Page>
    );
}
