import React from 'react';

const Filter = ({showLiked, onlyLiked}) => {
    let filterBtnClassNames = `nav__filter-btn `;
    if (onlyLiked) {filterBtnClassNames += `filter-btn_push`}

    return (
        <button 
            onClick={showLiked}
            className={filterBtnClassNames}>
            Show only liked posts
        </button>
    )
}

export default Filter;