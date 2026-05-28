import type { ReactNode } from "react";
import styles from "./brand_button.module.scss";
const { brandButton, brandButtonLink, diagonalLine, elementContainer, imageWrapper } = styles;

type Props = {
    id?: string;
    link: string;
    text: string;
    icon: ReactNode;
    color: string;
};

export default function BrandButton({ id, link, text, icon, color }: Props) {
    return (
        <a id={id} href={link} className={brandButtonLink}>
            <div className={brandButton}>
                <div className={elementContainer}>
                    <div className={imageWrapper} style={{ color }}>
                        {icon}
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
