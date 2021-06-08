import * as React from 'react';
import { Helmet } from 'react-helmet';

interface TagProps {
    title: string;
    description: string;
    keywords: string[];
}

const Tags = (props: TagProps) => {
    return (
        <Helmet>
            <title>{props.title}</title>
            <meta name={'description'} content={props.description} />
            <meta name='keywords' content={props.keywords.join(', ')} />
            <meta charSet='utf-8' />
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1'
            />
            <link
                rel='icon'
                type='image/png'
                sizes='32x32'
                href='/favicon-32x32.png'
            />
            <link
                rel='icon'
                type='image/png'
                sizes='256x256'
                href='/favicon-256x256.png'
            />
            <link rel='preconnect' href='https://fonts.gstatic.com' />
            <link
                href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,300;1,400&display=swap'
                rel='stylesheet'
            />
            <meta property='og:title' content={props.title} />
            <meta property='og:type' content='website' />
            <meta
                property='og:image'
                content='https://anton.bergaker.com/avatar.png'
            />
            <meta property='og:description' content={props.description} />
            <meta property='og:image:width' content='492' />
            <meta property='og:image:height' content='492' />
            <meta name='twitter:title' content={props.title} />
            <meta name='twitter:card' content='summary' />
            <meta name='twitter:author' content='Anton Bergåker' />
            <meta name='twitter:description' content={props.description} />
            <meta
                name='twitter:image'
                content='https://anton.bergaker.com/avatar.png'
            />
            <meta name='theme-color' content='#E32C2E' />
        </Helmet>
    );
};

export default Tags;
