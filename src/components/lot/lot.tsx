import React from 'react';
import style from './style.css';
import i18next from 'i18next';

interface LotProps {
    img: any;
    name: string;
    price: string;
    title: string;
    caption: string;
    click?: any;
}

const Lot: React.FC<LotProps> = ({
    img,
    name,
    price,
    title,
    caption,
    click,
    children,
}) => (
    <div>
        <div>
            <h2>{title}</h2>
            <span>{caption}</span>
        </div>
        <div className={style.showlittle}>
            <div className={style.image}>
                <img src={img} />
                <button className={style.middle} onClick={click}>
                    <span className={style.text}>{i18next.t('repos.add')}</span>
                </button>
            </div>
            <span>
                {name} <br /> {price}
            </span>
            {children}
        </div>
    </div>
);

export default Lot;
