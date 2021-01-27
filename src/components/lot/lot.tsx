import React from 'react';
import style from './style.css';

interface LotProps {
    img: any;
    name: string;
    price: string;
}

const Lot: React.FC<LotProps> = ({img, name, price, children}) => (
    <div className={style.showlittle}>
        {/*<a className={style.goods}>*/}
        <div className={style.image}>
            <img src={img}/>
            <a className={style.middle}>
                <span className={style.text}>Добавить в корзину</span>
            </a>
        </div>
        <span>
            {name} <br/> {price}
        </span>
        {children}
    </div>
);

export default Lot;
