import React from 'react';
import style from './style.css';
import i18next from 'i18next';

interface LotProps {
    img: any;
    name: string;
    price: string;
    click?: any;
}

const Lot: React.FC<LotProps> = ({ img, name, price, click, children }) => (
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
);

export default Lot;
