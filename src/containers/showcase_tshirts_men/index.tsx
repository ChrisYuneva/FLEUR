import React from 'react';

import { Link } from 'react-router-dom';

import { Lot } from '../../components';

import style from './style.css';

import { URLs } from '../../__data__/urls';

import asset from '../../asset';

import { useTranslation } from 'react-i18next';

function ShowcaseTshirtsM() {
    const { t, i18n } = useTranslation();
    return (
        <div className={style.wrapper}>
            <nav className={style.nav}>
                <Link className={style.name} to={URLs.home.url}>
                    {t('repos.name')}
                </Link>

                <Link className={style.link} to={URLs.showcase_jackets_men.url}>
                    {t('repos.jackets')}
                </Link>
                <Link className={style.link} to={URLs.showcase_shirts_men.url}>
                    {t('repos.shirts')}
                </Link>
                <Link className={style.link} to={URLs.showcase_hoodies_men.url}>
                    {t('repos.hoodies')}
                </Link>
                <Link className={style.link} to={URLs.showcase_tshirts_men.url}>
                    {t('repos.t-shirts')}
                </Link>
                <Link className={style.link} to={URLs.showcase_jeans_men.url}>
                    {t('repos.jeans')}
                </Link>
                <Link className={style.link} to={URLs.showcase_dress.url}>
                    {t('repos.women')}
                </Link>
            </nav>
            <div className={style.div}>
                <header className={style.header}>
                    <Link className={style.ref} to={URLs.basket.url}>
                        <img src={asset.icon3} className={style.box} />
                        <a className={style.text}>{t('repos.basket')} (0)</a>
                    </Link>
                </header>
                <div className={style.scan}>
                    <h2>{t('repos.t-shirts')}</h2>
                    <span className={style.span}>
                        {t('repos.caption.t-shirts_m')}
                    </span>
                    <div className={style.show}>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.tshirt_m_1}
                                name={'Футболка с контрастным принтом'}
                                price={'2 299 руб.'}
                            ></Lot>
                            <Lot
                                img={asset.tshirt_m_2}
                                name={'Футболка из рельевной ткани в полоску'}
                                price={'1 799 руб.'}
                            ></Lot>
                            <Lot
                                img={asset.tshirt_m_3}
                                name={'Базовая футболка облегающего кроя'}
                                price={'1 199 руб.'}
                            ></Lot>
                            <Lot
                                img={asset.tshirt_m_4}
                                name={'Футболка с надписью'}
                                price={'1 999 руб.'}
                            ></Lot>
                        </div>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.tshirt_m_5}
                                name={
                                    'Футболка из ткани с эффектом потертости и карманом'
                                }
                                price={'1 499 руб.'}
                            ></Lot>
                            <Lot
                                img={asset.tshirt_m_6}
                                name={'Футболка с принтом'}
                                price={'2 299 руб.'}
                            ></Lot>
                            <Lot
                                img={asset.tshirt_m_7}
                                name={'Поло из ткани с эффектным узором'}
                                price={'1 799 руб.'}
                            ></Lot>
                            <Lot
                                img={asset.tshirt_m_8}
                                name={'Футболка с принтом "МИККИ МАУС"'}
                                price={'2 299 руб.'}
                            ></Lot>
                        </div>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.tshirt_m_9}
                                name={
                                    'Футболка из ткани с эффектом потертости и карманом'
                                }
                                price={'1 499 руб.'}
                            ></Lot>
                            <Lot
                                img={asset.tshirt_m_10}
                                name={'Футболка с принтом'}
                                price={'2 299 руб.'}
                            ></Lot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowcaseTshirtsM;
