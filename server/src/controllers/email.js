const express = require('express');
const router = express.Router();
const db = global.myDb;

router.post('/', async (req, res) => {
    let body = req.body;
    try {
        let result = await db.email.insertOne(body.email);
        console.log(result);
        res.sendStatus(200);
    } catch (e) {
        if (/already\sexists/.test(e.detail)) {
            res.sendStatus(200);
        } else {
            res.status(500).send(e);
        }

    }
});

module.exports = router;
