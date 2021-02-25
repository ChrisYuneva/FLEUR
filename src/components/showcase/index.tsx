import React, { useEffect } from 'react';
import { Lot, ShowcaseMan } from '../index';
import { useTranslation } from 'react-i18next';
import MetaTags from 'react-meta-tags';
import i18next from 'i18next';
import { connect } from 'react-redux';
import { getProducts } from '../../__data__/actions/goods';
import { addProduct } from '../../__data__/actions/basket';
import { getImgByName } from '../../utils';

type OwnProps = {
    initType: string;
    initGender: string;
};
type MapStateToProps = {
    goodsItems: any;
    loading: boolean;
    gender: string;
    type: string;
};
type MapDispatchToProps = {
    addProducts(item: any): () => void;
    getProducts(gender, type): () => void;
};
type ProductProps = MapDispatchToProps & MapStateToProps & OwnProps;

function Showcases({
    addProducts,
    goodsItems,
    getProducts,
    loading,
    gender,
    type,
    initType,
    initGender,
}: React.PropsWithChildren<ProductProps>) {
    useEffect(() => {
        if (type) {
            if (gender) getProducts(gender, type);
            else getProducts(initGender, type);
        } else {
            if (gender) getProducts(gender, type);
            else getProducts(initGender, initType);
        }
    }, [type]);

    const { t, i18n } = useTranslation();
    if (loading) {
        return <p>Пожалуйста, подождите. Идёт загрузка</p>;
    }
    return (
        <div
        // title={i18next.t('repos.t-shirts')}
        // caption={i18next.t('repos.caption.t-shirts_m')}
        >
            <MetaTags>
                <title>{t('repos.t-shirts_m')}</title>
            </MetaTags>

            {goodsItems.map((lot, index) => (
                <Lot
                    click={() => addProducts(lot)}
                    key={index}
                    img={getImgByName(lot.img)}
                    name={t(lot.name)}
                    price={t(lot.price)}
                />
            ))}
        </div>
    );
}

const mapStateToProps = (state): MapStateToProps => ({
    goodsItems: state.goods.goodsItems,
    loading: state.goods.loading,
    gender: state.goods.gender,
    type: state.goods.type,
});

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
    addProducts: (item) => dispatch(addProduct(item)),
    getProducts: (gender, type) => dispatch(getProducts(gender, type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Showcases);
