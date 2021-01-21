import React from 'react';

import { LabeledInput, Button } from '@main/components';

import style from './style.css';

import asset from '../../asset';

import { URLs } from '../../__data__/urls';

class HomeMans extends React.Component {
    render() {
        return (
            <div className={style.wrapper}>
                <div className={style.header}>
                    {/*<div className={style.search}>*/}
                    {/*    <input className={style.line} type="text" id={style.search} placeholder="Поиск"/>*/}
                    {/*</div>*/}
                    <a className={style.name} href={'/repos' + URLs.home.url}>
                        BLOM
                    </a>

                    <a className={style.ref} href={'/repos' + URLs.basket.url}>
                        <img src={asset.icon} className={style.box} />
                        <span className={style.text}>Корзина (0)</span>
                    </a>
                </div>
                {/*<img src={backgroung} className={style.back}/>*/}

                <div className={style.arrow_div}>
                    <a
                        className={style.arrow_d}
                        href={'/repos' + URLs.home.url}
                    >
                        <img src={asset.icon4} className={style.arrow} />
                        <span className={style.arrow_man}>Женщины</span>
                    </a>
                </div>

                <a
                    className={style.home}
                    href={'/repos' + URLs.showcase_dress.url}
                >
                    <div className={style.rectangle}>
                        <span className={style.home_s}>Перейти к покупкам</span>
                    </div>
                </a>
            </div>
        );
    }
}

export default HomeMans;
