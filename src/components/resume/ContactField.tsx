import type { ReactNode } from "react";
import styles from "./index.module.scss";
const { contactField, contactFieldImage } = styles;

type Props = {
    text: string;
    link?: string;
    children?: ReactNode;
};

export default function ContactField({ text, link, children }: Props) {
    return (
        <div className={contactField}>
            <div className={contactFieldImage}>{children}</div>
            <a href={link ?? text}>{text}</a>
        </div>
    );
}
