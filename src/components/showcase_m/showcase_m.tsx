import React from 'react';
import style from './style.css';
import { URLs } from '../../__data__/urls';
import asset from '../../asset';
import { Link } from 'react-router-dom';
import i18next from 'i18next';
import { connect } from 'react-redux';
import { setGender, setType } from '../../__data__/actions/goods';
import Showcase from '../showcase';

interface ShowcaseMenProps {
    title: string;
    caption: string;
}

type MapDispatchToProps = {
    setGender(gender: any): () => void;
    setType(type): () => void;
};

const ShowcaseMen: React.FC<ShowcaseMenProps> = ({
    caption,
    title,
    children,
}) => (
    <div className={style.wrapper}>
        <nav className={style.nav}>
            <button className={style.name}>
                {i18next.t('repos.name')}
            </button>
            <button className={style.link}>
                {i18next.t('repos.jackets')}
            </button>
            <button className={style.link}>
                {i18next.t('repos.shirts')}
            </button>
            <button className={style.link}>
                {i18next.t('repos.hoodies')}
            </button>
            <button className={style.link}>
                {i18next.t('repos.t-shirts')}
            </button>
            <button className={style.link}>
                {i18next.t('repos.jeans')}
            </button>
            <Link
                className={style.link}
                to={URLs.showcase_women.url}
                onClick={() => setGender('FEMALE')}
            >
                {i18next.t('repos.women')}
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
                    <div className={style.showrow}><Showcase /></div>
                </div>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
    setGender: (gender) => dispatch(setGender(gender)),
    setType: (type) => dispatch(setType(type)),
});

export default connect(null, mapDispatchToProps)(ShowcaseMen);
