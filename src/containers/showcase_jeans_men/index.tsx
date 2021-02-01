import React from 'react';
import { Link } from 'react-router-dom';
import { Lot } from '../../components';
import style from './style.css';
import { URLs } from '../../__data__/urls';
import asset from '../../asset';
import { useTranslation } from 'react-i18next';

function ShowcaseJeansM() {
    const { t, i18n } = useTranslation();
    return (
        <div className={style.wrapper}>
            <nav className={style.nav}>
                <Link className={style.name} to={URLs.home.url}>
                    FLEUR
                </Link>

                <Link className={style.link} to={URLs.showcase_jackets_men.url}>
                    Куртки
                </Link>
                <Link className={style.link} to={URLs.showcase_shirts_men.url}>
                    Рубашки
                </Link>
                <Link className={style.link} to={URLs.showcase_hoodies_men.url}>
                    Толстовки
                </Link>
                <Link className={style.link} to={URLs.showcase_tshirts_men.url}>
                    Футболки
                </Link>
                <Link className={style.link} to={URLs.showcase_jeans_men.url}>
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
                        <a className={style.text}>Корзина (0)</a>
                    </Link>
                </header>
                <div className={style.scan}>
                    <h2>Джинсы</h2>
                    <span className={style.span}>
                        Джинсы — это один из базовых предметов гардероба. В
                        нашей обширной коллекции мужских джинсов вы обязательно
                        найдете модель, которая идеально подойдет для вашего
                        стиля и типа фигуры. Наши джинсы представлены во
                        всевозможных фасонах — от классических прямых,
                        выдержанных в синих оттенках, до узких черных.
                    </span>
                    <div className={style.show}>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.jeans_m_1}
                                name={'Укороченные джинсы "Чинос"'}
                                price={'3 299 руб.'}
                            ></Lot>
                            <Lot
                                img={asset.jeans_m_2}
                                name={'Базовые джинсы скинни'}
                                price={'2 999 руб.'}
                            ></Lot>
                            <Lot
                                img={asset.jeans_m_3}
                                name={'Базовые джинсы'}
                                price={'1 499 руб.'}
                            ></Lot>
                            <Lot
                                img={asset.jeans_m_4}
                                name={'Базовые джинсы скинни'}
                                price={'2 999 руб.'}
                            ></Lot>
                        </div>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.jeans_m_5}
                                name={'Джинсы свободного кроя'}
                                price={'3 299 руб.'}
                            ></Lot>
                            <Lot
                                img={asset.jeans_m_6}
                                name={'Черные базовые джинсы'}
                                price={'2 299 руб.'}
                            ></Lot>
                            <Lot
                                img={asset.jeans_m_7}
                                name={'Базовые джинсы'}
                                price={'2 299 руб.'}
                            ></Lot>
                            <Lot
                                img={asset.jeans_m_8}
                                name={'Джинсы облегающего кроя в стиле 90-х'}
                                price={'2 999 руб.'}
                            ></Lot>
                        </div>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.jeans_m_9}
                                name={'Базовые джинсы скинни'}
                                price={'2 999 руб.'}
                            ></Lot>
                            <Lot
                                img={asset.jeans_m_10}
                                name={'Джинсы свободного кроя'}
                                price={'3 299 руб.'}
                            ></Lot>
                            <Lot
                                img={asset.jeans_m_11}
                                name={'Базовые зауженные джинсы'}
                                price={'3 299 руб.'}
                            ></Lot>
                            <Lot
                                img={asset.jeans_m_12}
                                name={'Базовые джинсы с эффектом брызг краски'}
                                price={'4 499 руб.'}
                            ></Lot>
                        </div>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.jeans_m_13}
                                name={'Зауженные джинсы с разрывами'}
                                price={'4 499 руб.'}
                            ></Lot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowcaseJeansM;
