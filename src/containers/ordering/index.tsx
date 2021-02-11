import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.css';
import asset from '../../asset';
import { URLs } from '../../__data__/urls';
import { useTranslation } from 'react-i18next';
import { text } from 'express';

function Order() {
    const { t, i18n } = useTranslation();
    return (
        <div className={style.wrapper}>
            <header className={style.header}>
                <Link className={style.name} to={URLs.home.url}>
                    {t('repos.name')}
                </Link>
            </header>
            <div className={style.order}>
                <h1>{t('repos.ordering')}</h1>
                <div className={style.form}>
                    <div className={style.input}>
                        <label>{t('repos.input_name')}</label>
                        <input />
                    </div>
                    <div className={style.input}>
                        <label>{t('repos.input_surname')}</label>
                        <input />
                    </div>
                    <div className={style.input}>
                        <label>{t('repos.input_adress')}</label>
                        <input />
                    </div>
                    <div className={style.input}>
                        <label>{t('repos.input_index')}</label>
                        <input />
                    </div>
                    <div></div>
                    <button className={style.arrange}>
                        {t('repos.arrange')}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Order;
