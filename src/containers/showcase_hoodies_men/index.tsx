import React from 'react';
import { Link } from 'react-router-dom';
import { Lot } from '../../components';
import style from './style.css';
import { URLs } from '../../__data__/urls';
import asset from '../../asset';
import { useTranslation } from 'react-i18next';
import MetaTags from 'react-meta-tags';

function ShowcaseHoodiesM() {
    const { t, i18n } = useTranslation();
    return (
        <div className={style.wrapper}>
            <MetaTags>
                <title>{t('repos.hoodies_m')}</title>
            </MetaTags>
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
                    <h2>{t('repos.hoodies')}</h2>
                    <span className={style.span}>
                        {t('repos.caption.hoodies_m')}
                    </span>
                    <div className={style.show}>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.hoodies_m_1}
                                name={t('repos.hoodies_with_print')}
                                price={t('repos.price.4499')}
                            ></Lot>
                            <Lot
                                img={asset.hoodies_m_2}
                                name={t(
                                    'repos.fleece_sweatshirt_with_lava_print'
                                )}
                                price={t('repos.price.3999')}
                            ></Lot>
                            <Lot
                                img={asset.hoodies_m_3}
                                name={t('repos.hoodies_with_print')}
                                price={t('repos.price.3299')}
                            ></Lot>
                            <Lot
                                img={asset.hoodies_m_4}
                                name={t('repos.hoodie_with_slogan')}
                                price={t('repos.price.3999')}
                            ></Lot>
                        </div>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.hoodies_m_5}
                                name={t('repos.basic_hoodie')}
                                price={t('repos.price.2999')}
                            ></Lot>
                            <Lot
                                img={asset.hoodies_m_6}
                                name={t('repos.sweatshirt_mickey_print')}
                                price={t('repos.price.3999')}
                            ></Lot>
                            <Lot
                                img={asset.hoodies_m_7}
                                name={t(
                                    'repos.sweatshirt_with_jacquard_detail'
                                )}
                                price={t('repos.price.7299')}
                            ></Lot>
                            <Lot
                                img={asset.hoodies_m_8}
                                name={t(
                                    'repos.sweatshirt_with_embroidered_patch'
                                )}
                                price={t('repos.price.3299')}
                            ></Lot>
                        </div>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.hoodies_m_9}
                                name={t(
                                    'repos.sweatshirt_with_contrasting_patch'
                                )}
                                price={t('repos.price.5999')}
                            ></Lot>
                            <Lot
                                img={asset.hoodies_m_10}
                                name={t('repos.basic_hoodie')}
                                price={t('repos.price.2999')}
                            ></Lot>
                            <Lot
                                img={asset.hoodies_m_11}
                                name={t('repos.sweatshirt_with_graffiti_print')}
                                price={t('repos.price.3999')}
                            ></Lot>
                            <Lot
                                img={asset.hoodies_m_12}
                                name={t('repos.basic_sweatshirt_with pocket')}
                                price={t('repos.price.2599')}
                            ></Lot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowcaseHoodiesM;
