import React from 'react';
import ListItem from './listItem/ListItem';
import { twitterAccounts } from "../../data/twitterAccounts";

const ListWrapper = () => {
    return (
        <ul>
            {twitterAccounts.map(item => (
            <ListItem 
                name={item.name} 
                desc={item.description} 
                image={item.image} 
                link={item.twitterLink}/>
            ))}
        </ul>
        )
}

export default ListWrapper;