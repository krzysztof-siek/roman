import React from 'react';
import styles from './Form.module.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';

const Form = ({submitFn}) => {
    return ( 
        <>
        <div className={styles.form}>
        <form onSubmit={submitFn}>
            <Input
            name="name"
            label="Name"
            maxLength={30}
            />
            <Input
            name="link"
            label="twitter link"
            />
            <Input
            name="image"
            label="Image"
            />
            <Input
            tag="textarea"
            name="description"
            label="Description"
            />
           <Button>Dupa dupaa</Button>
        </form>
        </div>
        </>
     );
}
 
export default Form;
