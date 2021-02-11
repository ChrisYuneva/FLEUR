import React from 'react';

import { Link } from 'react-router-dom';

import { Lot } from '../../components';

import style from './style.css';

import { URLs } from '../../__data__/urls';

import asset from '../../asset';

import { useTranslation } from 'react-i18next';

function ShowcaseTshirtsW() {
    const { t, i18n } = useTranslation();
    return (
        <div className={style.wrapper}>
            <nav className={style.nav}>
                <Link className={style.name} to={URLs.home.url}>
                    {t('repos.name')}
                </Link>
                <Link className={style.link} to={URLs.showcase_dress.url}>
                    {t('repos.dress')}
                </Link>
                <Link
                    className={style.link}
                    to={URLs.showcase_jackets_women.url}
                >
                    {t('repos.jackets')}
                </Link>
                <Link
                    className={style.link}
                    to={URLs.showcase_shirts_women.url}
                >
                    {t('repos.shirts')}
                </Link>
                <Link
                    className={style.link}
                    to={URLs.showcase_hoodies_women.url}
                >
                    {t('repos.hoodies')}
                </Link>
                <Link
                    className={style.link}
                    to={URLs.showcase_tshirts_women.url}
                >
                    {t('repos.t-shirts')}
                </Link>
                <Link className={style.link} to={URLs.showcase_jeans_women.url}>
                    {t('repos.jeans')}
                </Link>
                <Link className={style.link} to={URLs.showcase_skirts.url}>
                    {t('repos.skirts')}
                </Link>
                <Link className={style.link} to={URLs.showcase_accessories.url}>
                    {t('repos.accessories')}
                </Link>
                <Link className={style.link} to={URLs.showcase_jackets_men.url}>
                    {t('repos.men')}
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
                        {t('repos.caption.t-shirts_w')}
                    </span>
                    <div className={style.show}>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.tshirt_w_1}
                                name={'Топ с подплечниками'}
                                price={t('repos.price.1199')}
                            ></Lot>
                            <Lot
                                img={asset.tshirt_w_2}
                                name={'Укороченная футболка'}
                                price={t('repos.price.1599')}
                            ></Lot>
                            <Lot
                                img={asset.tshirt_w_3}
                                name={'Футболка со сборками'}
                                price={t('repos.price.999')}
                            ></Lot>
                            <Lot
                                img={asset.tshirt_w_4}
                                name={'Футболка с принтом'}
                                price={t('repos.price.1799')}
                            ></Lot>
                        </div>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.tshirt_w_5}
                                name={'Укороченная футболка с принтом'}
                                price={t('repos.price.1799')}
                            ></Lot>
                            <Lot
                                img={asset.tshirt_w_6}
                                name={'Футболка ART & DECO POTTERY'}
                                price={t('repos.price.1799')}
                            ></Lot>
                            <Lot
                                img={asset.tshirt_w_7}
                                name={'Боди в рубчик'}
                                price={t('repos.price.1499')}
                            ></Lot>
                            <Lot
                                img={asset.tshirt_w_8}
                                name={'Жаккардовый топ'}
                                price={t('repos.price.1799')}
                            ></Lot>
                        </div>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.tshirt_w_9}
                                name={'Топ в рубчик со сборкой'}
                                price={t('repos.price.899')}
                            ></Lot>
                            <Lot
                                img={asset.tshirt_w_10}
                                name={'Боди с пуговицами'}
                                price={t('repos.price.1199')}
                            ></Lot>
                            <Lot
                                img={asset.tshirt_w_11}
                                name={'Базовая футболка из хлопка'}
                                price={t('repos.price.599')}
                            ></Lot>
                            <Lot
                                img={asset.tshirt_w_12}
                                name={"Футболка с принтом 'YALE'"}
                                price={t('repos.price.1799')}
                            ></Lot>
                        </div>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.tshirt_w_13}
                                name={'Укороченная футболка'}
                                price={t('repos.price.1199')}
                            ></Lot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowcaseTshirtsW;
