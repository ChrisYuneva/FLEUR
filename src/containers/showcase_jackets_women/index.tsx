import React from 'react';
import { Link } from 'react-router-dom';
import { Lot } from '../../components';
import style from './style.css';
import { URLs } from '../../__data__/urls';
import asset from '../../asset';
import { useTranslation } from 'react-i18next';
import MetaTags from 'react-meta-tags';

function ShowcaseJacketsW() {
    const { t, i18n } = useTranslation();
    return (
        <div className={style.wrapper}>
            <MetaTags>
                <title>{t('repos.jackets_w')}</title>
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
                    <h2>{t('repos.jackets')}</h2>
                    <span className={style.span}>
                        {t('repos.caption.jackets_w')}
                    </span>
                    <div className={style.show}>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.jackets_w_1}
                                name={t('repos.fringed_jacket')}
                                price={t('repos.price.4499')}
                            ></Lot>
                            <Lot
                                img={asset.jackets_w_2}
                                name={t('repos.heavy_corduroy_shirt')}
                                price={t('repos.price.3299')}
                            ></Lot>
                            <Lot
                                img={asset.jackets_w_3}
                                name={t('repos.patchwork_jacket')}
                                price={t('repos.price.5999')}
                            ></Lot>
                            <Lot
                                img={asset.jackets_w_4}
                                name={t('repos.faux_leather_jacket')}
                                price={t('repos.price.4499')}
                            ></Lot>
                        </div>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.jackets_w_5}
                                name={t('repos.folding_down_jacket')}
                                price={t('repos.price.3299')}
                            ></Lot>
                            <Lot
                                img={asset.jackets_w_6}
                                name={t('repos.faux_shearling_jacket')}
                                price={t('repos.price.5999')}
                            ></Lot>
                            <Lot
                                img={asset.jackets_w_7}
                                name={t('repos.down_jacket')}
                                price={t('repos.price.4499')}
                            ></Lot>
                            <Lot
                                img={asset.jackets_w_8}
                                name={t('repos.shirt_jacket_with_belt')}
                                price={t('repos.price.4499')}
                            ></Lot>
                        </div>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.jackets_w_9}
                                name={t('repos.shirt_jacket_with_belt')}
                                price={t('repos.price.4499')}
                            ></Lot>
                            <Lot
                                img={asset.jackets_w_10}
                                name={t('repos.lightweight_quilted_jacket')}
                                price={t('repos.price.3299')}
                            ></Lot>
                            <Lot
                                img={asset.jackets_w_11}
                                name={t(
                                    'repos.down_jacket_with_thermal_filler'
                                )}
                                price={t('repos.price.7299')}
                            ></Lot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowcaseJacketsW;
