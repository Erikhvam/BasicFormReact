import React from 'react';
import './TextInput.scss';

const TextInput = () => {
    return (
        <div className="textwrap formelement">
            <label htmlFor="navn">Navn:</label>
            <input type="text" id="navn"></input>
        </div>
    )
}


export default TextInput;