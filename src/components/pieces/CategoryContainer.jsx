import React from 'react';
import '../../styles/pieces/CategoryContainer.css';

import CategoryCircle from '../pieces/CategoryCircle';

import Pizza from '../../img/categories/Pizza2.jpg';
import Hamburger from '../../img/categories/Hamburguer.jpg';
import Hotdogs from '../../img/categories/Hotdog.jpg';
import Other from '../../img/categories/Other.jpg';
import Drinks from '../../img/categories/Coke.jpg';


function CategoryContainer (props) {
    return (
        <div className='CategoryContainer'>
            <div className='LinkCategory'>
                <CategoryCircle PropFunction={props.Pizza} ImgURL={Pizza}/>
            </div>

            <div className='LinkCategory'>
                <CategoryCircle PropFunction={props.Hamburger} ImgURL={Hamburger}/>
            </div>

            <div className='LinkCategory'>
                <CategoryCircle PropFunction={props.Hotdogs} ImgURL={Hotdogs}/>
            </div>

            <div className='LinkCategory'>
                <CategoryCircle PropFunction={props.Other} ImgURL={Other}/>
            </div>
            <div className='LinkCategory'>
                <CategoryCircle PropFunction={props.Drinks} ImgURL={Drinks}/>
            </div>
            
        </div>
    )
}

export default CategoryContainer;