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
    showcase_dress: {
        url: navigations['link.repos.showcase_dress'],
    },
    showcase_tshirts_women: {
        url: navigations['link.repos.showcase_tshirts_women'],
    },
    showcase_jackets_women: {
        url: navigations['link.repos.showcase_jackets_women'],
    },
    showcase_shirts_women: {
        url: navigations['link.repos.showcase_shirts_women'],
    },
    showcase_hoodies_women: {
        url: navigations['link.repos.showcase_hoodies_women'],
    },
    showcase_jeans_women: {
        url: navigations['link.repos.showcase_jeans_women'],
    },
    showcase_skirts: {
        url: navigations['link.repos.showcase_skirts'],
    },
    showcase_accessories: {
        url: navigations['link.repos.showcase_accessories'],
    },
    home_man: {
        url: navigations['link.repos.home_man'],
    },
};
