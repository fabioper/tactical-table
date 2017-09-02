const config = require('./config').get(process.env.NODE_ENV);
const express = require('express');
const logger = require('morgan');

const app = express();

if (process.env.NODE_ENV !== 'test') {
    app.use(logger('dev'));
}

app.use('/', require('./routes'));

app.listen(config.port, () => {
    console.log(`Express app listening on port ${config.port}`);
});
