import React from 'react';
import '../../styles/pieces/ProductData.css';
import Image from 'react-bootstrap/Image'
import ProductPriceSmall from './ProductPriceSmall';
import Trash from '../../img/icons/trash.svg';

function ProductData () {
    return (
        <div className='ProductData'>
            <h3 className='ProductName'>Pizza Napolitana</h3>
            <div className='TrashContainer'>
                <Image src={Trash} alt='Eliminar' className='Trash' />
            </div>
            <div className='ProductoPriceContainer'>
                <ProductPriceSmall />
            </div>
        </div>
    )
}

export default ProductData;