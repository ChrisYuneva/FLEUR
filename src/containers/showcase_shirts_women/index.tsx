import React from 'react';

import { Link } from 'react-router-dom';

import { Lot } from '../../components';

import style from './style.css';

import { URLs } from '../../__data__/urls';

import asset from '../../asset';

import { useTranslation } from 'react-i18next';

function ShowcaseShirtsW() {
    const { t, i18n } = useTranslation();
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
                    <h2>Рубашки</h2>
                    <span className={style.span}>
                        Составляйте стильные ансамбли с белоснежными рубашками,
                        прозрачными блузками и легкими туниками. Чтобы создать
                        всегда актуальный и безупречный образ, который легко
                        преобразить, сочетайте любимые изделия с подходящими
                        аксессуарами.
                    </span>
                    <div className={style.show}>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.shirt_w_1}
                                name={'Рубашка из поплина в полоску'}
                                price={'3 299 руб.'}
                            ></Lot>
                            <Lot
                                img={asset.shirt_w_2}
                                name={'Рубашка с анималистичным принтом'}
                                price={'2 999 руб.'}
                            ></Lot>
                            <Lot
                                img={asset.shirt_w_3}
                                name={'Рубашка из струящейся ткани с карманами'}
                                price={'3 299 руб.'}
                            ></Lot>
                            <Lot
                                img={asset.shirt_w_4}
                                name={'Рубашка из фланели в клетку'}
                                price={'2 999 руб.'}
                            ></Lot>
                        </div>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.shirt_w_5}
                                name={'Рубашка с карманом из сатина'}
                                price={'2 299 руб.'}
                            ></Lot>
                            <Lot
                                img={asset.shirt_w_6}
                                name={'Рубашка из поплина'}
                                price={'2 299 руб.'}
                            ></Lot>
                            <Lot
                                img={asset.shirt_w_7}
                                name={'Атласная рубашка оверсайз'}
                                price={'2 999 руб.'}
                            ></Lot>
                            <Lot
                                img={asset.shirt_w_8}
                                name={'Рубашка в полоску с блестящей нитью'}
                                price={'2 299 руб.'}
                            ></Lot>
                        </div>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.shirt_w_9}
                                name={'Трикотажная рубашка с разрывами'}
                                price={'2 199 руб.'}
                            ></Lot>
                            <Lot
                                img={asset.shirt_w_10}
                                name={
                                    'Рубашка оверсайз с анималистичным принтом'
                                }
                                price={'2 599 руб.'}
                            ></Lot>
                            <Lot
                                img={asset.shirt_w_11}
                                name={'Рубашка из сатина'}
                                price={'2 599 руб.'}
                            ></Lot>
                            <Lot
                                img={asset.shirt_w_12}
                                name={'Рубашка с карманом'}
                                price={'3 299 руб.'}
                            ></Lot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowcaseShirtsW;
