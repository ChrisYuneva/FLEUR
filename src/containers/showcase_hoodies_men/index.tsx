import React from 'react';

import { Link } from 'react-router-dom';

import { Lot } from '../../components';

import style from './style.css';

import { URLs } from '../../__data__/urls';

import asset from '../../asset';

class ShowcaseHoodiesM extends React.Component {
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
                        to={URLs.showcase_tshirts_men.url}
                    >
                        Футболки
                    </Link>
                    <Link
                        className={style.link}
                        to={URLs.showcase_jeans_men.url}
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
                        <h2>Толстовки</h2>
                        <span className={style.span}>
                            Чтобы не замерзнуть в холодные дни, дополните ваш повседневный гардероб мужскими худи и толстовками из нашей коллекции. В будние дни сделайте свой образ теплее с помощью худи нейтрального цвета на застежке-молнии, а на выходных отдайте предпочтение стильной толстовке с интересным принтом. Чтобы образ смотрелся непринужденно, но при этом стильно, наденьте серое или черное худи вместе с вашими любимыми джинсами и кроссовками. В нашей коллекции худи и толстовок вы непременно найдете модели, которые стильно дополнят ваш образ и согреют в холодную погоду.
                        </span>
                        <div className={style.show}>
                            <div className={style.showrow}>
                                <Lot
                                    img={asset.hoodies_m_1}
                                    name={
                                        'Толстовка с принтом'
                                    }
                                    price={'4 499 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.hoodies_m_2}
                                    name={
                                        'Флисовая толстовка с принтом "ЛАВА"'
                                    }
                                    price={'3 999 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.hoodies_m_3}
                                    name={
                                        'Толстовка с принтом'
                                    }
                                    price={'3 299 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.hoodies_m_4}
                                    name={
                                        'Худи с надписью'
                                    }
                                    price={'3 999 руб.'}
                                ></Lot>
                            </div>
                            <div className={style.showrow}>
                                <Lot
                                    img={asset.hoodies_m_5}
                                    name={'Базовая толстовка с капюшоном'}
                                    price={'2 999 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.hoodies_m_6}
                                    name={'Толстовка с принтом "МИККИ МАУС"'}
                                    price={'3 999 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.hoodies_m_7}
                                    name={'Толстовкас с жаккардовой деталью'}
                                    price={'7 299 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.hoodies_m_8}
                                    name={'Толстовка с вышитой нашивкой'}
                                    price={'3 299 руб.'}
                                ></Lot>
                            </div>
                            <div className={style.showrow}>
                                <Lot
                                    img={asset.hoodies_m_9}
                                    name={'Толстовка с контрастной нашивкой'}
                                    price={'5 999 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.hoodies_m_10}
                                    name={'Базовая толстовка с капюшоном'}
                                    price={'2 999 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.hoodies_m_11}
                                    name={'Толстовка с принтом "ГРАФФИТИ"'}
                                    price={'3 999 руб.'}
                                ></Lot>
                                <Lot
                                    img={asset.hoodies_m_12}
                                    name={'Базовая толстовка с карманом'}
                                    price={'2 599 руб.'}
                                ></Lot>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowcaseHoodiesM;
