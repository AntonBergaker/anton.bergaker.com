import type { ReactNode } from "react";
import styles from "./index.module.scss";
const { thingBox, thingHeader, thingContent, projectStats, projectBox, projectImage } = styles;

type Props = {
    title: string;
    years: string;
    image: string;
    stats0: string;
    stats1: string;
    children?: ReactNode;
};

export default function ProjectBox({ title, years, image, stats0, stats1, children }: Props) {
    return (
        <div className={projectBox}>
            <div className={projectImage}>
                <img src={image} alt={title + " icon"} />
            </div>
            <div className={thingBox}>
                <div className={thingHeader}>
                    <h3>{title}</h3>
                    <p>{years}</p>
                </div>
                <div className={projectStats}>
                    <p>{stats0}</p>
                    <p>{stats1}</p>
                </div>
                {children && <div className={thingContent}>{children}</div>}
            </div>
        </div>
    );
}
