import React from 'react';

import {
    LabeledInput,
    Button,
    Lot
} from '../../components';

import style from './style.css';

import {URLs} from '../../__data__/urls';

import asset from "../../asset";

class ShowcaseDress extends React.Component {
    render() {
        return (
            <div className={style.wrapper}>
                <nav className={style.nav}>
                    <a className={style.name} href={'/repos' + URLs.home.url}>
                        BLOM
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
                        <h2>Платья</h2>
                        <span className={style.span}>
                            Романтичные, модные, непринужденные или облегающие — выбирайте новые платья здесь. Наша коллекция женских платьев разнообразна — идеальные маленькие черные платья и макси-платья с узором, а также многое другое.
                        </span>
                        <div className={style.show}>
                            <div className={style.showlittle}>
                            {/*    <a className={style.goods} href={'/repos' + URLs.basket.url}>*/}

                            {/*    </a>*/}

                            {/*    <a href={'/repos' + URLs.basket.url}>*/}
                            {/*        Платье с разрезом <br /> 2 599 руб.*/}
                            {/*    </a>*/}
                            {/*</div>*/}
                                <Lot img={asset.dress1} name={"Платье с разрезом"} price={"2 599 руб."}></Lot>
                                <Lot img={asset.dress2} name={"Комбинированное платье"} price={"2 999 руб."}></Lot>
                                <Lot img={asset.dress3} name={"Платье мини с блёстками"} price={"3 299 руб."}></Lot>
                                <Lot img={asset.dress4} name={"Длинное трикотажное платье"} price={"2 999 руб."}></Lot>
                            </div>
                            <div className={style.showlittle}>
                                <Lot img={asset.dress5} name={"Сатиновое платье"} price={"2 599 руб."}></Lot>
                                <Lot img={asset.dress6} name={"Комбинированное платье"} price={"2 999 руб."}></Lot>
                                <Lot img={asset.dress7} name={"Трикотажное платье"} price={"3 299 руб."}></Lot>
                                <Lot img={asset.dress8} name={"Платье с принтом"} price={"4 299 руб."}></Lot>
                            </div>
                            <div className={style.showlittle}>
                                <Lot img={asset.dress9} name={"Платье с деталями"} price={"2 999 руб."}></Lot>
                                <Lot img={asset.dress10} name={"Мини-платье из бархата"} price={"3 299 руб."}></Lot>
                                <Lot img={asset.dress11} name={"Короткое платье"} price={"2 999 руб."}></Lot>
                                <Lot img={asset.dress12} name={"Платье с пайетками"} price={"6 999 руб."}></Lot>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default ShowcaseDress;