const expess = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/../path/home.html"));
});

router.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/survey.html'));
});

module.exports = router;