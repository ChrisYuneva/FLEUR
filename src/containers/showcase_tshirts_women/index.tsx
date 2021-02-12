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
                                name={t('repos.top_with_shoulder_pads')}
                                price={t('repos.price.1199')}
                            ></Lot>
                            <Lot
                                img={asset.tshirt_w_2}
                                name={t('repos.cropped_t-shirt')}
                                price={t('repos.price.1599')}
                            ></Lot>
                            <Lot
                                img={asset.tshirt_w_3}
                                name={t('repos.gathered_t-shirt')}
                                price={t('repos.price.999')}
                            ></Lot>
                            <Lot
                                img={asset.tshirt_w_4}
                                name={t('repos.t-shirt_with_print')}
                                price={t('repos.price.1799')}
                            ></Lot>
                        </div>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.tshirt_w_5}
                                name={t('repos.cropped_t-shirt_with_print')}
                                price={t('repos.price.1799')}
                            ></Lot>
                            <Lot
                                img={asset.tshirt_w_6}
                                name={t('repos.t-shirt_art_deco')}
                                price={t('repos.price.1799')}
                            ></Lot>
                            <Lot
                                img={asset.tshirt_w_7}
                                name={t('repos.ribbed_bodysuit')}
                                price={t('repos.price.1499')}
                            ></Lot>
                            <Lot
                                img={asset.tshirt_w_8}
                                name={t('repos.jacquard_top')}
                                price={t('repos.price.1799')}
                            ></Lot>
                        </div>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.tshirt_w_9}
                                name={t('repos.ribbed_top_with_gather')}
                                price={t('repos.price.899')}
                            ></Lot>
                            <Lot
                                img={asset.tshirt_w_10}
                                name={t('repos.bodysuit_with_buttons')}
                                price={t('repos.price.1199')}
                            ></Lot>
                            <Lot
                                img={asset.tshirt_w_11}
                                name={t('repos.basic_cotton_t-shirt')}
                                price={t('repos.price.599')}
                            ></Lot>
                            <Lot
                                img={asset.tshirt_w_12}
                                name={t('repos.t-shirt_with_yale_print')}
                                price={t('repos.price.1799')}
                            ></Lot>
                        </div>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.tshirt_w_13}
                                name={t('repos.cropped_t-shirt')}
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
