import type { ReactNode } from "react";
import styles from "./content.module.scss";
const { content } = styles;

type Props = {
    children: ReactNode;
};

export default function Content({ children }: Props) {
    return <div className={content}>{children}</div>;
}
