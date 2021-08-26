import React from 'react';

import './index.css'

const Header = ({numOfPosts, numOfLikedPosts}) => {
    return (
        <header className="header__container">
            <h1 className="header__title">
                Little twitter
            </h1>
            <div className="header__counter-container">
                <p className='header__counter'>Posts: {numOfPosts}</p>
                <p className='header__counter'>Liked: {numOfLikedPosts}</p>
            </div>
        </header>
    )
}

export default Header