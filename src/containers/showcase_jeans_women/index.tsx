import React from 'react';

import { Link } from 'react-router-dom';

import { Lot } from '../../components';

import style from './style.css';

import { URLs } from '../../__data__/urls';

import asset from '../../asset';

import { useTranslation } from 'react-i18next';

function ShowcaseJeansW() {
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
                    <h2>{t('repos.jeans')}</h2>
                    <span className={style.span}>
                        {t('repos.caption.jeans_w')}
                    </span>
                    <div className={style.show}>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.jeans_w_1}
                                name={'Джинсы с широкими разрезами'}
                                price={t('repos.price.3299')}
                            ></Lot>
                            <Lot
                                img={asset.jeans_w_2}
                                name={'Джинсы скинни'}
                                price={t('repos.price.3299')}
                            ></Lot>
                            <Lot
                                img={asset.jeans_w_3}
                                name={'Джинсы с широкими разрезами'}
                                price={t('repos.price.3299')}
                            ></Lot>
                            <Lot
                                img={asset.jeans_w_4}
                                name={
                                    'Джинсы прямого кроя с высокой посадкой и разрезами'
                                }
                                price={t('repos.price.2999')}
                            ></Lot>
                        </div>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.jeans_w_5}
                                name={'Укороченные джинсы'}
                                price={t('repos.price.3299')}
                            ></Lot>
                            <Lot
                                img={asset.jeans_w_6}
                                name={
                                    'Прямые джинсы полной длины с высокой посадкой'
                                }
                                price={t('repos.price.2999')}
                            ></Lot>
                            <Lot
                                img={asset.jeans_w_7}
                                name={
                                    'Укороченные джинсы с высокой посадкой и широкими штанинами'
                                }
                                price={t('repos.price.2999')}
                            ></Lot>
                            <Lot
                                img={asset.jeans_w_8}
                                name={'Расклешенные джинсы'}
                                price={t('repos.price.2999')}
                            ></Lot>
                        </div>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.jeans_w_9}
                                name={'Джинсы MOM FIT'}
                                price={t('repos.price.2999')}
                            ></Lot>
                            <Lot
                                img={asset.jeans_w_10}
                                name={'Классические джинсы'}
                                price={t('repos.price.2999')}
                            ></Lot>
                            <Lot
                                img={asset.jeans_w_11}
                                name={'Джинсы с несколькими пуговицами'}
                                price={t('repos.price.3299')}
                            ></Lot>
                            <Lot
                                img={asset.jeans_w_12}
                                name={'Джинсы с высокой посадкой'}
                                price={t('repos.price.2999')}
                            ></Lot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowcaseJeansW;
