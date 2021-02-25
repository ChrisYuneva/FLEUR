import React from 'react';
import style from './style.css';
import { Link } from 'react-router-dom';
import { URLs } from '../../../__data__/urls';
import { useTranslation } from 'react-i18next';

function Luck() {
    const { t, i18n } = useTranslation();
    return (
        <div className={style.orderS}>
            <h1 className={style.luck}>Ваш заказ оформлен!</h1>
            <Link className={style.continue} to={URLs.showcase_dress.url}>
                {t('repos.continue')}
            </Link>
        </div>
    );
}

export default Luck;
