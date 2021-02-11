import React from 'react';

import { Link } from 'react-router-dom';

import { Lot } from '../../components';

import style from './style.css';

import { URLs } from '../../__data__/urls';

import asset from '../../asset';

import { useTranslation } from 'react-i18next';

function ShowcaseShirtsM() {
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
                    <h2>{t('repos.shirts')}</h2>
                    <span className={style.span}>
                        {t('repos.caption.shirts_m')}
                    </span>
                    <div className={style.show}>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.shirt_m_1}
                                name={'Джинсовая рубашка с декоративными швами'}
                                price={t('repos.price.2299')}
                            ></Lot>
                            <Lot
                                img={asset.shirt_m_2}
                                name={'Джинсовая рубашка с декоративными швами'}
                                price={t('repos.price.2299')}
                            ></Lot>
                            <Lot
                                img={asset.shirt_m_3}
                                name={
                                    'Рубашка из ткани с рельефным узором в полоску'
                                }
                                price={t('repos.price.3299')}
                            ></Lot>
                            <Lot
                                img={asset.shirt_m_4}
                                name={
                                    'Рубашка из ткани с рельефным узором в полоску'
                                }
                                price={t('repos.price.3299')}
                            ></Lot>
                        </div>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.shirt_m_5}
                                name={'Рубашка в клетку из жатой ткани'}
                                price={t('repos.price.3299')}
                            ></Lot>
                            <Lot
                                img={asset.shirt_m_6}
                                name={'Базовая джинсовая рубашка'}
                                price={t('repos.price.2299')}
                            ></Lot>
                            <Lot
                                img={asset.shirt_m_7}
                                name={'Базовая джинсовая рубашка'}
                                price={t('repos.price.2299')}
                            ></Lot>
                            <Lot
                                img={asset.shirt_m_8}
                                name={
                                    'Рубашка из немнущейся ткани с рельефным узором'
                                }
                                price={t('repos.price.2299')}
                            ></Lot>
                        </div>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.shirt_m_9}
                                name={'Рубашка с принтом "Здания"'}
                                price={t('repos.price.3299')}
                            ></Lot>
                            <Lot
                                img={asset.shirt_m_10}
                                name={
                                    'Рубашка свободного кроя из хлопка и льна'
                                }
                                price={t('repos.price.2999')}
                            ></Lot>
                            <Lot
                                img={asset.shirt_m_11}
                                name={'Базовая рубашка плотно облегающего кроя'}
                                price={t('repos.price.3299')}
                            ></Lot>
                            <Lot
                                img={asset.shirt_m_12}
                                name={'Эластичная рубашка'}
                                price={t('repos.price.2999')}
                            ></Lot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowcaseShirtsM;
