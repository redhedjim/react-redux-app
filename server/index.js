import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';
import Config from '../config';


import signup from './routes/signup';
import users from './routes/users';
import auth from './routes/auth';
import events from './routes/events';



let app = express();

app.use(bodyParser.json());

app.use('/api/signup', signup);
app.use('/api/users', users);
app.use('/api/users/:id', users);
app.use('/api/auth', auth);
app.use('/api/events', events);


var morgan = require('morgan'); //used to see requests

const compiler = webpack(webpackConfig);
app.use(webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
}));

app.use(webpackHotMiddleware(compiler));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(Config.port, () => console.log('running on localhost: '+Config.port));