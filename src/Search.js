import React from 'react';

const Form = (props) => {
    return(
        //input city
        <form className="form" onSubmit = {props.loadTemp}>
            <input 
                className="input" 
                type="text" 
                name="city" 
                placeholder="City, Country"
            />
            <button className="button">Search</button>
            <button className="button" onClick={props.saveInput}>Save</button>
        </form>
    )
}
export default Form;