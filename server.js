const express = require('express');

const htmlRouter = require('./app/routes/htmlRoutes');
const apiRouter = require('./app/routes/apiRoutes');

const app = express();
const PORT = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('/app/public'));

app.use('/', htmlRouter);
app.use('/api', apiRouter);

const server = app.listen(PORT, () => {
    console.log('Server started on Port: ' + server.address().port);
});