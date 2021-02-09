import React from 'react';

import { Link } from 'react-router-dom';

import style from './style.css';

import asset from '../../asset';

import { URLs } from '../../__data__/urls';

import { useTranslation } from 'react-i18next';

function Home() {
    const { t, i18n } = useTranslation();
    return (
        <div className={style.wrapper}>
            <header className={style.header}>
                <Link className={style.name} to={URLs.home.url}>
                    {t('repos.name')}
                </Link>
            </header>

            <div className={style.arrow_div}>
                <Link className={style.arrow_d} to={URLs.home_man.url}>
                    <img src={asset.icon2} className={style.arrow} />
                    <a className={style.arrow_man}>{t('repos.men')}</a>
                </Link>
            </div>

            <Link className={style.home} to={URLs.showcase_dress.url}>
                <div className={style.rectangle}>
                    <span className={style.home_s}>{t('repos.turn')}</span>
                </div>
            </Link>
        </div>
    );
}

export default Home;
