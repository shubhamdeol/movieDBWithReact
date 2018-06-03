import React from 'react';
import Style from './SearchButton.css';

const search = (props) => {
    return(
        <div className={Style.Search}>
            <input type="search" placeholder="Book Your Movie" />
        </div>
    );
}

export default search;