import { getImage, ImageDataLike, StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { pageBanner, largeImage, mobileImage } from './page_banner.module.scss';

export type PageBannerProps = {
    largeImage: JSX.Element;
    mobileImage: JSX.Element;
    alt: string;
};

const PageBanner = (props: PageBannerProps) => {
    return (
        <div className={pageBanner}>
            <StaticImage
                {...props.largeImage.props}
                className={largeImage}
                alt={props.alt}
            />
            <StaticImage
                {...props.mobileImage.props}
                className={mobileImage}
                alt={props.alt}
            />
        </div>
    );
};

export default PageBanner;
