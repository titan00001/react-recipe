import React, {useState, useEffect} from 'react';



function Form(props) {

    
    const [inputs, setInputs] = useState([""]);

    const addInput = () => {
        setInputs(Object.assign([...inputs], { [inputs.length]: "" }));
    }

    const setInput = (i, v) => {
        setInputs(Object.assign([...inputs], { [i]: v }));
    };

    const removeField = (i) => {
        setInputs(inputs.filter((_, index) => !(index === i)));
    }

    // var sendDataToParent = () => {
    //     const info = inputs;
    //     props.getData(info);
    // }


    useEffect(() => {
        if(props.listen === true){ 
            const info = {"name": props.name, "content" : inputs};
            // console.log("hello2")
            props.getData(info);
        }
    }, [props.listen, inputs, props.getData, props, props.name]);


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

            <button onClick={ e => addInput() }>Add</button>       
        </div>
    );
}

export default Form;