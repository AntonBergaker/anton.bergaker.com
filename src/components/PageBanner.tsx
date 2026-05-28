import ExportedImage from "next-image-export-optimizer";
import styles from "./page_banner.module.scss";
const { pageBanner, largeImage, mobileImage, largeWrapper, mobileWrapper } = styles;

type Props = {
    largeImage: string;
    mobileImage: string;
    alt: string;
};

export default function PageBanner(props: Props) {
    return (
        <div className={pageBanner}>
            <div className={largeWrapper}>
                <ExportedImage className={largeImage} width={1920} height={1080} src={props.largeImage} alt={props.alt} />
            </div>
            <div className={mobileWrapper}>
                <ExportedImage className={mobileImage} width={720} height={1080} src={props.mobileImage} alt={props.alt} />
            </div>
        </div>
    );
}

