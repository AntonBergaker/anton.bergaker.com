import type { ReactNode } from "react";
import styles from "./scroll_card.module.scss";
import ExportedImage from "next-image-export-optimizer";
const { scrollCard, scrollCardSmol, imageContainer, tags, imageContent } = styles;

type Props = {
    title: string;
    link: string;
    image: string;
    children?: ReactNode;
};

export default function ScrollCardSmol({ title, link, image, children }: Props) {
    return (
        <a className={scrollCard + " " + scrollCardSmol} href={link}>
            <div className={imageContainer}>
                <ExportedImage className={imageContent} src={image} width={620} height={349} alt={title + " Banner"} />
            </div>
            <ul className={tags}>{children}</ul>
            <h3>{title}</h3>
        </a>
    );
}
