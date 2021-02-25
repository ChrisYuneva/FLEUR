import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import Input from '../ordering/steps/input';
import Luck from '../ordering/steps/luck';
import Order from '../ordering/ordering';
import { describe, it, expect } from '@jest/globals';
import { store } from '../../__data__/store';

describe('Тестирование', () => {
    it('Тестируем рендер Input', () => {
        expect.assertions(1);
        const component = mount(
            <Provider store={store}>
                <Input nextStep={onclick} />
            </Provider>
        );
        expect(component).toMatchSnapshot();
    });

    it('Тестируем рендер Luck', () => {
        expect.assertions(1);
        const component = mount(
            <Provider store={store}>
                <Luck />
            </Provider>
        );
        expect(component).toMatchSnapshot();
    });

    it('Тестируем рендер Order', () => {
        expect.assertions(1);
        const component = mount(
            <Provider store={store}>
                <Order />
            </Provider>
        );
        expect(component).toMatchSnapshot();
    });
});
