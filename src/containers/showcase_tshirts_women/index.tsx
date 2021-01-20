import React from 'react';

import {
    LabeledInput,
    Button,
    Lot
} from '../../components';

import style from './style.css';

import {URLs} from '../../__data__/urls';

import asset from "../../asset";

class ShowcaseTshirtsW extends React.Component {
    render() {
        return (
            <div className={style.wrapper}>
                <nav className={style.nav}>
                    <a className={style.name} href={'/repos' + URLs.home.url}>
                        RARE
                    </a>

                    <a className={style.link} href={'/repos' + URLs.showcase_dress.url}>
                        Платья
                    </a>
                    <a className={style.link} href={'/repos' + URLs.showcase_jackets_women.url}>
                        Куртки
                    </a>
                    <a className={style.link} href={'/repos' + URLs.showcase_shirts_women.url}>
                        Рубашки
                    </a>
                    <a className={style.link} href={'/repos' + URLs.showcase_hoodies_women.url}>
                        Толстовки
                    </a>
                    <a className={style.link} href={'/repos' + URLs.showcase_tshirts_women.url}>
                        Футболки
                    </a>
                    <a className={style.link} href={'/repos' + URLs.showcase_jeans_women.url}>
                        Джинсы
                    </a>
                    <a className={style.link} href={'/repos' + URLs.showcase_skirts.url}>
                        Юбки
                    </a>
                    <a className={style.link} href={'/repos' + URLs.showcase_accessories.url}>
                        Аксессуары
                    </a>


                </nav>
                <div className={style.div}>
                    <header className={style.header}>
                        <a className={style.ref} href={'/repos' + URLs.basket.url}>
                            <img src={asset.icon3} className={style.box}/>
                            <span className={style.text}>Корзина (0)</span>
                        </a>
                    </header>
                    <div className={style.scan}>
                        <h2>Футболки</h2>
                        <span className={style.span}>
                            Хорошо скроенные классические футболки — это универсальный предмет гардероба, который незаменим летом, а также может использоваться для создания образов в любое другое время года. Предлагаем женские футболки всевозможных расцветок и фасонов — выполненные в базовом черном и белом цветах или ярких оттенках, а также украшенные интересными принтами и оригинальными узорами.
                        </span>
                        <div className={style.show}>
                            <div className={style.showlittle}>
                                {/*    <a className={style.goods} href={'/repos' + URLs.basket.url}>*/}

                                {/*    </a>*/}

                                {/*    <a href={'/repos' + URLs.basket.url}>*/}
                                {/*        Платье с разрезом <br /> 2 599 руб.*/}
                                {/*    </a>*/}
                                {/*</div>*/}
                                <Lot img={asset.tshirt1} name={"Топ с подплечниками"} price={"1 199 руб."}></Lot>
                                <Lot img={asset.tshirt2} name={"Укороченная футболка"} price={"1 599 руб."}></Lot>
                                <Lot img={asset.tshirt3} name={"Футболка со сборками"} price={"999 руб."}></Lot>
                                <Lot img={asset.tshirt4} name={"Футболка с принтом"} price={"1 799 руб."}></Lot>
                            </div>
                            <div className={style.showlittle}>
                                <Lot img={asset.tshirt5} name={"Укороченная футболка с принтом"} price={"1 799 руб."}></Lot>
                                <Lot img={asset.tshirt6} name={"Футболка ART & DECO POTTERY"} price={"1 799 руб."}></Lot>
                                <Lot img={asset.tshirt7} name={"Боди в рубчик"} price={"1 499 руб."}></Lot>
                                <Lot img={asset.tshirt8} name={"Жаккардовый топ"} price={"1 799 руб."}></Lot>
                            </div>
                            <div className={style.showlittle}>
                                <Lot img={asset.tshirt9} name={"Топ в рубчик со сборкой"} price={"899 руб."}></Lot>
                                <Lot img={asset.tshirt10} name={"Боди с пуговицами"} price={"1 199 руб."}></Lot>
                                <Lot img={asset.tshirt11} name={"Базовая футболка из хлопка"} price={"599 руб."}></Lot>
                                <Lot img={asset.tshirt12} name={"Футболка с принтом 'YALE'"} price={"1 799 руб."}></Lot>
                            </div>
                            <div className={style.showlittle}>
                                <Lot img={asset.tshirt13} name={"Укороченная футболка"} price={"1 199 руб."}></Lot>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default ShowcaseTshirtsW;