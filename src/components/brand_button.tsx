import * as React from 'react';

import {
    brandButton,
    brandButtonLink,
    diagonalLine,
    elementContainer,
    imageWrapper,
} from './brand_button.module.scss';

export interface BrandButtonProps {
    link: string;
    text: string;
    image: JSX.Element;
    color: string;
}

const BrandButton = (props: BrandButtonProps) => {
    return (
        <a href={props.link} className={brandButtonLink}>
            <div className={brandButton}>
                <div className={elementContainer}>
                    <div
                        className={imageWrapper}
                        style={{ color: props.color }}
                    >
                        {props.image}
                    </div>
                    <p>{props.text}</p>
                </div>
                <div className={diagonalLine}>
                    <svg preserveAspectRatio='none' viewBox='0 0 100 100'>
                        <polygon
                            points='0,0 0,70 100,100 100,0'
                            style={{
                                fill: props.color,
                            }}
                        />
                    </svg>
                </div>
            </div>
        </a>
    );
};

export default BrandButton;
