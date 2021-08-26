import React from 'react';
import PostItem from '../PostItem/PostItem';

import './index.css';

const PostList = ({posts, onDelete, onLike, onlyLiked}) => {
    let postsList;

    if (!onlyLiked) {
        postsList = posts.map(post => {
            const {id, ...itemProps} = post;
            return (
                
                <li key={id} className="post-list-item">
                    <PostItem 
                        {...itemProps}
                        onDelete={() => onDelete(id)}
                        onLike={() => onLike(id)}/>
                </li>
            )
        });
    } else {
        postsList = posts
                        .filter(post => post.like)
                        .map(post => {
            const {id, ...itemProps} = post;
            return (
                
                <li key={id} className="post-list-item">
                    <PostItem 
                        {...itemProps}
                        onDelete={() => onDelete(id)}
                        onLike={() => onLike(id)}/>
                </li>
            )
        });
    }
    

    return (
        <ul className="posts-list">
            {postsList}
        </ul>
    )
}

export default PostList;