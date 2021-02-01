import React from 'react';

import { Link } from 'react-router-dom';

import { Lot } from '../../components';

import style from './style.css';

import { URLs } from '../../__data__/urls';

import asset from '../../asset';

class ShowcaseTshirtsW extends React.Component {
    render() {
        return (
            <div className={style.wrapper}>
                <nav className={style.nav}>
                    <Link className={style.name} to={URLs.home.url}>
                        FLEUR
                    </Link>

                    <Link className={style.link} to={URLs.showcase_dress.url}>
                        Платья
                    </Link>
                    <Link
                        className={style.link}
                        to={URLs.showcase_jackets_women.url}
                    >
                        Куртки
                    </Link>
                    <Link
                        className={style.link}
                        to={URLs.showcase_shirts_women.url}
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
                    <Link className={style.link} to={URLs.showcase_skirts.url}>
                        Юбки
                    </Link>
                    <Link
                        className={style.link}
                        to={URLs.showcase_accessories.url}
                    >
                        Аксессуары
                    </Link>
                    <Link
                        className={style.link}
                        to={URLs.showcase_jackets_men.url}
                    >
                        Мужчины
                    </Link>
                </nav>
                <div className={style.div}>
                    <header className={style.header}>
                        <Link className={style.ref} to={URLs.basket.url}>
                            <img src={asset.icon3} className={style.box} />
                            <a className={style.text}>Корзина (0)</a>
                        </Link>
                    </header>
                    <div className={style.scan}>
                        <h2>Футболки</h2>
                        <span className={style.span}>
                            Хорошо скроенные классические футболки — это
                            универсальный предмет гардероба, который незаменим
                            летом, а также может использоваться для создания
                            образов в любое другое время года. Предлагаем
                            женские футболки всевозможных расцветок и фасонов —
                            выполненные в базовом черном и белом цветах или
                            ярких оттенках.
                        </span>
                        <div className={style.show}>
                            <div className={style.showrow}>
                                <Lot
                                    img={asset.tshirt_w_1}
                                    name={'Топ с подплечниками'}
                                    price={'1 199 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.tshirt_w_2}
                                    name={'Укороченная футболка'}
                                    price={'1 599 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.tshirt_w_3}
                                    name={'Футболка со сборками'}
                                    price={'999 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.tshirt_w_4}
                                    name={'Футболка с принтом'}
                                    price={'1 799 руб.'}
                                ></Lot>
                            </div>
                            <div className={style.showrow}>
                                <Lot
                                    img={asset.tshirt_w_5}
                                    name={'Укороченная футболка с принтом'}
                                    price={'1 799 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.tshirt_w_6}
                                    name={'Футболка ART & DECO POTTERY'}
                                    price={'1 799 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.tshirt_w_7}
                                    name={'Боди в рубчик'}
                                    price={'1 499 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.tshirt_w_8}
                                    name={'Жаккардовый топ'}
                                    price={'1 799 руб.'}
                                ></Lot>
                            </div>
                            <div className={style.showrow}>
                                <Lot
                                    img={asset.tshirt_w_9}
                                    name={'Топ в рубчик со сборкой'}
                                    price={'899 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.tshirt_w_10}
                                    name={'Боди с пуговицами'}
                                    price={'1 199 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.tshirt_w_11}
                                    name={'Базовая футболка из хлопка'}
                                    price={'599 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.tshirt_w_12}
                                    name={"Футболка с принтом 'YALE'"}
                                    price={'1 799 руб.'}
                                ></Lot>
                            </div>
                            <div className={style.showrow}>
                                <Lot
                                    img={asset.tshirt_w_13}
                                    name={'Укороченная футболка'}
                                    price={'1 199 руб.'}
                                ></Lot>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowcaseTshirtsW;
