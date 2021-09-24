const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req,res) =>{
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;
    let newFeedback = req.body;
    console.log('adding new feedback', newFeedback );
    pool.query( queryText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
    .then(result =>{
        res.sendStatus(201);
    }).catch(error =>{
        console.log( 'error with POST', error );
    });
});

module.exports = router;