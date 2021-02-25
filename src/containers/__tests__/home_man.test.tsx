import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import HomeMans from '../home_man/index';
import { describe, it, expect } from '@jest/globals';
import { store } from '../../__data__/store';

describe('Тестирование', () => {
    it('Тестируем рендер HomeMans', () => {
        expect.assertions(1);
        const component = mount(
            <Provider store={store}>
                <HomeMans />
            </Provider>
        );

        expect(component).toMatchSnapshot();
    });
});
