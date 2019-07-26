import React from 'react';
import classes from './Feed.module.css'
import SingleImage from './SingleImage/SingleImage'
import ShowMore from './ShowMore/ShowMore'

const Feed = ( props ) => {
    const imageFeed = props.images.map(image => <SingleImage key={image.id} imageUrl={image.url}/>)
    return (
        <div className={classes.MultiColumn}>

            {imageFeed}
            <ShowMore />
         </div>
    );
}

export default Feed;