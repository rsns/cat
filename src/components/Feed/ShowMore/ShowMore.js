import React from 'react';
import classes from './ShowMore.module.css'

const showMore = ( props ) => {
    return (
        <div className={classes.btn__wrap}>
            <button className={classes.ShowMore}>Show More</button>
        </div>
    );
}

export default showMore;