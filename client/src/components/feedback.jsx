import React from 'react';


function Feedback(props) {

    const stars = props.content.stars;
    var rows = [];

    for(let i = 1; i <= 5; i++){
        if(i <= stars)
            rows.push(1);
        else
            rows.push(0);
    }

    rows = rows.map((val, id) => {
        if(val === 1)
            return (<span key = {id} className="fa fa-star checked"></span>);
        else
            return (<span key = {id} className="fa fa-star"></span>);
    });

    
    return (
        <div className="feedback">
            <span>Feedback</span>
            {rows}
        </div>
    );
}

export default Feedback;