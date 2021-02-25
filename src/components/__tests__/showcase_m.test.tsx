import React from 'react';
import { mount } from 'enzyme';
import { describe, it, expect } from '@jest/globals';
import { ShowcaseMan } from '../index';
import { store } from '../../__data__/store';
import { Provider } from 'react-redux';

describe('<ShowcaseMan />', () => {
    const title = 'title';
    const caption = 'caption';

    it('Отрисовывается без ошибок', () => {
        const wrapper = mount(
            <Provider store={store}>
                <ShowcaseMan title={title} caption={caption} />
            </Provider>
        );

        expect(wrapper).toMatchSnapshot();
    });
});
