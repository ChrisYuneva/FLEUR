import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import mockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { Provider } from 'react-redux';
import ShowcaseTshirtsM from '../../components/showcase';
import { describe, it, expect } from '@jest/globals';
import { store } from '../../__data__/store';

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
    let mock;
    beforeEach(() => {
        mock = new mockAdapter(axios);
    });

    it('Тестируем рендер Showcase', async () => {
        // expect.assertions(2)
        // первый рендер
        const component = mount(
            <Provider store={store}>
                <ShowcaseTshirtsM />
            </Provider>
        );

        expect(component).toMatchSnapshot();

        const response = [
            [
                'POST',
                '/login',
                {},
                200,
                {
                    token: 'xvvxfvxvxfv',
                },
            ],
        ];
        // перехватываем запрос
        await multipleRequest(mock, response);
        component.update();

        expect(component).toMatchSnapshot();
    });
});

// describe('Тестирование', () => {
//
//     it('Тестируем рендер ShowcaseTshirtsM', () => {
//         expect.assertions(1);
//         const component = mount(
//             <Provider store={store}>
//                 <ShowcaseTshirtsM />
//             </Provider>
//         );
//
//         expect(component).toMatchSnapshot();
//     });
// });
