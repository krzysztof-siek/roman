import React from 'react';
import './listItem.css';
import img1 from "../../../img/chicks.webp";

const ListItem = (props) => (
    <li className='listItem__wrapper'>
    <img src={props.image}  className='listItem__image'/>
    <div>
        <h2 className="listItem__name">{props.name}</h2>
        <p className='listItem__description'>{props.desc}</p>
        <a href={props.link} className="listItem__button">visit twitter page</a>
    </div>
    </li>

)

export default ListItem;