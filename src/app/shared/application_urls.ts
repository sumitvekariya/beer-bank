import { environment } from '../../environments/environment';

const base = environment.api;

export const applicationUrls = {
    getAllBeers: base + 'beers',
    searchBeersBasedOnName: base + 'beers?beer_name='
};

