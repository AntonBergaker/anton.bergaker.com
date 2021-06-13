import * as React from 'react';

import BrandButton from './brand_button';
import AppStoreSvg from './svgs/app_store';
import GithubSvg from './svgs/github';
import GlobeSvg from './svgs/globe';
import GooglePlaySvg from './svgs/google_play';
import NintendoSwitchSvg from './svgs/nintendo_switch';
import SteamSvg from './svgs/steam';
import XboxSvg from './svgs/xbox';

type Brand = {
    color: string;
    image: JSX.Element;
    defaultText: string;
};

const brands: { [key: string]: Brand } = {
    website: {
        color: '#56D1F7',
        image: <GlobeSvg />,
        defaultText: 'Open Website',
    },
    xbox: {
        color: '#0F780F',
        image: <XboxSvg />,
        defaultText: 'Open on Microsoft Store',
    },
    switch: {
        color: '#DA121E',
        image: <NintendoSwitchSvg />,
        defaultText: 'Open on Nintendo Store',
    },
    steam: {
        color: '#00AEEF',
        image: <SteamSvg />,
        defaultText: 'Open on Steam',
    },
    google_play: {
        color: '#0AE977',
        image: <GooglePlaySvg />,
        defaultText: 'Open on Google Play',
    },
    app_store: {
        color: '#1AA2F8',
        image: <AppStoreSvg />,
        defaultText: 'Open on App Store',
    },
    github: {
        color: '#9c45aa',
        image: <GithubSvg />,
        defaultText: 'Open on Github',
    },
};

export type TagNames = keyof typeof brands;

export interface BrandButtonPremadeProps {
    brand: TagNames;
    link: string;
    text?: string;
}

const BrandButtonPremade = (props: BrandButtonPremadeProps) => {
    const brand = brands[props.brand];

    return (
        <BrandButton
            image={brand.image}
            color={brand.color}
            text={props.text ?? brand.defaultText}
            link={props.link}
        ></BrandButton>
    );
};

export default BrandButtonPremade;
