import React from 'react';
import styles from './Form.module.scss';

const Form = ({submitFn}) => {
    return ( 
        <>
        <div className={styles.form}>
        <form onSubmit={submitFn}>
            <input placeholder="name" name="name"/>
            <input placeholder="link" name="link"/>
            <input placeholder="image" name="image"/>
            <textarea placeholder="description" name="description"/>
            <button type="submit">Add new item</button>
        </form>
        </div>
        </>
     );
}
 
export default Form;
