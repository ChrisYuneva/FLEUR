import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.css';
import asset from '../../asset';
import { URLs } from '../../__data__/urls';
import { useTranslation } from 'react-i18next';
import MetaTags from 'react-meta-tags';

function Home() {
    const { t, i18n } = useTranslation();
    return (
        <div className={style.wrapper}>
            <MetaTags>
                <title>{t('repos.name')}</title>
            </MetaTags>
            <header className={style.header}>
                <Link className={style.name} to={URLs.home.url}>
                    {t('repos.name')}
                </Link>
            </header>

            <div className={style.arrow_div}>
                <Link className={style.arrow_d} to={URLs.home_man.url}>
                    <img src={asset.icon2} className={style.arrow} />
                    <span className={style.arrow_man}>{t('repos.men')}</span>
                </Link>
            </div>

            <Link className={style.home} to={URLs.showcase_women.url}>
                <div className={style.rectangle}>
                    <span>{t('repos.turn')}</span>
                </div>
            </Link>
        </div>
    );
}

export default Home;
