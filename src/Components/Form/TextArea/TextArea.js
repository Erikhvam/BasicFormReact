import React from 'react';
import './TextArea.scss';

const TextArea = (props) => {
    return (
        <div className="textareawrapper formelement">
            <textarea id="w3review" name="w3review" placeholder={props.placeholdertext}>
            </textarea> 
        </div>
    )
}

export default TextArea;