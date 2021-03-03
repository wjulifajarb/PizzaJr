import React from 'react';
import '../../styles/pieces/ProductPrice.css';

function ProductPrice () {
    return (
        <div className='ContainerPriceD'>
            <p className='ProductPriceD'>$10.000</p>
            <div className='ContainerCounterD'>
                <p className='PlusCounterD'>+</p>
                <div className='CircleCounterD'>
                    <p className='NumberCounterD'>0</p>
                </div>
                <p className='MinusCounterD'>-</p>
            </div>
        </div>
)
}

export default ProductPrice;