import * as React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/header';

// markup
const IndexPage = () => {
    return (
        <>
            <Helmet>
                <title>Anton is awesome</title>
            </Helmet>
            <Header />
            <p>Anton should be</p>
        </>
    );
};

export default IndexPage;
