import React from 'react';

import {
    LabeledInput,
    Button
} from '@main/components'

import style from './style.css';

import {
    back
} from '@main/asset';

class Login extends React.Component {
    /*firstInputRef = React.createRef<HTMLInputElement>();

    componentDidMount() {
        this.firstInputRef.current.focus();
    }

    handleClick = () => {
        console.log('Меня кликнули')
    }*/
    render() {
        return (

                <div className={style.main}>
                    <div className={style.login}>
                        <div>
                            <h2>Войти</h2>
                        </div>

                        <div className={style.adress}>

                            <input className={style.line} type="text" id={style.email} placeholder="Адрес электронной почты"/>
                            <input className={style.line} type="password" id="password" placeholder="Введите пароль"/>
                        </div>

                        <div className={style.forget}>
                            <p>Вы забыли свой пароль?</p>
                        </div>

                        <button className={style.button}>
                            Войти
                        </button>
                    </div>

                    <div className={style.registration}>
                            <div>
                                <h2>Зарегистрируйтесь</h2>
                            </div>

                            <div className={style.text}>
                                <p>Если у Вас еще нет аккаунта пользователя, используйте эту опцию для доступа к формуляру
                                    регистрации.</p>
                                <p>Мы запросим у Вас информацию, необходимую для ускорения процесса покупки.</p>
                            </div>

                            <button className={style.button}>
                                Зарегистрируйтесь
                            </button>
                    </div>
                </div>

             /*<div className={style.wrapper}>
                <form className={style.loginForm}>
                    <LabeledInput inputRef={this.firstInputRef} label="Введите логин" id="login-input" name="login" />
                    <LabeledInput label="Введите пароль" id="password-input" name="password" type="password" />
                    <Button onClick={this.handleClick} colorScheme="purple">sumbit</Button>
                </form>
            </div>*/
        )
    }
}

export default Login;
