import React from 'react';

import { Link } from 'react-router-dom';

import { Lot } from '../../components';

import style from './style.css';

import { URLs } from '../../__data__/urls';

import asset from '../../asset';

class ShowcaseSkirts extends React.Component {
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
                </nav>
                <div className={style.div}>
                    <header className={style.header}>
                        <Link className={style.ref} to={URLs.basket.url}>
                            <img src={asset.icon3} className={style.box} />
                            <span className={style.text}>Корзина (0)</span>
                        </Link>
                    </header>
                    <div className={style.scan}>
                        <h2>Юбки</h2>
                        <span className={style.span}>
                            Прямой покрой, плиссе или клеш — пополните ваш гардероб новыми моделями юбок. Независимо от того, что вы предпочитаете — экстравагантный дизайн или классические фасоны — в нашей коллекции юбок есть модели на любой вкус.
                        </span>
                        <div className={style.show}>
                            <div className={style.showrow}>
                                <Lot
                                    img={asset.skirts_1}
                                    name={'Мини-юбка с контрастными швами'}
                                    price={'2 599 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.skirts_2}
                                    name={'Структурная юбка мини'}
                                    price={'2 599 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.skirts_3}
                                    name={'Структурная юбка мини'}
                                    price={'3 299 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.skirts_4}
                                    name={'Мини-юбка в клетку'}
                                    price={'2 299 руб.'}
                                ></Lot>
                            </div>
                            <div className={style.showrow}>
                                <Lot
                                    img={asset.skirts_5}
                                    name={'Юбка с разрезои'}
                                    price={'1 999 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.skirts_6}
                                    name={'Юбка-шорты с принтом'}
                                    price={'2 599 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.skirts_7}
                                    name={'Мини-юбка из искусственной кожи'}
                                    price={'2 299 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.skirts_8}
                                    name={'Юбка-шорты из рельефной ткани'}
                                    price={'2 999 руб.'}
                                ></Lot>
                            </div>
                            <div className={style.showrow}>
                                <Lot
                                    img={asset.skirts_9}
                                    name={'Юбка в клетку'}
                                    price={'2 599 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.skirts_10}
                                    name={'Мини-юбка в клетку'}
                                    price={'3 299 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.skirts_11}
                                    name={'Юбка в складку из искусственной кожи'}
                                    price={'2 999 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.skirts_12}
                                    name={'Короткая юбка с отделкой под кожу'}
                                    price={'2 299 руб.'}
                                ></Lot>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowcaseSkirts;