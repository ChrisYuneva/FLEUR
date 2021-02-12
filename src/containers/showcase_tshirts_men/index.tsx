import React from 'react';
import { Link } from 'react-router-dom';
import { Lot } from '../../components';
import style from './style.css';
import { URLs } from '../../__data__/urls';
import asset from '../../asset';
import { useTranslation } from 'react-i18next';
import MetaTags from 'react-meta-tags';

function ShowcaseTshirtsM() {
    const { t, i18n } = useTranslation();
    return (
        <div className={style.wrapper}>
            <MetaTags>
                <title>{t('repos.t-shirts_m')}</title>
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
                    <h2>{t('repos.t-shirts')}</h2>
                    <span className={style.span}>
                        {t('repos.caption.t-shirts_m')}
                    </span>
                    <div className={style.show}>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.tshirt_m_1}
                                name={t('repos.t-shirt_with_contrast_print')}
                                price={t('repos.price.2299')}
                            ></Lot>
                            <Lot
                                img={asset.tshirt_m_2}
                                name={t('repos.embossed_striped_t-shirt')}
                                price={t('repos.price.1799')}
                            ></Lot>
                            <Lot
                                img={asset.tshirt_m_3}
                                name={t('repos.basic_slim_fit_t-shirt')}
                                price={t('repos.price.1199')}
                            ></Lot>
                            <Lot
                                img={asset.tshirt_m_4}
                                name={t('repos.t-shirt_with_slogan')}
                                price={t('repos.price.1999')}
                            ></Lot>
                        </div>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.tshirt_m_5}
                                name={t('repos.faded_t-shirt_with_pocket')}
                                price={t('repos.price.1499')}
                            ></Lot>
                            <Lot
                                img={asset.tshirt_m_6}
                                name={t('repos.t-shirt_with_print')}
                                price={t('repos.price.2299')}
                            ></Lot>
                            <Lot
                                img={asset.tshirt_m_7}
                                name={t('repos.polo_shirt_striking_fabric')}
                                price={t('repos.price.1799')}
                            ></Lot>
                            <Lot
                                img={asset.tshirt_m_8}
                                name={t('repos.t-shirt_with_mickey_print')}
                                price={t('repos.price.2299')}
                            ></Lot>
                        </div>
                        <div className={style.showrow}>
                            <Lot
                                img={asset.tshirt_m_9}
                                name={t('repos.faded_t-shirt_with_pocket')}
                                price={t('repos.price.1499')}
                            ></Lot>
                            <Lot
                                img={asset.tshirt_m_10}
                                name={t('repos.t-shirt_with_print')}
                                price={t('repos.price.2299')}
                            ></Lot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowcaseTshirtsM;
