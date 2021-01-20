import React from 'react';

import {
    LabeledInput,
    Button,
    Lot
} from '../../components';

import style from './style.css';

import {URLs} from '../../__data__/urls';

import asset from "../../asset";

class ShowcaseJacketsW extends React.Component {
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
                        <h2>Куртки</h2>
                        <span className={style.span}>
                            В наших модных пальто и куртках вы будете выглядеть стильно и забудете о холоде. Приталенные и объемные, длинные и короткие, однотонные черные и выдержанные в цветах сезона — пополните ваш гардероб куртками и пальто из нашей коллекции.
                        </span>
                        <div className={style.show}>
                            <div className={style.showlittle}>
                                {/*    <a className={style.goods} href={'/repos' + URLs.basket.url}>*/}

                                {/*    </a>*/}

                                {/*    <a href={'/repos' + URLs.basket.url}>*/}
                                {/*        Платье с разрезом <br /> 2 599 руб.*/}
                                {/*    </a>*/}
                                {/*</div>*/}
                                <Lot img={asset.jackets_w_1} name={"Куртка с бахромой"} price={"4 499 руб."}></Lot>
                                <Lot img={asset.jackets_w_2} name={"Плотная рубашка из вельвета"} price={"3 299 руб."}></Lot>
                                <Lot img={asset.jackets_w_3} name={"Куртка в стиле пэчворк"} price={"5 999 руб."}></Lot>
                                <Lot img={asset.jackets_w_4} name={"Куртка из искусственной кожи"} price={"4 499 руб."}></Lot>
                            </div>
                            <div className={style.showlittle}>
                                <Lot img={asset.jackets_w_5} name={"Складывающийся пуховик"} price={"3 299 руб."}></Lot>
                                <Lot img={asset.jackets_w_6} name={"Куртка из искусственной овчины"} price={"5 999 руб."}></Lot>
                                <Lot img={asset.jackets_w_7} name={"Пуховик"} price={"4 499 руб."}></Lot>
                                <Lot img={asset.jackets_w_8} name={"Куртка-рубашка с поясом"} price={"4 499 руб."}></Lot>
                            </div>
                            <div className={style.showlittle}>
                                <Lot img={asset.jackets_w_9} name={"Куртка-рубашка с поясом"} price={"4 499 руб."}></Lot>
                                <Lot img={asset.jackets_w_10} name={"Легкая стеганая куртка"} price={"3 299 руб."}></Lot>
                                <Lot img={asset.jackets_w_11} name={"Пуховик с термонаполнителем"} price={"7 299 руб."}></Lot>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default ShowcaseJacketsW;