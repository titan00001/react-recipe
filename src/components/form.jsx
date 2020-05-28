import React, {useState} from 'react';



function Form(props) {

    
    const [inputs, setInputs] = useState([""]);

    const addInput = () => {
        setInputs(Object.assign([...inputs], { [inputs.length - 1]: "" }));
    }

    const setInput = (i, v) => {
        setInputs(Object.assign([...inputs], { [i]: v }));
    };

    const removeField = (i) => {
        setInputs(inputs.filter((_, index) => !(index === i)));
    }

    const sendDataToParent = () => {
        const info = inputs;
        console.log(props.getData);
        props.getData(info);
        console.log(props.getData);
    }


    return (
        <div>
            {
                inputs.map((v, i) => (
                <div key={i}>
                <span>{i+1}</span>
                <input value={v} onChange={e => setInput(i, e.target.value)} />
                <button onClick={e => removeField(i)}>Delete</button>
                </div>
                ))
            }

            <button onClick={ e => addInput(inputs.push("")) }>Add</button>       
            <button onClick={ sendDataToParent }>Display</button>
        </div>
    );
}

export default Form;