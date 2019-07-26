import React from 'react';
import classes from './ShowMore.module.css'

const showMore = ( props ) => {
    return (
        <div className={classes.btn__wrap}>
            <button onClick={props.showMore} className={classes.ShowMore}>Show Moar</button>
        </div>
    );
}

export default showMore;