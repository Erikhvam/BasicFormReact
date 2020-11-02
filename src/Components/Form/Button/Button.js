import React, {useEffect, useState} from 'react';

const Button = ({currentstep, stephandler, totalsteps}) => {
    let buttonNextClick = () => {
        let currentStep = currentstep;
        currentStep++;
        stephandler(currentStep);
    }
    let buttonPrevClick = () => {
        let currentStep = currentstep;
        currentStep--;
        stephandler(currentStep);
    }

    const RenderButton = () => {
        return (
            <>
            {(() =>{
                if (currentstep<totalsteps){
                    return <button onClick={buttonNextClick} type="button">Next</button>;
                }
            })()
            }
            {(() =>{
                if (currentstep>1) {
                   return <button onClick={buttonPrevClick} type="button">Previous</button>;
                }
            })()
            }
            </>
        )
    }
    return (
        <RenderButton/>
    )
}

export default Button;
