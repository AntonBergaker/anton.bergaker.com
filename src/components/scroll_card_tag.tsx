import * as React from "react";

import {
    scrollCardTag,
    background,
    tagWrapper,
    text,
} from "./scroll_card_tag.module.scss";

const colors = {
    gamemaker: { name: "GameMaker", color: "#1CA972" },
    steam: { name: "Steam", color: "#0A1C49" },
    nintendo_switch: { name: "Nintendo Switch", color: "#DE000F" },
    xbox_one: { name: "Xbox One", color: "#0F760F" },
    play_in_browser: { name: "Play in Browser", color: "#F89A1B" },
    csharp: { name: "C#", color: "#953DAC" },
    typescript: { name: "TypeScript", color: "#2B7489" },
    android: { name: "Android", color: "#228B22" },
    ios: { name: "iOS", color: "#147EFB" },
    contract_work: { name: "Contract Work", color: "#A10707" },
    html5: { name: "HTML5", color: "#E34C26" },
    nodejs: { name: "Node.js", color: "#669F64" },
    game_jam: { name: "Game Jam", color: "#A45EE5" },
    blog_post: { name: "Blog Post", color: "#296D98" },
    extension: { name: "Extension", color: "#FB422D" },
};
export type TagNames = keyof typeof colors;

interface ScrollCardTagProps {
    tag: TagNames;
    name?: string;
    color?: string;
}
interface ScrollCardCustomProps {
    name: string;
    color: string;
}

const thinPolys = [
    <polygon points='0,0 9,99 95,95 100,0' />,
    <polygon points='8,5 0,99 95,95 100,0' />,
];
const thickPolys = [
    <polygon points='0,5 2,99 100,97 98,0' />,
    <polygon points='0,5 1,99 97,95 99,70 98,0' />,
    <polygon points='0,5 3,98 99,95 97,2 90,0' />,
];

const ScrollCardTag = (props: ScrollCardTagProps | ScrollCardCustomProps) => {
    let localProps = props;
    if ("tag" in localProps) {
        localProps = { ...colors[localProps.tag], ...localProps };
    }
    const polyArray = localProps.name!.length < 5 ? thinPolys : thickPolys;
    const poly = polyArray[Math.floor(Math.random() * polyArray.length)];
    const coloredPoly = React.cloneElement(poly, {
        ...poly.props,
        fill: localProps.color,
    });

    return (
        <li className={scrollCardTag}>
            <div className={tagWrapper}>
                <svg
                    className={background}
                    preserveAspectRatio='none'
                    viewBox='0 0 100 100'
                >
                    {coloredPoly}
                </svg>
                <span className={text}>{localProps.name}</span>
            </div>
        </li>
    );
};

export default ScrollCardTag;
