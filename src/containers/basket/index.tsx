import React from 'react';

import {
    LabeledInput,
    Button
} from '@main/components'

import style from './style.css';

import {URLs} from '../../__data__/urls';

import asset from "../../asset";

class Basket extends React.Component {
    render() {
        return (
            <div>
                <div className={style.background}>
                    <a className={style.ref1} href={'/repos' + URLs.basket.url}>
                        <img src={asset.icon3} className={style.box1}/>
                        <span className={style.text1}>Корзина ( )</span>
                    </a>

                    <div className={style.menu}>
                        <p></p>
                    </div>

                    <div className={style.test}>
                        <div className={style.heading}>
                            <h1>Корзина </h1>
                            <span>Количество товаров: 4</span>
                            <div>
                        <div className={style.product}>
                            <img src={asset.dress1} className={style.prod1}/>
                            <img src={asset.dress1} className={style.prod1}/>
                            <img src={asset.dress1} className={style.prod1}/>
                            <img src={asset.dress1} className={style.prod1}/>
                        </div>
                            </div>
                        </div>
                </div>



                </div>
            </div>
        )
    }
}

export default Basket;