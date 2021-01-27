import React from 'react';

import { Link } from 'react-router-dom';

import { Lot } from '../../components';

import style from './style.css';

import { URLs } from '../../__data__/urls';

import asset from '../../asset';

class ShowcaseShirtsM extends React.Component {
    render() {
        return (
            <div className={style.wrapper}>
                <nav className={style.nav}>
                    <Link className={style.name} to={URLs.home.url}>
                        FLEUR
                    </Link>

                    <Link
                        className={style.link}
                        to={URLs.showcase_jackets_women.url}
                    >
                        Куртки
                    </Link>
                    <Link
                        className={style.link}
                        to={URLs.showcase_shirts_men.url}
                    >
                        Рубашки
                    </Link>
                    <Link
                        className={style.link}
                        to={URLs.showcase_hoodies_women.url}
                    >
                        Толстовки
                    </Link>
                    <Link
                        className={style.link}
                        to={URLs.showcase_tshirts_women.url}
                    >
                        Футболки
                    </Link>
                    <Link
                        className={style.link}
                        to={URLs.showcase_jeans_women.url}
                    >
                        Джинсы
                    </Link>

                    <Link
                        className={style.link}
                        to={URLs.showcase_accessories.url}
                    >
                        Аксессуары
                    </Link>
                </nav>
                <div className={style.div}>
                    <header className={style.header}>
                        <Link
                            className={style.ref}
                            to={URLs.basket.url}
                        >
                            <img src={asset.icon3} className={style.box} />
                            <span className={style.text}>Корзина (0)</span>
                        </Link>
                    </header>
                    <div className={style.scan}>
                        <h2>Рубашки</h2>
                        <span className={style.span}>
                            Качественные рубашки отличного покроя в разнообразных стилях. Элегантные и простые рубашки для рабочих будней, а для создания непринужденного образа в выходные дни — удобные повседневные модели.
                        </span>
                        <div className={style.show}>
                            <div className={style.showrow}>
                                <Lot
                                    img={asset.shirt_m_1}
                                    name={'Джинсовая рубашка с декоративными швами'}
                                    price={'2 299 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.shirt_m_2}
                                    name={'Джинсовая рубашка с декоративными швами'}
                                    price={'2 299 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.shirt_m_3}
                                    name={'Рубашка из ткани с рельефным узором в полоску'}
                                    price={'3 299 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.shirt_m_4}
                                    name={'Рубашка из ткани с рельефным узором в полоску'}
                                    price={'3 299 руб.'}
                                ></Lot>
                            </div>
                            <div className={style.showrow}>
                                <Lot
                                    img={asset.shirt_m_5}
                                    name={'Рубашка в клетку из жатой ткани'}
                                    price={'3 299 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.shirt_m_6}
                                    name={'Базовая джинсовая рубашка'}
                                    price={'2 299 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.shirt_m_7}
                                    name={'Базовая джинсовая рубашка'}
                                    price={'2 299 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.shirt_m_8}
                                    name={'Рубашка из немнущейся ткани с рельефным узором'}
                                    price={'2 299 руб.'}
                                ></Lot>
                            </div>
                            <div className={style.showrow}>
                                <Lot
                                    img={asset.shirt_m_9}
                                    name={'Рубашка с принтом "Здания"'}
                                    price={'3 299 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.shirt_m_10}
                                    name={'Рубашка свободного кроя из хлопка и льна'}
                                    price={'2 999 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.shirt_m_11}
                                    name={'Базовая рубашка плотно облегающего кроя'}
                                    price={'3 299 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.shirt_m_12}
                                    name={"Эластичная рубашка"}
                                    price={'2 999 руб.'}
                                ></Lot>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowcaseShirtsM;
