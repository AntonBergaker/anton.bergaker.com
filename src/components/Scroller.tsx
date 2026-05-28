import type { ReactNode } from "react";
import styles from "./scroller.module.scss";
const { scroller } = styles;

type Props = {
    children: ReactNode;
};

export default function Scroller({ children }: Props) {
    return <div className={scroller}>{children}</div>;
}
