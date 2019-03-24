// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

    const HALF_DOLLARS = 50;
    const QUARTERS = 25;
    const DIMES = 10;
    const NICKELS = 5;
    const PENNIES = 1;

    
    if (currency <= 0) {
        return {};
    }

    if (currency > 10000) {
        return {error: 'You are rich, my friend! We don\'t have so much coins for exchange'};
    }

    const result = {};

    const h = Math.floor(currency / HALF_DOLLARS);
    if (h > 0) {
        result['H'] = h;
    }

    const q = Math.floor((currency % HALF_DOLLARS) / QUARTERS);
    if (q > 0) {
        result['Q'] = q;
    }

    const d = Math.floor(((currency % HALF_DOLLARS) % QUARTERS) / DIMES);
    if (d > 0) {
        result['D'] = d;
    }

    const n = Math.floor((((currency % HALF_DOLLARS) % QUARTERS) % DIMES) / NICKELS);
    if (n > 0) {
        result['N'] = n;
    }

    const p = Math.floor(((((currency % HALF_DOLLARS) % QUARTERS) % DIMES) % NICKELS) / PENNIES);
    if (p > 0) {
        result['P'] = p;
    }
    
    return result;
}
