import * as React from 'react';

import { scrollCardTag } from './scroll_card_tag.module.scss';

const colors = {
    gamemaker: { name: 'GameMaker', color: '#1CA972' },
    steam: { name: 'Steam', color: '#0A1C49' },
    nintendo_switch: { name: 'Nintendo Switch', color: '#DE000F' },
    xbox_one: { name: 'Xbox One', color: '#0F760F' },
    play_in_browser: { name: 'Play in Browser', color: '#F89A1B' },
    csharp: { name: 'C#', color: '#953DAC' },
    typescript: { name: 'TypeScript', color: '#2B7489' },
    android: { name: 'Android', color: '#228B22' },
    ios: { name: 'iOS', color: '#147EFB' },
    contract_work: { name: 'Contract Work', color: '#A10707' },
    html5: { name: 'HTML5', color: '#E34C26' },
    nodejs: { name: 'Node.js', color: '#669F64' },
    game_jam: { name: 'Game Jam', color: '#A45EE5' },
    blog_post: { name: 'Blog Post', color: '#296D98' },
    extension: { name: 'Extension', color: '#FB422D' },
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

const ScrollCardTag = (props: ScrollCardTagProps | ScrollCardCustomProps) => {
    let localProps = props;
    if ('tag' in localProps) {
        localProps = { ...colors[localProps.tag], ...localProps };
    }
    return (
        <li
            className={scrollCardTag}
            style={{ backgroundColor: localProps.color }}
        >
            {localProps.name}
        </li>
    );
};

export default ScrollCardTag;
