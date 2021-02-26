import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { describe, it, expect, beforeEach } from '@jest/globals';
import { Provider } from 'react-redux';
import mockAdapter from 'axios-mock-adapter';

import { commonAxios } from '../../utils/axios';
import product_mocks from '../../../stubs/api/mocks/male/success.json';
import wo_product_mock from '../../../stubs/api/mocks/female/success.json';

import { store } from '../../__data__/store';

import { ShowcaseMan, ShowcaseWoman } from '../index';

const multipleRequest = async (mock, responses) => {
    await act(async () => {
        await mock.onAny().reply((config) => {
            const [method, url, params, ...response] = responses.shift();
            if (config.url.includes(url)) {
                return response;
            }
        });
    });
};

describe('Тестирование всего приложения', () => {
    let mockAxios;
    beforeEach(() => {
        mockAxios = new mockAdapter(commonAxios);
    });
    //man
    it('Тестируем рендер man_jackets', async () => {
        // expect.assertions(2);
        const component = mount(
            <Provider store={store}>
                <ShowcaseMan />
            </Provider>
        );

        expect(component).toMatchSnapshot();

        const response = [
            ['GET', `/getProducts`, {}, 200, product_mocks['jackets']],
        ];

        await multipleRequest(mockAxios, response);
        component.update();

        expect(component).toMatchSnapshot();
    });
    it('Тестируем рендер man_tshirts', async () => {
        // expect.assertions(2);
        const component = mount(
            <Provider store={store}>
                <ShowcaseMan />
            </Provider>
        );

        expect(component).toMatchSnapshot();

        const response = [
            ['GET', `/getProducts`, {}, 200, product_mocks['tshirts']],
        ];

        await multipleRequest(mockAxios, response);
        component.update();

        expect(component).toMatchSnapshot();
    });
    it('Тестируем рендер man-hoodies', async () => {
        // expect.assertions(2);
        const component = mount(
            <Provider store={store}>
                <ShowcaseMan />
            </Provider>
        );

        expect(component).toMatchSnapshot();

        const response = [
            ['GET', `/getProducts`, {}, 200, product_mocks['hoodies']],
        ];

        await multipleRequest(mockAxios, response);
        component.update();

        expect(component).toMatchSnapshot();
    });
    it('Тестируем рендер man-shirts', async () => {
        // expect.assertions(2);
        const component = mount(
            <Provider store={store}>
                <ShowcaseMan />
            </Provider>
        );

        expect(component).toMatchSnapshot();

        const response = [
            ['GET', `/getProducts`, {}, 200, product_mocks['shirts']],
        ];

        await multipleRequest(mockAxios, response);
        component.update();

        expect(component).toMatchSnapshot();
    });
    it('Тестируем рендер man-jeans', async () => {
        // expect.assertions(2);
        const component = mount(
            <Provider store={store}>
                <ShowcaseMan />
            </Provider>
        );

        expect(component).toMatchSnapshot();

        const response = [
            ['GET', `/getProducts`, {}, 200, product_mocks['jeans']],
        ];

        await multipleRequest(mockAxios, response);
        component.update();

        expect(component).toMatchSnapshot();
    });
    //woman
    it('Тестируем рендер woman-jackets', async () => {
        // expect.assertions(2);
        const component = mount(
            <Provider store={store}>
                <ShowcaseWoman />
            </Provider>
        );

        expect(component).toMatchSnapshot();

        const response = [
            ['GET', `/getProducts`, {}, 200, wo_product_mock['jackets']],
        ];

        await multipleRequest(mockAxios, response);
        component.update();

        expect(component).toMatchSnapshot();
    });
    it('Тестируем рендер woman-tshirts', async () => {
        // expect.assertions(2);
        const component = mount(
            <Provider store={store}>
                <ShowcaseWoman />
            </Provider>
        );

        expect(component).toMatchSnapshot();

        const response = [
            ['GET', `/getProducts`, {}, 200, wo_product_mock['tshirts']],
        ];

        await multipleRequest(mockAxios, response);
        component.update();

        expect(component).toMatchSnapshot();
    });
    it('Тестируем рендер woman-shirts', async () => {
        // expect.assertions(2);
        const component = mount(
            <Provider store={store}>
                <ShowcaseWoman />
            </Provider>
        );

        expect(component).toMatchSnapshot();

        const response = [
            ['GET', `/getProducts`, {}, 200, wo_product_mock['shirts']],
        ];

        await multipleRequest(mockAxios, response);
        component.update();

        expect(component).toMatchSnapshot();
    });
    it('Тестируем рендер woman-hoodies', async () => {
        // expect.assertions(2);
        const component = mount(
            <Provider store={store}>
                <ShowcaseWoman />
            </Provider>
        );

        expect(component).toMatchSnapshot();

        const response = [
            ['GET', `/getProducts`, {}, 200, wo_product_mock['hoodies']],
        ];

        await multipleRequest(mockAxios, response);
        component.update();

        expect(component).toMatchSnapshot();
    });
    it('Тестируем рендер woman-dress', async () => {
        // expect.assertions(2);
        const component = mount(
            <Provider store={store}>
                <ShowcaseWoman />
            </Provider>
        );

        expect(component).toMatchSnapshot();

        const response = [
            ['GET', `/getProducts`, {}, 200, wo_product_mock['dress']],
        ];

        await multipleRequest(mockAxios, response);
        component.update();

        expect(component).toMatchSnapshot();
    });
    it('Тестируем рендер woman-accessories', async () => {
        // expect.assertions(2);
        const component = mount(
            <Provider store={store}>
                <ShowcaseWoman />
            </Provider>
        );

        expect(component).toMatchSnapshot();

        const response = [
            ['GET', `/getProducts`, {}, 200, wo_product_mock['accessories']],
        ];

        await multipleRequest(mockAxios, response);
        component.update();

        expect(component).toMatchSnapshot();
    });
    it('Тестируем рендер woman-jeans', async () => {
        // expect.assertions(2);
        const component = mount(
            <Provider store={store}>
                <ShowcaseWoman />
            </Provider>
        );

        expect(component).toMatchSnapshot();

        const response = [
            ['GET', `/getProducts`, {}, 200, wo_product_mock['jeans']],
        ];

        await multipleRequest(mockAxios, response);
        component.update();

        expect(component).toMatchSnapshot();
    });
    it('Тестируем рендер woman-skirts', async () => {
        // expect.assertions(2);
        const component = mount(
            <Provider store={store}>
                <ShowcaseWoman />
            </Provider>
        );

        expect(component).toMatchSnapshot();

        const response = [
            ['GET', `/getProducts`, {}, 200, wo_product_mock['skirts']],
        ];

        await multipleRequest(mockAxios, response);
        component.update();

        expect(component).toMatchSnapshot();
    });
});
