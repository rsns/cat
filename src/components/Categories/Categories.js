import React from 'react';
import Category from './Category/Category'
import classes from './Categories.module.css'


const categories = ( props ) => {
    const categoriesList = props.categories.map(category => <Category chooseCategory={props.chooseCategory} key={category.id} id={category.id} name={category.name} />)
    return (
        <div className={classes.Categories}>
        <h3 className={classes.Heading}>Choose a CATegory:</h3> 
        {categoriesList}
        </div>
    );
}

export default categories;