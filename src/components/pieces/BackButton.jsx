import React from 'react';
import '../../styles/pieces/BackButton.css';

function BackButton (props) {
    return (
        <div className='ComebackContainer' onClick={props.Order}>
            <div className='RegresarText'>{props.Text}</div>
        </div>
    )
}

export default BackButton;