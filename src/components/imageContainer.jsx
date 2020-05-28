import React from 'react';

function ImageRow(props) {

    return (
        <div>
            {
                props.links.map(link => (
                    <img src={link} alt="Nothing" />
                ))
            }
        </div>
    );
}


function ImageCollection(props){


    
    return (
        <div className = {props.className}>
            <img src={props.headImage} alt="Nothing" />
            <ImageRow links = {props.otherImage}/>
        </div>
    );
}

export default ImageCollection;