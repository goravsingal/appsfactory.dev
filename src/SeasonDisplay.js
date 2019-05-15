import React from 'react';

const SeasonDisplay = (props) => {
    console.log(props);
    return (
        <div>
        <div>Season Display</div>
        <div>Lat: {props.lat}</div>
        </div>
    );
};

export default SeasonDisplay;