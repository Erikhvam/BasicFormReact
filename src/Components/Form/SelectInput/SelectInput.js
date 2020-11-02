import React from 'react';
import './SelectInput.scss';

const SelectInput = () => {
    return (
        <>
        <label forHtml="standard-select">Bil:</label>
        <div className="select formelement">
            <select id="standard-select">
                <option value="Option 1">Volvo</option>
                <option value="Option 2">Saab</option>
                <option value="Option 3">BMW</option>
                <option value="Option 4">Fiat</option>
                <option value="Option 5">Ford</option>
            </select>
            <span class="focus"></span>
        </div>
        </>
    )
}

export default SelectInput;