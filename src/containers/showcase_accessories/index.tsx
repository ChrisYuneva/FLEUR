import React from 'react';

import { Link } from 'react-router-dom';

import { Lot } from '../../components';

import style from './style.css';

import { URLs } from '../../__data__/urls';

import asset from '../../asset';

class ShowcaseAccessories extends React.Component {
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
                        <h2>Аксессуары</h2>
                        <span className={style.span}>
                            Обновите свой образ стильными аксуссуарами из нашей
                            коллекции.
                        </span>
                        <div className={style.show}>
                            <div className={style.showrow}>
                                <Lot
                                    img={asset.accessories_1}
                                    name={'Базовый шарф'}
                                    price={'2 299 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.accessories_2}
                                    name={'Шляпа из фетра'}
                                    price={'2 999 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.accessories_3}
                                    name={'Шарф в клетку'}
                                    price={'2 299 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.accessories_4}
                                    name={'Ожерелье из крупных звеньев'}
                                    price={'1 199 руб.'}
                                ></Lot>
                            </div>
                            <div className={style.showrow}>
                                <Lot
                                    img={asset.accessories_5}
                                    name={'Ремень из металлических звеньев'}
                                    price={'2 299 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.accessories_6}
                                    name={'Трикотажная шапка-бини'}
                                    price={'1 499 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.accessories_7}
                                    name={
                                        'Платок из мягкой ткани с геометрическим узором'
                                    }
                                    price={'2 299 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.accessories_8}
                                    name={'Ожерелье из крупных звеньев'}
                                    price={'1 499 руб.'}
                                ></Lot>
                            </div>
                            <div className={style.showrow}>
                                <Lot
                                    img={asset.accessories_9}
                                    name={'Берет из шерсти'}
                                    price={'1 799 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.accessories_10}
                                    name={'Панама из искусственной овчины'}
                                    price={'1 799 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.accessories_11}
                                    name={'Шапка в рубчик'}
                                    price={'1 499 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.accessories_12}
                                    name={
                                        'Жесткое ожерелье с натуральным жемчугом'
                                    }
                                    price={'1 799 руб.'}
                                ></Lot>
                            </div>
                            <div className={style.showrow}>
                                <Lot
                                    img={asset.accessories_13}
                                    name={'Ободок с узлои'}
                                    price={'899 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.accessories_14}
                                    name={'Трикотажный тюрбан'}
                                    price={'1 199 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.accessories_15}
                                    name={
                                        'Кожаное ожерелье с натуральным жемчугом'
                                    }
                                    price={'1 499 руб.'}
                                ></Lot>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowcaseAccessories;
