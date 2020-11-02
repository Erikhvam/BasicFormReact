import React, {useEffect, useState} from 'react';
import './Form.scss';
import TextInput from './TextInput/TextInput';
import SelectInput from './SelectInput/SelectInput';
import RadioInput from './RadioInput/RadioInput';
import TextArea from './TextArea/TextArea';
import Button from './Button/Button';

const Form = () => {
    const [formStep, setFormStep] = useState(1);
    const [totalSteps, setTotalSteps] = useState(3);

    let updateStep = (newStep) => {
        setFormStep(newStep);
    }

    const RenderStep1 = () => {
        return (
            <>
            <TextInput/>
            <SelectInput/>
            <RadioInput/>
            <TextArea placeholdertext="Her kan du livse med bil.."/>
            <TextArea placeholdertext="Swiffwhiff"/> 
            </>
        )
    } 
    const RenderStep2 = () => {
        return (
            <h1>step2</h1>
        )
    } 
    const RenderStep3 = () => {
        return (
            <h1>step3</h1>
        )
    } 
    const RenderForm = () => {
        switch (formStep) {
            case 1: 
                return(
                    <RenderStep1/>
                )
            case 2: 
                return(
                    <RenderStep2/>
                )
            case 3: 
                return(
                    <RenderStep3/>
                )
        }
    }
    return (
        <div className="formwrap">
        <form>
            <RenderForm/>
            <Button 
                currentstep={formStep} 
                stephandler={updateStep}
                totalsteps={totalSteps}/>
        </form>
        </div>
    )
}

export default Form;

