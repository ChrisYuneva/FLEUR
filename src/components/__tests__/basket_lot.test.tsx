import React from 'react';
import { mount } from 'enzyme';
import { BasketLot } from '../index';
import img from '../../asset';
import { describe, it, expect } from '@jest/globals';

describe('<BasketLot />', () => {
    const name = 'name';
    const price = 'price';

    it('Отрисовывается без ошибок', () => {
        const wrapper = mount(
            <BasketLot img={img} name={name} price={price} />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
