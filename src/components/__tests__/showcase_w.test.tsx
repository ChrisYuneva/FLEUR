import React from 'react';
import { mount } from 'enzyme';
import { ShowcaseWoman } from '../index';
import { describe, it, expect } from '@jest/globals';
import { Provider } from 'react-redux';
import { store } from '../../__data__/store';

describe('<ShowcaseWoman />', () => {
    const title = 'title';
    const caption = 'caption';

    it('Отрисовывается без ошибок', () => {
        const wrapper = mount(
            <Provider store={store}>
                <ShowcaseWoman title={title} caption={caption} />
            </Provider>
        );

        expect(wrapper).toMatchSnapshot();
    });
});
