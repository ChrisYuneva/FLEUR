import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import Basket from '../basket/index';
import { describe, it, expect } from '@jest/globals';
import { store } from '../../__data__/store';

describe('Тестирование', () => {
    it('Тестируем рендер Basket', () => {
        expect.assertions(1);
        const component = mount(
            <Provider store={store}>
                <Basket />
            </Provider>
        );
        expect(component).toMatchSnapshot();
    });
});
