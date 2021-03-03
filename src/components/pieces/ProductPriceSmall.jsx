import React from 'react';
import '../../styles/pieces/ProductPriceSmall.css';

function ProductPriceSmall () {
    return (
        <div className='ContainerPriceS'>
            <p className='ProductPriceS'>$10.000</p>
            <div className='ContainerCounterS'>
                <p className='PlusCounterS'>+</p>
                <div className='CircleCounterS'>
                    <p className='NumberCounterS'>0</p>
                </div>
                <p className='MinusCounterS'>-</p>
            </div>
        </div>
)
}

export default ProductPriceSmall;