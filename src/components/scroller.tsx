import * as React from 'react';

import { scroller } from './scroller.module.scss';

export type ScrollerProps = React.PropsWithChildren<{}>;

const Scroller = (props: ScrollerProps) => {
    return <div className={scroller}>{props.children}</div>;
};

export default Scroller;
