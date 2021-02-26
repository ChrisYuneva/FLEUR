import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { describe, it, expect, beforeEach } from '@jest/globals';
import { ShowcaseMan } from '../index';
import { store } from '../../__data__/store';
import { Provider } from 'react-redux';

describe('<ShowcaseMan />', () => {
    it('Отрисовывается без ошибок', () => {
        const wrapper = mount(
            <Provider store={store}>
                <ShowcaseMan />
            </Provider>
        );

        expect(wrapper).toMatchSnapshot();
    });
});
