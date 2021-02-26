import React from 'react';
import style from './style.css';
import { URLs } from '../../__data__/urls';
import asset from '../../asset';
import { Link } from 'react-router-dom';
import i18next from 'i18next';
import { connect, batch } from 'react-redux';
import { setGender, setType } from '../../__data__/actions/goods';
import Showcases from '../showcase';

type ShowcaseWomanProps = {
    title: string;
    caption: string;
};

type MapDispatchToProps = {
    setGender(gender: any): () => void;
    setType(type): () => void;
};

type ShowcaseProps = MapDispatchToProps & ShowcaseWomanProps;

const ShowcaseWoman: React.FC<ShowcaseProps> = ({
    caption,
    title,
    setGender,
    setType,
}) => (
    <div className={style.wrapper}>
        <nav className={style.nav}>
            <Link className={style.name} to={URLs.home.url}>
                {i18next.t('repos.name')}
            </Link>
            <button className={style.link} onClick={() => setType('dress')}>
                {i18next.t('repos.dress')}
            </button>
            <button className={style.link} onClick={() => setType('jackets')}>
                {i18next.t('repos.jackets')}
            </button>
            <button className={style.link} onClick={() => setType('shirts')}>
                {i18next.t('repos.shirts')}
            </button>
            <button className={style.link} onClick={() => setType('hoodies')}>
                {i18next.t('repos.hoodies')}
            </button>
            <button className={style.link} onClick={() => setType('tshirts')}>
                {i18next.t('repos.t-shirts')}
            </button>
            <button className={style.link} onClick={() => setType('jeans')}>
                {i18next.t('repos.jeans')}
            </button>
            <button className={style.link} onClick={() => setType('skirts')}>
                {i18next.t('repos.skirts')}
            </button>
            <button
                className={style.link}
                onClick={() => setType('accessories')}
            >
                {i18next.t('repos.accessories')}
            </button>
            <Link
                className={style.link}
                to={URLs.showcase_men.url}
                onClick={() =>
                    batch(() => {
                        setGender('MALE');
                        setType('jackets');
                    })
                }
            >
                {i18next.t('repos.men')}
            </Link>
        </nav>
        <div className={style.div}>
            <header className={style.header}>
                <Link className={style.ref} to={URLs.basket.url}>
                    <img src={asset.icon3} className={style.box} />
                    <a className={style.text}>{i18next.t('repos.basket')}</a>
                </Link>
            </header>
            <div className={style.scan}>
                <h2>{title}</h2>
                <span className={style.span}>{caption}</span>
                <div className={style.show}>
                    <div className={style.showrow}>
                        <Showcases initType="dress" initGender="FEMALE" />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
    setGender: (gender) => dispatch(setGender(gender)),
    setType: (type) => dispatch(setType(type)),
});

export default connect(null, mapDispatchToProps)(ShowcaseWoman);
