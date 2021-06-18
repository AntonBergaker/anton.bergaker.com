import * as React from "react";

import {
    pageBanner,
    largeImage,
    mobileImage,
    largeWrapper,
    mobileWrapper,
} from "./page_banner.module.scss";

export type PageBannerProps = {
    largeImage: JSX.Element;
    mobileImage: JSX.Element;
    alt: string;
};

const PageBanner = (props: PageBannerProps) => {
    const largeClone = React.cloneElement(props.largeImage, {
        ...props.largeImage.props,
        className: largeImage,
        alt: props.alt,
    });
    const mobileClone = React.cloneElement(props.mobileImage, {
        ...props.mobileImage.props,
        className: mobileImage,
        alt: props.alt,
    });

    return (
        <div className={pageBanner}>
            <div className={largeWrapper}>{largeClone}</div>
            <div className={mobileWrapper}>{mobileClone}</div>
        </div>
    );
};

export default PageBanner;
