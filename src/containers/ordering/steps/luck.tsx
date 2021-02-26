import React from 'react';
import style from './style.css';
import { Link } from 'react-router-dom';
import { URLs } from '../../../__data__/urls';
import i18next from 'i18next';

function Luck() {
    return (
        <div className={style.orderS}>
            <h1 className={style.luck}>Ваш заказ оформлен!</h1>
            <Link className={style.continue} to={URLs.home.url}>
                {i18next.t('repos.continue')}
            </Link>
        </div>
    );
}

export default Luck;
