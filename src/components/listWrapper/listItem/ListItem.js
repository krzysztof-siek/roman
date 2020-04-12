import React from 'react';
import PropTypes from "prop-types";
import './listItem.css';

const ListItem = ({
    name,
    description,
    image,
    twitterLink
}) => (
    <li className='listItem__wrapper'>
    <img src={image}  className='listItem__image'/>
    <div>
        <h2 className="listItem__name">{name}</h2>
        <p className='listItem__description'>{description}</p>
        <a href={twitterLink} className="listItem__button">visit twitter page</a>
    </div>
    </li>

)

ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    image:PropTypes.string.isRequired,
    twitterLink:  PropTypes.string.isRequired,
}

// W razie gdyby nie było takiego elementu 
ListItem.defaultProps = {
    description: "Jakiś elenment reactowy - desc"
}

export default ListItem;