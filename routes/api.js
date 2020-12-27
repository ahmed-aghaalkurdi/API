const express = require('express');
const router = express.Router();

router.post('/data', (req, res, next) => {
    const response = {message: req.body.message, name: "Ahmed"};
    return res.json(response);
});

router.get('/greeting/:name', (req, res, next) => {
    const response = { message: `hello ${req.params.name}`};
    return res.json(response.message);
});

module.exports = router;