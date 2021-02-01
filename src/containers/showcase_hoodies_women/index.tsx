import React from 'react';

import { Link } from 'react-router-dom';

import { Lot } from '../../components';

import style from './style.css';

import { URLs } from '../../__data__/urls';

import asset from '../../asset';

import { useTranslation } from 'react-i18next';

function ShowcaseHoodiesW() {
    const { t, i18n } = useTranslation();
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
                <Link className={style.link} to={URLs.showcase_jeans_women.url}>
                    Джинсы
                </Link>
                <Link className={style.link} to={URLs.showcase_skirts.url}>
                    Юбки
                </Link>
                <Link className={style.link} to={URLs.showcase_accessories.url}>
                    Аксессуары
                </Link>
                <Link className={style.link} to={URLs.showcase_jackets_men.url}>
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
                    <h2>Толстовки</h2>
                    <span className={style.span}>
                        Стильная и удобная толстовка или худи — это идеальное
                        решение в те дни, когда вы не знаете, что надеть. Наши
                        модели всегда отличаются актуальными принтами и
                        фасонами, поэтому делают любой образ стильным и
                        непринужденным.
                    </span>
                    <div className={style.show}>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.hoodies_w_1}
                                name={'Укороченное худи'}
                                price={'2 999 руб.'}
                            ></Lot>
                            <Lot
                                img={asset.hoodies_w_2}
                                name={
                                    'Толстовка оверсайз с застежкой на молнии'
                                }
                                price={'2 999 руб.'}
                            ></Lot>
                            <Lot
                                img={asset.hoodies_w_3}
                                name={'Укороченное худи'}
                                price={'1 799 руб.'}
                            ></Lot>
                            <Lot
                                img={asset.hoodies_w_4}
                                name={'Худи в стиле преппи'}
                                price={'1 799 руб.'}
                            ></Lot>
                        </div>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.hoodies_w_5}
                                name={'Толстовка оверсайз с принтом'}
                                price={'3 299 руб.'}
                            ></Lot>
                            <Lot
                                img={asset.hoodies_w_6}
                                name={
                                    'Двусторонняя тостовка с принтом "МИККИ МАУС"'
                                }
                                price={'3 299 руб.'}
                            ></Lot>
                            <Lot
                                img={asset.hoodies_w_7}
                                name={'Трикотажная толстовка с каплюшоном'}
                                price={'2 999 руб.'}
                            ></Lot>
                            <Lot
                                img={asset.hoodies_w_8}
                                name={'Укороченная толстовка с молнией'}
                                price={'2 599 руб.'}
                            ></Lot>
                        </div>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.hoodies_w_9}
                                name={'Толстовка с объёмными рукавами'}
                                price={'1 799 руб.'}
                            ></Lot>
                            <Lot
                                img={asset.hoodies_w_10}
                                name={'Укороченное трикотажное худи'}
                                price={'2 599 руб.'}
                            ></Lot>
                            <Lot
                                img={asset.hoodies_w_11}
                                name={'Жаккардовая толстовка в полоску'}
                                price={'2 299 руб.'}
                            ></Lot>
                            <Lot
                                img={asset.hoodies_w_12}
                                name={'Толстовка с эффектом потертости'}
                                price={'2 299 руб.'}
                            ></Lot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowcaseHoodiesW;
