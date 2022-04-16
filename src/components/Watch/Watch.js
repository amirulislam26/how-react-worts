import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';
import './Watch.css'

const Watch = () => {
    const [steps, setSteps] = useState(0);

    const increaseSteps = () => {
        const newStepsCount = steps + 1;
        setSteps(newStepsCount);
    }

    useEffect(() => {
        console.log(steps)
    }, [steps])

    return (
        <div style={{ border: '2px solid aqua', color: 'hotpink', margin: '20px' }}>
            <h2>This is my smart Watch</h2>
            <h3>My Current Steps watch: {steps}</h3>
            <button className='button' onClick={increaseSteps}>Click me......</button>
            <Display name="germin" steps={steps}></Display>
        </div>
    );
};

export default Watch;