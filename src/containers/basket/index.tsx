import React from 'react';
import { Link } from 'react-router-dom';

import style from './style.css';

import { URLs } from '../../__data__/urls';

import asset from '../../asset';

import { Lot } from '../../components';

class Basket extends React.Component {
    render() {
        return (
            <div className={style.wrapper}>
                <header className={style.header}>
                    <Link className={style.name} to={URLs.home.url}>
                        FLEUR
                    </Link>
                    {/*<Link className={style.ref} to={URLs.basket.url}>*/}
                    {/*    <img src={asset.icon} className={style.box} />*/}
                    {/*    <span className={style.text}>Корзина (0)</span>*/}
                    {/*</Link>*/}
                </header>
                <div className={style.scan}>
                    <h2>Корзина</h2>
                    <span>Количество товаров: </span>
                </div>
                <div className={style.show}>
                    <div className={style.showrow}>
                        <Lot img={asset.dress3} name={'Платье мини с блёстками'} price={'3 299 руб.'}>
                            <a className={style.del}>Удалить</a>
                        </Lot>
                        <Lot img={asset.dress3} name={'Платье мини с блёстками'} price={'3 299 руб.'}></Lot>
                        <Lot img={asset.dress3} name={'Платье мини с блёстками'} price={'3 299 руб.'}></Lot>
                        <Lot img={asset.dress3} name={'Платье мини с блёстками'} price={'3 299 руб.'}></Lot>
                    </div>
                    <div className={style.showrow}>
                        <Lot img={asset.dress3} name={'Платье мини с блёстками'} price={'3 299 руб.'}></Lot>
                        <Lot img={asset.dress3} name={'Платье мини с блёстками'} price={'3 299 руб.'}></Lot>
                        <Lot img={asset.dress3} name={'Платье мини с блёстками'} price={'3 299 руб.'}></Lot>
                        <Lot img={asset.dress3} name={'Платье мини с блёстками'} price={'3 299 руб.'}></Lot>
                    </div>
                    <div className={style.showrow}>
                        <Lot img={asset.dress3} name={'Платье мини с блёстками'} price={'3 299 руб.'}></Lot>
                        <Lot img={asset.dress3} name={'Платье мини с блёстками'} price={'3 299 руб.'}></Lot>
                        <Lot img={asset.dress3} name={'Платье мини с блёстками'} price={'3 299 руб.'}></Lot>
                        <Lot img={asset.dress3} name={'Платье мини с блёстками'} price={'3 299 руб.'}></Lot>
                    </div>
                </div>
            </div>
        );
    }
}

export default Basket;
