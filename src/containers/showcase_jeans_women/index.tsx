import React from 'react';

import { Link } from 'react-router-dom';

import { Lot } from '../../components';

import style from './style.css';

import { URLs } from '../../__data__/urls';

import asset from '../../asset';

class ShowcaseJeansW extends React.Component {
    render() {
        return (
            <div className={style.wrapper}>
                <nav className={style.nav}>
                    <Link className={style.name} to={URLs.home.url}>
                        FLEUR
                    </Link>

                    {/* eslint-disable-next-line react/jsx-no-undef */}
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
                            <span className={style.text}>Корзина (0)</span>
                        </Link>
                    </header>
                    <div className={style.scan}>
                        <h2>Джинсы</h2>
                        <span className={style.span}>
                            У нас есть женские джинсы любого покроя и стиля — от изделий с низкой талией до облегающих и расклешенных моделей. Здесь вы точно найдете подходящие джинсы!
                        </span>
                        <div className={style.show}>
                            <div className={style.showrow}>
                                <Lot
                                    img={asset.jeans_w_1}
                                    name={'Джинсы с широкими разрезами'}
                                    price={'3 299 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.jeans_w_2}
                                    name={'Джинсы скинни'}
                                    price={'3 299 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.jeans_w_3}
                                    name={'Джинсы с широкими разрезами'}
                                    price={'3 299 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.jeans_w_4}
                                    name={'Джинсы прямого кроя с высокой посадкой и разрезами'}
                                    price={'2 999 руб.'}
                                ></Lot>
                            </div>
                            <div className={style.showrow}>
                                <Lot
                                    img={asset.jeans_w_5}
                                    name={'Укороченные джинсы'}
                                    price={'3 299 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.jeans_w_6}
                                    name={'Прямые джинсы полной длины с высокой посадкой'}
                                    price={'2 999 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.jeans_w_7}
                                    name={'Укороченные джинсы с высокой посадкой и широкими штанинами'}
                                    price={'2 999 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.jeans_w_8}
                                    name={'Расклешенные джинсы'}
                                    price={'2 999 руб.'}
                                ></Lot>
                            </div>
                            <div className={style.showrow}>
                                <Lot
                                    img={asset.jeans_w_9}
                                    name={'Джинсы MOM FIT'}
                                    price={'2 999 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.jeans_w_10}
                                    name={'Классические джинсы'}
                                    price={'2 999 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.jeans_w_11}
                                    name={'Джинсы с несколькими пуговицами'}
                                    price={'3 299 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.jeans_w_12}
                                    name={'Джинсы с высокой посадкой'}
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

export default ShowcaseJeansW;
