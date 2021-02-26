import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.css';
import { URLs } from '../../../__data__/urls';
import i18next from 'i18next';
import { Form, Field } from 'react-final-form';

function Input({ nextStep }) {
    async function handleSubmit(values) {
        const { name, surname, adress, index } = values;
        if (name && surname && adress && index) {
            localStorage.setItem('name', name);
            localStorage.setItem('surname', surname);
            localStorage.setItem('adress', adress);
            localStorage.setItem('index', index);
        }
    }

    return (
        <div className={style.wrapper}>
            <header className={style.header}>
                <Link className={style.name} to={URLs.home.url}>
                    {i18next.t('repos.name')}
                </Link>
            </header>
            <Form
                onSubmit={handleSubmit}
                render={({ handleSubmit }) => (
                    <div className={style.order}>
                        <h1>{i18next.t('repos.ordering')}</h1>
                        <div className={style.form}>
                            <div className={style.input}>
                                <label>{i18next.t('repos.input_name')}</label>
                                <Field
                                    name="firstName"
                                    component="input"
                                    type="text"
                                />
                            </div>
                            <div className={style.input}>
                                <label>{i18next.t('repos.input_surname')}</label>
                                <Field
                                    name="lastName"
                                    component="input"
                                    type="text"
                                />
                            </div>
                            <div className={style.input}>
                                <label>{i18next.t('repos.input_adress')}</label>
                                <Field
                                    name="adress"
                                    component="input"
                                    type="text"
                                />
                            </div>
                            <div className={style.input}>
                                <label>{i18next.t('repos.input_index')}</label>
                                <Field
                                    name="index"
                                    component="input"
                                    type="text"
                                />
                            </div>
                            <div></div>
                            <button
                                className={style.arrange}
                                onClick={nextStep}
                            >
                                {i18next.t('repos.arrange')}
                            </button>
                        </div>
                    </div>
                )}
            />
        </div>
    );
}

export default Input;
