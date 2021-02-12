import React from 'react';

import { Link } from 'react-router-dom';

import { Lot } from '../../components';

import style from './style.css';

import { URLs } from '../../__data__/urls';

import asset from '../../asset';

import { useTranslation } from 'react-i18next';

function ShowcaseAccessories() {
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
                    <h2>{t('repos.accessories')}</h2>
                    <span className={style.span}>
                        {t('repos.caption.accessories')}
                    </span>
                    <div className={style.show}>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.accessories_1}
                                name={t('repos.basic_scarf')}
                                price={t('repos.price.2299')}
                            ></Lot>
                            <Lot
                                img={asset.accessories_2}
                                name={t('repos.felt_hat')}
                                price={t('repos.price.2999')}
                            ></Lot>
                            <Lot
                                img={asset.accessories_3}
                                name={t('repos.check_scarf')}
                                price={t('repos.price.2299')}
                            ></Lot>
                            <Lot
                                img={asset.accessories_4}
                                name={t('repos.large_link_necklace')}
                                price={t('repos.price.1199')}
                            ></Lot>
                        </div>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.accessories_5}
                                name={t('repos.metal_link_belt')}
                                price={t('repos.price.2299')}
                            ></Lot>
                            <Lot
                                img={asset.accessories_6}
                                name={t('repos.knitted_beanie')}
                                price={t('repos.price.1499')}
                            ></Lot>
                            <Lot
                                img={asset.accessories_7}
                                name={t('repos.geometric_soft_fabric_scarf')}
                                price={t('repos.price.2299')}
                            ></Lot>
                            <Lot
                                img={asset.accessories_8}
                                name={t('repos.large_link_necklace')}
                                price={t('repos.price.1499')}
                            ></Lot>
                        </div>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.accessories_9}
                                name={t('repos.beret_made_of_wool')}
                                price={t('repos.price.1799')}
                            ></Lot>
                            <Lot
                                img={asset.accessories_10}
                                name={t('repos.faux_sheepskin_panama')}
                                price={t('repos.price.1799')}
                            ></Lot>
                            <Lot
                                img={asset.accessories_11}
                                name={t('repos.ribbed_hat')}
                                price={t('repos.price.1499')}
                            ></Lot>
                            <Lot
                                img={asset.accessories_12}
                                name={t('repos.rigid_necklace_natural_pearls')}
                                price={t('repos.price.1799')}
                            ></Lot>
                        </div>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.accessories_13}
                                name={t('repos.bezel_with_knot')}
                                price={t('repos.price.899')}
                            ></Lot>
                            <Lot
                                img={asset.accessories_14}
                                name={t('repos.knitted_turban')}
                                price={t('repos.price.1199')}
                            ></Lot>
                            <Lot
                                img={asset.accessories_15}
                                name={t(
                                    'repos.leather_necklace_natural_pearls'
                                )}
                                price={t('repos.price.1499')}
                            ></Lot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowcaseAccessories;
