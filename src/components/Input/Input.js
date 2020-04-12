import React from 'react';
import style from "./Input.module.scss";
import PropTypes from "prop-types";

const Input = ({tag: Tag, name, label, maxLength}) => (
    <div className="zero">
        <Tag 
        className='jeden'
        type='text'
        name={name}
        id={name}
        required
        maxLength={maxLength}
        />
        <label className="dwa"
        htmlFor={name}>{label}</label>
        <div className="trzy"
        />
    </div>
)

Input.propTypes = {
    tag:PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    maxLength: PropTypes.number.isRequired,

}

Input.defaultProps = {
    tag: 'input'
}
 
export default Input;
