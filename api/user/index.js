const express = require('express');

const router = express.Router();

const {getItem ,addToModel, updateItem, getModel} = require('./model');


router.get('/', (_, res) => {

    getModel().then((val) => {
        res.json(val);
    }, (err) => {
        res.json({});
        console.error(err);
    });
    
});


router.post('/', (req, res) => {

    addToModel(req.body).then((val) => {
        res.json(val);
    }, (err) => {
        res.json({});
        console.error(err);
    });

});


router.get('/:id', (req, res) => {

    getItem(req.params.id).then((val) => {
        res.json(val);
    }, (err) => {
        res.json({});
        console.error(err);
    });
});


router.post('/:id', (req, res) => {

    updateItem(req.params.id, req.body).then((val) => {
        res.json(val);
    }, (err) => {
        res.json({});
        console.error(err);
    });
    
});


module.exports = router;