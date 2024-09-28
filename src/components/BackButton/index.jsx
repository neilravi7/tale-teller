import React from 'react';
import { Link } from 'react-router-dom';


function BackButton(props) {
    location = props.loaction
    console,log("Location : ", location);
    return (
        <Link to={location}>
            Back
        </Link>
    );

}

export default BackButton;