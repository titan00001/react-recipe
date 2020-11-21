const express = require('express');

const {getItem ,addToModel, updateItem, getModel} = require('./model');

// implement Search by tags

const router = express.Router();

router.get('/', (_, res) => {

    getModel().then((val) => {
        res.send(val);
    }, (err) => {
        res.send({});
        console.error(err);
    });
    
});


router.post('/', (req, res) => {

    addToModel(req.body).then((val) => {
        res.send(val);
    }, (err) => {
        res.send({});
        console.error(err);
    });

});


router.get('/:id', (req, res) => {

    getItem(req.params.id).then((val) => {
        res.send(val);
    }, (err) => {
        res.send({});
        console.error(err);
    });
});


router.post('/:id', (req, res) => {

    updateItem(req.params.id, req.body).then((val) => {
        res.send(val);
    }, (err) => {
        res.send({});
        console.error(err);
    });
    
});



module.exports = router;