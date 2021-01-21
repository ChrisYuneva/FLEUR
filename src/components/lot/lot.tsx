import React from 'react';

import style from './style.css';
import { URLs } from '../../__data__/urls';
import asset from '../../asset';

interface LotProps {
    img: any;
    name: string;
    price: string;
}

const Lot: React.FC<LotProps> = ({ img, name, price }) => (
    <div className={style.showlittle}>
        <a className={style.goods}>
            <img src={img} />
            {/*<span className={style.caption}>*/}
            {/*    Купить*/}
            {/*</span>*/}
        </a>
        <a>
            {name} <br /> {price}
        </a>
    </div>
);

export default Lot;
