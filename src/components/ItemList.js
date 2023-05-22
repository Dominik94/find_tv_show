import React from 'react';

import Item from './Item';

import classes from './ItemList.module.css'

const ItemList = (props) => {

    if (props.error !== null) {
        return <h1 className={classes.title}>Wyszukaj swój ulubiony serial lub aktora / aktorkę :)</h1>;
    }
    if (props.data === null) {
        return <h1>Loading...</h1>;
    }
    if (props.data !== null && props.error === null) {
        if (props.data.length === 0) {
            return(
                <div>   
                    <h1>We couldn't find anything that matches your search. Maybe try something else?</h1>
                </div>
            );    
        }
       else { 
        var listItem = props.data.map((element) => {
            return (
                <Item element={element} />
            )
            });
        }  
    }

    return (
        <div className={classes.list}>
            {listItem}
        </div>
    );
}

export default ItemList;
