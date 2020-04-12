import React from 'react';
import ListItem from './listItem/ListItem';

const ListWrapper = (props) => {
    return (
        <ul>
            {props.items.map(item => (
            <ListItem key={item.name} {...item}/>
            ))}
        </ul>
        )
}

export default ListWrapper;