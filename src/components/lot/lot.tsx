import React from "react";

import style from "./style.css";
import {URLs} from "../../__data__/urls";
import asset from "../../asset";

interface LotProps {
    img: any;
    name: string;
    price: string;
}

const Lot: React.FC<LotProps> = ({img, name, price}) => (
    <div className={style.showlittle}>
        <a className={style.goods}>
            <img src={img} className={style.image}/>
        </a>
        <a>
            {name} <br /> {price}
        </a>
    </div>
);

export default Lot;
