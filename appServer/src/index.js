import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import Config from './config';

import users from './routes/user';
import auth from './routes/auth';
import events from './routes/events';
import clinics from './routes/clinics';

let app = express();

app.use(bodyParser.json());

app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/events', events);
app.use('/api/clinics', clinics)


app.listen(Config.port, () => console.log('running on localhost: '+ Config.port));