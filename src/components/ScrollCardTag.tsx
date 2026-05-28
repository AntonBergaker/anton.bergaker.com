"use client";
import { useState } from "react";
import styles from "./scroll_card_tag.module.scss";
const { scrollCardTag, background, tagWrapper, text } = styles;

const colors = {
    gamemaker: { name: "GameMaker", color: "#1CA972" },
    steam: { name: "Steam", color: "#0A1C49" },
    nintendo_switch: { name: "Nintendo Switch", color: "#DE000F" },
    xbox_one: { name: "Xbox One", color: "#0F760F" },
    play_in_browser: { name: "Play in Browser", color: "#F89A1B" },
    run_in_browser: { name: "Run in Browser", color: "#F89A1B" },
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
    wpf: { name: "WPF", color: "#774CE0" },
    unity3d: { name: "Unity 3D", color: "#111111" },
    godot: { name: "Godot", color: "#4588B9" },
    react: { name: "React", color: "#58C4DC" },
} as const;

export type TagNames = keyof typeof colors;

const thinPolys = ["0,0 9,99 95,95 100,0", "8,5 0,99 95,95 100,0"];
const thickPolys = [
    "0,5 2,99 100,97 98,0",
    "0,5 1,99 97,95 99,70 98,0",
    "0,5 3,98 99,95 97,2 90,0",
];

type TagProps = { tag: TagNames; name?: string; color?: string };
type CustomProps = { name: string; color: string; tag?: never };
type Props = TagProps | CustomProps;

export default function ScrollCardTag(props: Props) {
    const name = "tag" in props && props.tag ? (props.name ?? colors[props.tag].name) : (props as CustomProps).name;
    const color = "tag" in props && props.tag ? (props.color ?? colors[props.tag].color) : (props as CustomProps).color;

    const polyArray = name.length < 5 ? thinPolys : thickPolys;
    const [poly] = useState(() => polyArray[Math.floor(Math.random() * polyArray.length)]);

    return (
        <li className={scrollCardTag}>
            <div className={tagWrapper}>
                <svg className={background} preserveAspectRatio="none" viewBox="0 0 100 100">
                    <polygon points={poly} fill={color} />
                </svg>
                <span className={text}>{name}</span>
            </div>
        </li>
    );
}
