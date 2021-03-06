import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './style.css';
import { URLs } from '../../__data__/urls';
import { BasketLot } from '../../components';
import i18next from 'i18next';
import MetaTags from 'react-meta-tags';
import { getBasket } from '../../__data__/actions/basket';
import { getImgByName } from '../../utils';
import { connect } from 'react-redux';

type MapStateToProps = {
    loading: boolean;
    basket: any;
};
type MapDispatchToProps = {
    getBasket(): () => void;
};
type GoodsProps = MapDispatchToProps & MapStateToProps;

function Basket({
    loading,
    basket,
    getBasket,
}: React.PropsWithChildren<GoodsProps>) {
    useEffect(() => {
        getBasket();
    }, []);

    if (loading) {
        return <p>Пожалуйста, подождите. Идёт загрузка</p>;
    }

    return (
        <div className={style.wrapper}>
            <MetaTags>
                <title>{i18next.t('repos.basket')}</title>
            </MetaTags>
            <header className={style.header}>
                <Link className={style.name} to={URLs.home.url}>
                    {i18next.t('repos.name')}
                </Link>
            </header>
            <div className={style.scan}>
                <h2>{i18next.t('repos.basket')}</h2>
            </div>
            <div className={style.show}>
                <div className={style.showrow}>
                    {basket.map((lot, index) => (
                        <BasketLot
                            key={index}
                            img={getImgByName(lot.img)}
                            name={i18next.t(lot.name)}
                            price={i18next.t(lot.price)}
                        ></BasketLot>
                    ))}
                </div>
            </div>
            <div className={style.score}>
                <Link className={style.continue} to={URLs.showcase_women.url}>
                    {i18next.t('repos.continue')}
                </Link>
                <Link className={style.continue} to={URLs.ordering.url}>
                    {i18next.t('repos.checkout')}
                </Link>
            </div>
        </div>
    );
}

const mapStateToProps = (state): any => ({
    basket: state.basket.basket,
    loading: state.basket.loading,
});

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
    getBasket: () => dispatch(getBasket()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
