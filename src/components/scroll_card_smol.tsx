import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";

import { ScrollCardProps } from "./scroll_card";
import {
    scrollCard,
    scrollCardSmol,
    imageContainer,
    tags,
} from "./scroll_card.module.scss";

// markup
const ScrollCardSmol = (props: ScrollCardProps) => {
    const image = getImage(props.image);
    if (image == undefined) {
        throw "Image not found for " + props.title;
    }
    return (
        <a className={scrollCard + " " + scrollCardSmol} href={props.link}>
            <div className={imageContainer}>
                <GatsbyImage image={image} alt={props.title + " Banner"} />
            </div>
            <ul className={tags}>{props.children}</ul>
            <h3>{props.title}</h3>
        </a>
    );
};

export default ScrollCardSmol;
