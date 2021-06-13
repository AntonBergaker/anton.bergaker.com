import * as React from 'react';

import { content } from './content.module.scss';

export type ContentProps = React.PropsWithChildren<{}>;

const Content = (props: ContentProps) => {
    return <div className={content}>{props.children}</div>;
};

export default Content;
