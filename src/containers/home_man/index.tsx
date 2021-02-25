import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.css';
import asset from '../../asset';
import { URLs } from '../../__data__/urls';
import { useTranslation } from 'react-i18next';
import MetaTags from 'react-meta-tags';

function HomeMans() {
    const { t, i18n } = useTranslation();
    return (
        <div className={style.wrapper}>
            <MetaTags>
                <title>{t('repos.name')}</title>
            </MetaTags>
            <div className={style.header}>
                <Link className={style.name} to={URLs.home.url}>
                    {t('repos.name')}
                </Link>
            </div>

            <div className={style.arrow_div}>
                <Link className={style.arrow_d} to={URLs.home.url}>
                    <img src={asset.icon4} className={style.arrow} />
                    <a className={style.arrow_man}>{t('repos.women')}</a>
                </Link>
            </div>

            <Link className={style.home} to={URLs.showcase_men.url}>
                <div className={style.rectangle}>
                    <span>{t('repos.turn')}</span>
                </div>
            </Link>
        </div>
    );
}

export default HomeMans;
