import React from 'react';

import { Link } from 'react-router-dom';

import { Lot } from '../../components';

import style from './style.css';

import { URLs } from '../../__data__/urls';

import asset from '../../asset';

import { useTranslation } from 'react-i18next';

function ShowcaseHoodiesW() {
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
                    <h2>{t('repos.hoodies')}</h2>
                    <span className={style.span}>
                        {t('repos.caption.hoodies_w')}
                    </span>
                    <div className={style.show}>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.hoodies_w_1}
                                name={t('repos.cropped_hoodie')}
                                price={t('repos.price.2999')}
                            ></Lot>
                            <Lot
                                img={asset.hoodies_w_2}
                                name={t(
                                    'repos.oversized_sweatshirt_with_zip_fastening'
                                )}
                                price={t('repos.price.2999')}
                            ></Lot>
                            <Lot
                                img={asset.hoodies_w_3}
                                name={t('repos.cropped_hoodie')}
                                price={t('repos.price.1799')}
                            ></Lot>
                            <Lot
                                img={asset.hoodies_w_4}
                                name={t('repos.preppy_hoodie')}
                                price={t('repos.price.1799')}
                            ></Lot>
                        </div>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.hoodies_w_5}
                                name={t(
                                    'repos.oversized_sweatshirt_with_print'
                                )}
                                price={t('repos.price.1799')}
                            ></Lot>
                            <Lot
                                img={asset.hoodies_w_6}
                                name={t(
                                    'repos.reversible_toast_with_mickey_print'
                                )}
                                price={t('repos.price.3299')}
                            ></Lot>
                            <Lot
                                img={asset.hoodies_w_7}
                                name={t('repos.sweatshirt_with_hood')}
                                price={t('repos.price.2999')}
                            ></Lot>
                            <Lot
                                img={asset.hoodies_w_8}
                                name={t('repos.cropped_sweatshirt_with_zip')}
                                price={t('repos.price.2599')}
                            ></Lot>
                        </div>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.hoodies_w_9}
                                name={t('repos.sweatshirt_with_puff_sleeves')}
                                price={t('repos.price.1799')}
                            ></Lot>
                            <Lot
                                img={asset.hoodies_w_10}
                                name={t('repos.cropped_jersey_hoodie')}
                                price={t('repos.price.2599')}
                            ></Lot>
                            <Lot
                                img={asset.hoodies_w_11}
                                name={t('repos.striped_jacquard_sweatshirt')}
                                price={t('repos.price.2299')}
                            ></Lot>
                            <Lot
                                img={asset.hoodies_w_12}
                                name={t('repos.faded_sweatshirt')}
                                price={t('repos.price.2299')}
                            ></Lot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowcaseHoodiesW;
