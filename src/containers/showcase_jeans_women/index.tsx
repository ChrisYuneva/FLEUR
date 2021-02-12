import React from 'react';
import { Link } from 'react-router-dom';
import { Lot } from '../../components';
import style from './style.css';
import { URLs } from '../../__data__/urls';
import asset from '../../asset';
import { useTranslation } from 'react-i18next';
import MetaTags from 'react-meta-tags';

function ShowcaseJeansW() {
    const { t, i18n } = useTranslation();
    return (
        <div className={style.wrapper}>
            <MetaTags>
                <title>{t('repos.jeans_w')}</title>
            </MetaTags>
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
                                name={t('repos.jeans_with_wide_slits')}
                                price={t('repos.price.3299')}
                            ></Lot>
                            <Lot
                                img={asset.jeans_w_2}
                                name={t('repos.skinny_jeans')}
                                price={t('repos.price.3299')}
                            ></Lot>
                            <Lot
                                img={asset.jeans_w_3}
                                name={t('repos.jeans_with_wide_slits')}
                                price={t('repos.price.3299')}
                            ></Lot>
                            <Lot
                                img={asset.jeans_w_4}
                                name={t(
                                    'repos.high_rise_straight_leg_jeans_with_slits'
                                )}
                                price={t('repos.price.2999')}
                            ></Lot>
                        </div>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.jeans_w_5}
                                name={t('repos.cropped_jeans')}
                                price={t('repos.price.3299')}
                            ></Lot>
                            <Lot
                                img={asset.jeans_w_6}
                                name={t(
                                    'repos.high_rise_full_length_straight_jeans'
                                )}
                                price={t('repos.price.2999')}
                            ></Lot>
                            <Lot
                                img={asset.jeans_w_7}
                                name={t(
                                    'repos.cropped_high_rise_wide_leg_jeans'
                                )}
                                price={t('repos.price.2999')}
                            ></Lot>
                            <Lot
                                img={asset.jeans_w_8}
                                name={t('repos.flared_jeans')}
                                price={t('repos.price.2999')}
                            ></Lot>
                        </div>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.jeans_w_9}
                                name={t('repos.jeans_by_mom_fit')}
                                price={t('repos.price.2999')}
                            ></Lot>
                            <Lot
                                img={asset.jeans_w_10}
                                name={t('repos.classic_jeans')}
                                price={t('repos.price.2999')}
                            ></Lot>
                            <Lot
                                img={asset.jeans_w_11}
                                name={t('repos.jeans_with_several_buttons')}
                                price={t('repos.price.3299')}
                            ></Lot>
                            <Lot
                                img={asset.jeans_w_12}
                                name={t('repos.high_rise_jeans')}
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
