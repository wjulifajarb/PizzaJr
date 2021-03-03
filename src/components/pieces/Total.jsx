import React from 'react'
import '../../styles/pieces/Total.css';

function Total(props) {

    const { carItems } = props;

    const itemsPrice = carItems.reduce((a, c) => a + c.pricesmall * c.qty, 0);

    let showTotal = (new Intl.NumberFormat("es-CO", {style: "currency", currency: "COP", maximumFractionDigits: 0}).format(itemsPrice));

    return (
        <div className='BasketTotal'>
            <p className='TotalAmount'>{showTotal}</p>
        </div>
    )
}

export default Total
