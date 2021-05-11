import * as React from 'react';
import { Helmet } from 'react-helmet';
import { header, firstName } from './header.module.scss';

// markup
const Header = () => {
    return (
        <div id='header' className={header}>
            <a href='../'>
                <h1>
                    <span className={firstName}>Anton</span> Bergåker
                </h1>
            </a>
            <p id='motto'>Now without random taglines!</p>
            <div id='contact_links'>
                <a href='https://twitter.com/DragonCoke'>
                    <i className='fab fa-twitter'></i>
                </a>
                <a href='https://github.com/AntonBergaker'>
                    <i className='fab fa-github'></i>
                </a>
                <a href='mailto:anton@bergaker.com'>
                    <i className='fas fa-envelope'></i>
                </a>
            </div>
        </div>
    );
};

export default Header;
