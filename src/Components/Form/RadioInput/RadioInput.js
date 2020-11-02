import React from 'react';
import './RadioInput.scss';

const RadioInput = () => {
    return (
        <div className="radiowrapper formelement">
                <label htmlFor="navn">Hvor mange:</label>
                <label class="container">One
                <input type="radio" id="male" name="gender" value="male"></input>
                <span class="checkmark"></span>
                </label>

                <label class="container">Two
                <input type="radio" id="male" name="gender" value="male"></input>
                <span class="checkmark"></span>
                </label>

                <label class="container">Three
                <input type="radio" id="male" name="gender" value="male"></input>
                <span class="checkmark"></span>
                </label>

                <label class="container">Four
                <input type="radio" id="male" name="gender" value="male"></input>
                <span class="checkmark"></span>
                </label> 
    </div>
    )
}

export default RadioInput;