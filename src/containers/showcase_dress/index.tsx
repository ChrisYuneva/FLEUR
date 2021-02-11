import React from 'react';

import { Link } from 'react-router-dom';

import { Lot } from '../../components';

import style from './style.css';

import { URLs } from '../../__data__/urls';

import asset from '../../asset';

import { useTranslation } from 'react-i18next';

function ShowcaseDress() {
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
                    <h2>{t('repos.dress')}</h2>
                    <span className={style.span}>
                        {t('repos.caption.dress')}
                    </span>
                    <div className={style.show}>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.dress1}
                                name={'Платье с разрезом'}
                                price={t('repos.price.2599')}
                            ></Lot>
                            <Lot
                                img={asset.dress2}
                                name={'Комбинированное платье'}
                                price={t('repos.price.2999')}
                            ></Lot>
                            <Lot
                                img={asset.dress3}
                                name={'Платье мини с блёстками'}
                                price={t('repos.price.3299')}
                            ></Lot>
                            <Lot
                                img={asset.dress4}
                                name={'Длинное трикотажное платье'}
                                price={t('repos.price.2999')}
                            ></Lot>
                        </div>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.dress5}
                                name={'Сатиновое платье'}
                                price={t('repos.price.2599')}
                            ></Lot>
                            <Lot
                                img={asset.dress6}
                                name={'Комбинированное платье'}
                                price={t('repos.price.2999')}
                            ></Lot>
                            <Lot
                                img={asset.dress7}
                                name={'Трикотажное платье'}
                                price={t('repos.price.3299')}
                            ></Lot>
                            <Lot
                                img={asset.dress8}
                                name={'Платье с принтом'}
                                price={t('repos.price.4299')}
                            ></Lot>
                        </div>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.dress9}
                                name={'Платье с деталями'}
                                price={t('repos.price.2999')}
                            ></Lot>
                            <Lot
                                img={asset.dress10}
                                name={'Мини-платье из бархата'}
                                price={t('repos.price.3299')}
                            ></Lot>
                            <Lot
                                img={asset.dress11}
                                name={'Короткое платье'}
                                price={t('repos.price.2999')}
                            ></Lot>
                            <Lot
                                img={asset.dress12}
                                name={'Платье с пайетками'}
                                price={t('repos.price.6999')}
                            ></Lot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowcaseDress;
