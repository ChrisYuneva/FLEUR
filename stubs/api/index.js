const router = require("express").Router();

const TWO_SECONDS = 2000;

const wait = (time = TWO_SECONDS) => (req, res, next) =>
    setTimeout(next, time);

const basket = []

router.post('/addProduct',  (req, res) => {
    const data = req.body.goods;
    basket.push(data);
    res.send({basket});
});

router.get('/getProducts',  (req, res) => {
    const { gender, type } = req.query;
    if (gender === 'MALE') {
        res.send(require('./mocks/male/success.json')[type]);
    }
    else {
        res.send(require('./mocks/female/success.json')[type]);
    }
});

router.get('/getBasket',  (req, res) => {
    res.send({basket});
});

module.exports = router;