import React from 'react';
import classes from './SingleImage.module.css'

const singleImage = ( props ) => {

    return (
        <img className={classes.SingleImage} src={props.imageUrl} alt={props.imageUrl}></img>
    );
}

export default singleImage;