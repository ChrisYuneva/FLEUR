import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.css';
import asset from '../../asset';
import { URLs } from '../../__data__/urls';
import { useTranslation } from 'react-i18next';

function Order() {
    const { t, i18n } = useTranslation();
    return (
        <div className={style.wrapper}>
            <header className={style.header}>
                <Link className={style.name} to={URLs.home.url}>
                    FLEUR
                </Link>
            </header>
            <div className={style.order}>
                <h1>Оформление заказа</h1>
                <div className={style.form}>
                    <div>
                        <label>Введите ююю</label>
                        <input />
                    </div>
                    <div>
                        <label>Введите ююю</label>
                        <input />
                    </div>
                    <div>
                        <label>Введите ююю</label>
                        <input />
                    </div>
                    <input className={style.line} type="text" />
                </div>
            </div>
        </div>
    );
}

export default Order;
