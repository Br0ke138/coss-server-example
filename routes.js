const request = require('request');

function getMarketPrice(res, pair) {
    request('https://trade.coss.io/c/api/v1/market-price?symbol=' + pair, function (error, response, body) {
        res.json(JSON.parse(body)[0]);
    });
}

module.exports = function (app) {

    // api ---------------------------------------------------------------------
    app.get('/api/market-price/:pair', function (req, res) {
        getMarketPrice(res, req.params.pair);
    })
};
