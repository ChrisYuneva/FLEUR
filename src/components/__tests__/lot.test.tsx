import React from 'react';
import { mount } from 'enzyme';
import { Lot } from '../index';
import img from '../../asset';
import { describe, it, expect } from '@jest/globals';

describe('<Lot />', () => {
    const name = 'name';
    const price = 'price';

    it('Отрисовывается без ошибок', () => {
        const wrapper = mount(
            <Lot img={img} name={name} price={price} click={onclick} />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
