import * as React from "react";

import { page } from "./page.module.scss";

export type PageProps = React.PropsWithChildren<{}>;

const Page = (props: PageProps) => {
    return <div className={page}>{props.children}</div>;
};

export default Page;
