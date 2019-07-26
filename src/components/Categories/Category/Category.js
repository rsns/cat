import React from 'react';
import classes from './Category.module.css'

const category = ( props ) => {
    return (
        <button onClick={props.chooseCategory} value={props.id}  className={classes.Category}> {props.id} - {props.name}</button>
        //<img className={classes.SingleImage} src={props.imageUrl} alt={props.imageUrl}></img>
    );
}

export default category;