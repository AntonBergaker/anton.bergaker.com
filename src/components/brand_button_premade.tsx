import * as React from "react";

import BrandButton from "./brand_button";
import AppStoreSvg from "./svgs/app_store";
import GithubSvg from "./svgs/github";
import GlobeSvg from "./svgs/globe";
import GooglePlaySvg from "./svgs/google_play";
import NintendoSwitchSvg from "./svgs/nintendo_switch";
import SteamSvg from "./svgs/steam";
import VRChatSvg from "./svgs/vrchat";
import WindowsSvg from "./svgs/windows";
import XboxSvg from "./svgs/xbox";

type Brand = {
    color: string;
    image: JSX.Element;
    defaultText: string;
};

const brands = {
    website: {
        color: "#56D1F7",
        image: <GlobeSvg />,
    },
    xbox: {
        color: "#0F780F",
        image: <XboxSvg />,
    },
    switch: {
        color: "#DA121E",
        image: <NintendoSwitchSvg />,
    },
    steam: {
        color: "#00AEEF",
        image: <SteamSvg />,
    },
    google_play: {
        color: "#0AE977",
        image: <GooglePlaySvg />,
    },
    app_store: {
        color: "#1AA2F8",
        image: <AppStoreSvg />,
    },
    github: {
        color: "#9c45aa",
        image: <GithubSvg />,
    },
    windows: {
        color: "#00A8E8",
        image: <WindowsSvg />,
    },
    vrchat: {
        color: "#094C81",
        image: <div />,
    }
};

export type TagNames = keyof typeof brands;

export interface BrandButtonPremadeProps {
    brand: TagNames;
    link: string;
    text: string;
}

const BrandButtonPremade = (props: BrandButtonPremadeProps) => {
    const brand = brands[props.brand];

    return (
        <BrandButton
            image={brand.image}
            color={brand.color}
            text={props.text}
            link={props.link}
        ></BrandButton>
    );
};

export default BrandButtonPremade;
