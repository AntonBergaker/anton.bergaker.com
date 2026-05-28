import type { ReactNode } from "react";
import styles from "./index.module.scss";
const { thingBox, thingHeader, thingShortDesc, thingContent } = styles;

type Props = {
    title: string;
    years: string;
    desc: string;
    children?: ReactNode;
};

export default function WorkEducationBox({ title, years, desc, children }: Props) {
    return (
        <div className={thingBox}>
            <div className={thingHeader}>
                <h3>{title}</h3>
                <p>{years}</p>
            </div>
            <p className={thingShortDesc}>
                <i>{desc}</i>
            </p>
            {children && <div className={thingContent}>{children}</div>}
        </div>
    );
}
