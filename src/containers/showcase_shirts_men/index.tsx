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
                                name={t(
                                    'repos.denim_shirt_with_decorative_seams'
                                )}
                                price={t('repos.price.2299')}
                            ></Lot>
                            <Lot
                                img={asset.shirt_m_2}
                                name={t(
                                    'repos.denim_shirt_with_decorative_seams'
                                )}
                                price={t('repos.price.2299')}
                            ></Lot>
                            <Lot
                                img={asset.shirt_m_3}
                                name={t('repos.striped_embossed_fabric_shirt')}
                                price={t('repos.price.3299')}
                            ></Lot>
                            <Lot
                                img={asset.shirt_m_4}
                                name={t('repos.striped_embossed_fabric_shirt')}
                                price={t('repos.price.3299')}
                            ></Lot>
                        </div>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.shirt_m_5}
                                name={t('repos.crinkled_check_shirt')}
                                price={t('repos.price.3299')}
                            ></Lot>
                            <Lot
                                img={asset.shirt_m_6}
                                name={t('repos.basic_denim_shirt')}
                                price={t('repos.price.2299')}
                            ></Lot>
                            <Lot
                                img={asset.shirt_m_7}
                                name={t('repos.basic_denim_shirt')}
                                price={t('repos.price.2299')}
                            ></Lot>
                            <Lot
                                img={asset.shirt_m_8}
                                name={t(
                                    'repos.textured_crease_resistant_shirt'
                                )}
                                price={t('repos.price.2299')}
                            ></Lot>
                        </div>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.shirt_m_9}
                                name={t('repos.buildings_print_shirt')}
                                price={t('repos.price.3299')}
                            ></Lot>
                            <Lot
                                img={asset.shirt_m_10}
                                name={t(
                                    'repos.relaxed_fit_shirt_in_cotton_linen'
                                )}
                                price={t('repos.price.2999')}
                            ></Lot>
                            <Lot
                                img={asset.shirt_m_11}
                                name={t('repos.basic_slim_fit_shirt')}
                                price={t('repos.price.3299')}
                            ></Lot>
                            <Lot
                                img={asset.shirt_m_12}
                                name={t('repos.elastic_shirt')}
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
