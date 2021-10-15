import React from 'react';

import './index.css';

const PostItem = (props) => {
    const {text, like, onLike, onDelete} = props;
    let classNames = 'post-item__container ';
    if (like) {
        classNames += 'like '
    }
    return (
        <div className={classNames}>
            <span
                className="post-form__post-text">
                {text}
            </span>
            <div className="buttons">
                <button 
                    type="button"
                    onClick={onLike}
                    className="post-item__btn">
                        <img src="./heart.svg" alt="minus" className="post-item__img"/>
                </button>
                <button 
                    type="button"
                    onClick={onDelete}
                    className="post-item__btn">
                        <img src="./trash.svg" alt="minus" className="post-item__img"/> 
                </button>
            </div>
        </div>
    )
}

export default PostItem;