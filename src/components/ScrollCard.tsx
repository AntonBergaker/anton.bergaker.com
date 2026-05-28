import type { ReactNode } from "react";
import styles from "./scroll_card.module.scss";
import ExportedImage from "next-image-export-optimizer";
const { scrollCard, imageContainer, tags, imageContent } = styles;

export type ScrollCardProps = {
    title: string;
    link: string;
    image: string;
    children?: ReactNode;
};

export default function ScrollCard({ title, link, image, children }: ScrollCardProps) {
    return (
        <a className={scrollCard} href={link}>
            <div className={imageContainer}>
                <ExportedImage className={imageContent} src={image} width={940} height={529} alt={title + " Banner"} />
            </div>
            <ul className={tags}>{children}</ul>
            <h3>{title}</h3>
        </a>
    );
}
