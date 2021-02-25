import React from 'react';
import style from './style.css';

interface BasketLotProps {
    img: any;
    name: string;
    price: string;
}

const BasketLot: React.FC<BasketLotProps> = ({
    img,
    name,
    price,
    children,
}) => (
    <div className={style.wrap}>
        <div className={style.showlittle}>
            <div className={style.image}>
                <img src={img} />
                <span>
                    {name} <br /> {price}
                </span>
                {children}
            </div>
        </div>
    </div>
);

export default BasketLot;
