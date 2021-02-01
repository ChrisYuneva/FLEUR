import React from 'react';

import { Link } from 'react-router-dom';

import style from './style.css';

import asset from '../../asset';

import { URLs } from '../../__data__/urls';
import { useTranslation } from 'react-i18next';

function HomeMans() {
    const { t, i18n } = useTranslation();
    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                {/*<div className={style.search}>*/}
                {/*    <input className={style.line} type="text" id={style.search} placeholder="Поиск"/>*/}
                {/*</div>*/}
                <Link className={style.name} to={URLs.home.url}>
                    FLEUR
                </Link>

                {/*<a className={style.ref} href={'/repos' + URLs.basket.url}>*/}
                {/*    <img src={asset.icon} className={style.box} />*/}
                {/*    <span className={style.text}>Корзина (0)</span>*/}
                {/*</a>*/}
            </div>

            <div className={style.arrow_div}>
                <Link className={style.arrow_d} to={URLs.home.url}>
                    <img src={asset.icon4} className={style.arrow} />
                    <a className={style.arrow_man}>Женщины</a>
                </Link>
            </div>

            <Link className={style.home} to={URLs.showcase_jackets_men.url}>
                <div className={style.rectangle}>
                    <span className={style.home_s}>Перейти к покупкам</span>
                </div>
            </Link>
        </div>
    );
}

export default HomeMans;
