import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.css';
import asset from '../../asset';
import { URLs } from '../../__data__/urls';
import i18next from 'i18next';
import MetaTags from 'react-meta-tags';

function HomeMans() {
    return (
        <div className={style.wrapper}>
            <MetaTags>
                <title>{i18next.t('repos.name')}</title>
            </MetaTags>
            <div className={style.header}>
                <Link className={style.name} to={URLs.home.url}>
                    {i18next.t('repos.name')}
                </Link>
            </div>

            <div className={style.arrow_div}>
                <Link className={style.arrow_d} to={URLs.home.url}>
                    <img src={asset.icon4} className={style.arrow} />
                    <a className={style.arrow_man}>{i18next.t('repos.women')}</a>
                </Link>
            </div>

            <Link className={style.home} to={URLs.showcase_men.url}>
                <div className={style.rectangle}>
                    <span>{i18next.t('repos.turn')}</span>
                </div>
            </Link>
        </div>
    );
}

export default HomeMans;
