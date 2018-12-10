const express = require('express');
const router = express.Router();

const friendslist = require('./../data/friends').friendslist;

router.get('/friends/friendslist', (req, res) => {
    req.json(friendslist);
});

router.post('/friends', (req, res) => {
    let newFriend = {
        name: req.body.name,
        photo: req.body.photo,
        results: req.body.results,
    }
    if(all.filter(e => e.name === newFriend.name).length > 0) {
        res.json({error: true, message: 'Entry already exists'});
        return;
    }
});

module.exports = router;