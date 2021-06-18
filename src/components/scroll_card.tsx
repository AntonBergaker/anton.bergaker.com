import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import * as React from "react";

import { scrollCard, imageContainer, tags } from "./scroll_card.module.scss";

export type ScrollCardProps = React.PropsWithChildren<{
    title: string;
    link: string;
    image: ImageDataLike;
}>;

// markup
const ScrollCard = (props: ScrollCardProps) => {
    const image = getImage(props.image);
    if (image == undefined) {
        throw "Image not found for " + props.title;
    }
    return (
        <a className={scrollCard} href={props.link}>
            <div className={imageContainer}>
                <GatsbyImage image={image} alt={props.title + " Banner"} />
            </div>
            <ul className={tags}>{props.children}</ul>
            <h3>{props.title}</h3>
        </a>
    );
};

export default ScrollCard;
