import React from 'react';

const Saved = (props) => {

    if(props.saveLocal === null){
        return(null)
    }
    else{
        return(
            <div>
                <h2>Saved Locations</h2>
                <div>
                    {props.saveLocal.map((saved, index) => 
                    (<button key={index} onClick={props.submit} value={saved} type="button" className="savedButton">{saved}</button>))}
                </div>
            </div>
        )
    }
}
 
export default Saved;