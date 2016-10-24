import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import Config from './config';

import users from './routes/user';
import auth from './routes/auth';
import events from './routes/events';

let app = express();

app.use(bodyParser.json());

// app.use('/', users);
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/events', events);


// app.get('/*', (req,res) => {
//     res.status(200).json({ message: "howdy"})
// });

app.listen(Config.port, () => console.log('running on localhost: '+Config.port));