import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.css';
import { URLs } from '../../__data__/urls';
import asset from '../../asset';
import { Lot } from '../../components';
import { useTranslation } from 'react-i18next';

function Basket() {
    const { t, i18n } = useTranslation();
    return (
        <div className={style.wrapper}>
            <header className={style.header}>
                <Link className={style.name} to={URLs.home.url}>
                    {t('repos.name')}
                </Link>
                {/*<Link className={style.ref} to={URLs.basket.url}>*/}
                {/*    <img src={asset.icon} className={style.box} />*/}
                {/*    <span className={style.text}>Корзина (0)</span>*/}
                {/*</Link>*/}
            </header>
            <div className={style.scan}>
                <h2>{t('repos.basket')}</h2>
                <span>{t('repos.number_goods')}</span>
            </div>
            <div className={style.show}>
                <div className={style.showrow}>
                    <Lot
                        img={asset.dress3}
                        name={'Платье мини с блёстками'}
                        price={'3 299 руб.'}
                    >
                        <button className={style.del}>Удалить</button>
                    </Lot>
                    <Lot
                        img={asset.jackets_m_11}
                        name={'Куртка из искусственной кожи'}
                        price={'7 299 руб.'}
                    >
                        <button className={style.del}>Удалить</button>
                    </Lot>
                    <Lot
                        img={asset.tshirt_w_4}
                        name={'Футболка с принтом'}
                        price={'1 799 руб.'}
                    >
                        <button className={style.del}>Удалить</button>
                    </Lot>
                    <Lot
                        img={asset.shirt_m_11}
                        name={'Базовая рубашка плотно облегающего кроя'}
                        price={'3 299 руб.'}
                    >
                        <button className={style.del}>Удалить</button>
                    </Lot>
                </div>
                <div className={style.showrow}>
                    <Lot
                        img={asset.tshirt_w_3}
                        name={'Футболка со сборками'}
                        price={'999 руб.'}
                    >
                        <button className={style.del}>Удалить</button>
                    </Lot>
                    <Lot
                        img={asset.tshirt_w_1}
                        name={'Топ с подплечниками'}
                        price={'1 199 руб.'}
                    >
                        <button className={style.del}>Удалить</button>
                    </Lot>
                    <Lot
                        img={asset.shirt_m_9}
                        name={'Рубашка с принтом "Здания"'}
                        price={'3 299 руб.'}
                    >
                        <button className={style.del}>Удалить</button>
                    </Lot>
                    <Lot
                        img={asset.dress11}
                        name={'Короткое платье'}
                        price={'2 999 руб.'}
                    >
                        <button className={style.del}>Удалить</button>
                    </Lot>
                </div>
                <div className={style.showrow}>
                    <Lot
                        img={asset.dress12}
                        name={'Платье с пайетками'}
                        price={'6 999 руб.'}
                    >
                        <button className={style.del}>Удалить</button>
                    </Lot>
                </div>
            </div>
            <div className={style.score}>
                <Link className={style.continue} to={URLs.showcase_dress.url}>
                    {t('repos.continue')}
                </Link>
                <h2>{t('repos.total')} 15151 руб.</h2>
                <Link className={style.continue} to={URLs.ordering.url}>
                    {t('repos.checkout')}
                </Link>
            </div>
        </div>
    );
}

export default Basket;
