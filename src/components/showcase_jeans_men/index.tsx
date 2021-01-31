import React from 'react';

import { Link } from 'react-router-dom';

import { Lot } from '../../components';

import style from './style.css';

import { URLs } from '../../__data__/urls';

import asset from '../../asset';

class ShowcaseJeansM extends React.Component {
    render() {
        return (
            <div className={style.wrapper}>
                <nav className={style.nav}>
                    <Link className={style.name} to={URLs.home.url}>
                        FLEUR
                    </Link>

                    <Link
                        className={style.link}
                        to={URLs.showcase_jackets_men.url}
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
                        to={URLs.showcase_hoodies_men.url}
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
                    <Link className={style.link} to={URLs.showcase_dress.url}>
                        Женщины
                    </Link>
                </nav>
                <div className={style.div}>
                    <header className={style.header}>
                        <Link className={style.ref} to={URLs.basket.url}>
                            <img src={asset.icon3} className={style.box} />
                            <span className={style.text}>Корзина (0)</span>
                        </Link>
                    </header>
                    <div className={style.scan}>
                        <h2>Куртки</h2>
                        <span className={style.span}>
                            Верхняя одежда может быть стильной, и наши мужские
                            куртки и пальто — яркое тому подтверждение. В
                            прохладные дни вам будет уютно и комфортно в
                            актуальных кожаных куртках, бомберах и куртках из
                            денима из нашей актуальной коллекции. У нас вы также
                            найдете вельветовые куртки, с которыми любой образ
                            будет смотреться еще более современно и стильно.
                            Утепленные куртки, пальто и плащи — лучший выбор для
                            прохладных дней. У нас вы также найдете практичные
                            ветровки, анораки и скроенные по фигуре шерстяные
                            пальто различных расцветок. Независимо от того,
                            какой стиль вы предпочитаете, у нас вы найдете
                            новинки для любого сезона и на все случаи жизни.
                        </span>
                        <div className={style.show}>
                            <div className={style.showrow}>
                                <Lot
                                    img={asset.jackets_m_1}
                                    name={
                                        'Хлопковая дублёнка из искуственного меха'
                                    }
                                    price={'7 299 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.jackets_m_2}
                                    name={
                                        'Хлопковая дублёнка из искуственного меха'
                                    }
                                    price={'7 299 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.jackets_m_3}
                                    name={
                                        'Хлопковая дублёнка из искуственного меха'
                                    }
                                    price={'7 299 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.jackets_m_4}
                                    name={
                                        'Джинсовая куртка с подкладкой из искуственной овчины'
                                    }
                                    price={'5 999 руб.'}
                                ></Lot>
                            </div>
                            <div className={style.showrow}>
                                <Lot
                                    img={asset.jackets_m_5}
                                    name={'Дублёнка из искусственной замши'}
                                    price={'8 299 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.jackets_m_6}
                                    name={'Двусторонняя куртка'}
                                    price={'8 299 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.jackets_m_7}
                                    name={'Дублёнка из искусственной замши'}
                                    price={'8 299 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.jackets_m_8}
                                    name={'Двусторонняя куртка'}
                                    price={'8 299 руб.'}
                                ></Lot>
                            </div>
                            <div className={style.showrow}>
                                <Lot
                                    img={asset.jackets_m_9}
                                    name={'Базовая джинсовая куртка'}
                                    price={'3 299 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.jackets_m_10}
                                    name={'Двусторонняя куртка'}
                                    price={'9 299 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.jackets_m_11}
                                    name={'Куртка из искусственной кожи'}
                                    price={'7 299 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.jackets_m_12}
                                    name={'Джинсовая куртка с принтом'}
                                    price={'5 999 руб.'}
                                ></Lot>
                            </div>
                            <div className={style.showrow}>
                                <Lot
                                    img={asset.jackets_m_13}
                                    name={'Куртка из шерстяной ткани'}
                                    price={'8 299 руб.'}
                                ></Lot>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowcaseJeansM;
