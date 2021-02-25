import { getNavigations } from '@ijl/cli';

const navigations = getNavigations('repos');

export const baseUrl = navigations['repos'];
export const URLs = {
    basket: {
        url: navigations['link.repos.basket'],
    },
    home: {
        url: navigations['link.repos.home'],
    },
    home_man: {
        url: navigations['link.repos.home_man'],
    },
    showcase_men: {
        url: navigations['link.repos.showcase_men'],
    },
    showcase_women: {
        url: navigations['link.repos.showcase_women'],
    },
    ordering: {
        url: navigations['link.repos.ordering'],
    },
};
