import React from 'react';
import '../../styles/pieces/CircleLogo.css';
import Image from 'react-bootstrap/Image'
import LogoJr from '../../img/logo/LogoJr.png';


function CircleLogo () {
    return (
        <div className='Circle'>
            <Image src={LogoJr} className='logojr' roundedCircle />
        </div>
    )
}

export default CircleLogo;