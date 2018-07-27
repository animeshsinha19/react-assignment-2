import React from 'react';

const CharComponent = (props) => {
    return (
        <div style={props.css}>
            <p onClick={props.click}>{props.letter}</p>
        </div>
    );
}

export default CharComponent;