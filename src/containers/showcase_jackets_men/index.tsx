import React from 'react';

import { Link } from 'react-router-dom';

import { Lot } from '../../components';

import style from './style.css';

import { URLs } from '../../__data__/urls';

import asset from '../../asset';

import { useTranslation } from 'react-i18next';

function ShowcaseJacketsM() {
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
                    <h2>{t('repos.jackets')}</h2>
                    <span className={style.span}>
                        {t('repos.caption.jackets_m')}
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

export default ShowcaseJacketsM;
