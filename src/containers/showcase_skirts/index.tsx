import React from 'react';
import { Link } from 'react-router-dom';
import { Lot } from '../../components';
import style from './style.css';
import { URLs } from '../../__data__/urls';
import asset from '../../asset';
import { useTranslation } from 'react-i18next';
import MetaTags from 'react-meta-tags';

function ShowcaseSkirts() {
    const { t, i18n } = useTranslation();
    return (
        <div className={style.wrapper}>
            <MetaTags>
                <title>{t('repos.skirts')}</title>
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
                    <h2>{t('repos.skirts')}</h2>
                    <span className={style.span}>
                        {t('repos.caption.skirts')}
                    </span>
                    <div className={style.show}>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.skirts_1}
                                name={t(
                                    'repos.miniskirt_with_contrasting_seams'
                                )}
                                price={t('repos.price.2599')}
                            ></Lot>
                            <Lot
                                img={asset.skirts_2}
                                name={t('repos.structured_mini_skirt')}
                                price={t('repos.price.2599')}
                            ></Lot>
                            <Lot
                                img={asset.skirts_3}
                                name={t('repos.structured_mini_skirt')}
                                price={t('repos.price.2599')}
                            ></Lot>
                            <Lot
                                img={asset.skirts_4}
                                name={t('repos.check_mini_skirt')}
                                price={t('repos.price.2299')}
                            ></Lot>
                        </div>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.skirts_5}
                                name={t('repos.skirt_with_slit')}
                                price={t('repos.price.1999')}
                            ></Lot>
                            <Lot
                                img={asset.skirts_6}
                                name={t('repos.printed_skirt')}
                                price={t('repos.price.2599')}
                            ></Lot>
                            <Lot
                                img={asset.skirts_7}
                                name={t('repos.faux_leather_mini_skirt')}
                                price={t('repos.price.2299')}
                            ></Lot>
                            <Lot
                                img={asset.skirts_8}
                                name={t('repos.embossed_skirt_shorts')}
                                price={t('repos.price.2999')}
                            ></Lot>
                        </div>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.skirts_9}
                                name={t('repos.plaid_skirt')}
                                price={t('repos.price.2599')}
                            ></Lot>
                            <Lot
                                img={asset.skirts_10}
                                name={t('repos.check_mini_skirt')}
                                price={t('repos.price.3299')}
                            ></Lot>
                            <Lot
                                img={asset.skirts_11}
                                name={t('repos.faux_leather_pleated_skirt')}
                                price={t('repos.price.2999')}
                            ></Lot>
                            <Lot
                                img={asset.skirts_12}
                                name={t('repos.short_skirt_with_leather_trim')}
                                price={t('repos.price.2299')}
                            ></Lot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowcaseSkirts;
