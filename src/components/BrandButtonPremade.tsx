import BrandButton from "./BrandButton";
import Globe from "./svgs/Globe";
import Xbox from "./svgs/Xbox";
import NintendoSwitch from "./svgs/NintendoSwitch";
import Steam from "./svgs/Steam";
import GooglePlay from "./svgs/GooglePlay";
import AppStore from "./svgs/AppStore";
import Github from "./svgs/Github";
import Windows from "./svgs/Windows";
import VrChat from "./svgs/VrChat";

const brands = {
    website: { color: "#56D1F7", Icon: Globe },
    xbox: { color: "#0F780F", Icon: Xbox },
    switch: { color: "#DA121E", Icon: NintendoSwitch },
    steam: { color: "#00AEEF", Icon: Steam },
    google_play: { color: "#0AE977", Icon: GooglePlay },
    app_store: { color: "#1AA2F8", Icon: AppStore },
    github: { color: "#9c45aa", Icon: Github },
    windows: { color: "#00A8E8", Icon: Windows },
    vrchat: { color: "#094C81", Icon: VrChat },
} as const;

export type BrandNames = keyof typeof brands;

type Props = {
    brand: BrandNames;
    link: string;
    text: string;
};

export default function BrandButtonPremade({ brand, link, text }: Props) {
    const { color, Icon } = brands[brand];
    return <BrandButton link={link} text={text} color={color} icon={<Icon />} />;
}
