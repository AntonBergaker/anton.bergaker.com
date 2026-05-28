import type { ReactNode } from "react";
import styles from "./brand_button.module.scss";
const { brandButton, brandButtonLink, diagonalLine, elementContainer, imageWrapper } = styles;

type Props = {
    id?: string;
    text: string;
    color: string;
    children?: ReactNode;
};

export default function StylishButton({ id, text, color, children }: Props) {
    return (
        <a id={id} className={brandButtonLink}>
            <div className={brandButton}>
                <div className={elementContainer}>
                    <div className={imageWrapper} style={{ color }}>
                        {children}
                    </div>
                    <p>{text}</p>
                </div>
                <div className={diagonalLine}>
                    <svg preserveAspectRatio="none" viewBox="0 0 100 100">
                        <polygon points="0,0 0,70 100,100 100,0" style={{ fill: color }} />
                    </svg>
                </div>
            </div>
        </a>
    );
}
