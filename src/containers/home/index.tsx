import React from 'react';

import { Link } from 'react-router-dom';

import style from './style.css';

import asset from '../../asset';

import { URLs } from '../../__data__/urls';

class Home extends React.Component {
    render() {
        return (
            <div className={style.wrapper}>
                <header className={style.header}>
                    {/*<div className={style.search}>*/}
                    {/*    <input className={style.line} type="text" id={style.search} placeholder="Поиск"/>*/}
                    {/*</div>*/}
                    <Link className={style.name} to={URLs.home.url}>
                        FLEUR
                    </Link>
                    <Link className={style.ref} to={URLs.basket.url}>
                        <img src={asset.icon} className={style.box} />
                        <span className={style.text}>Корзина (0)</span>
                    </Link>
                </header>

                <div className={style.arrow_div}>
                    <Link className={style.arrow_d} to={URLs.home_man.url}>
                        <img src={asset.icon2} className={style.arrow} />
                        <span className={style.arrow_man}>Мужчины</span>
                    </Link>
                </div>

                <Link className={style.home} to={URLs.showcase_dress.url}>
                    <div className={style.rectangle}>
                        <span className={style.home_s}>Перейти к покупкам</span>
                    </div>
                </Link>
            </div>
        );
    }
}

export default Home;
