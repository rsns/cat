import React from 'react';
import classes from './Category.module.css'

const category = ( props ) => {
    return (
        <button onClick={props.chooseCategory} value={props.id}  className={classes.Category}>{props.name}</button>
    );
}

export default category;