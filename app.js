'use strict';
import express  from 'express';
import stationRoute from './routes/stationRoute'
import authRoute from './routes/authRoute'
import db from './utils/db';
import passport from './utils/pass';
const app = express();
const port = process.env.PORT || 3000;

app.use(passport.initialize());

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: false })) // for parsing application/x-www-form-urlencoded

app.use('/station', stationRoute);/*, passport.authenticate('jwt', {session: false})*/
app.use('/auth', authRoute);
app.get('/', (req, res) => {
  res.send("Hello chargemap!")
})

db.on('connected', () => {
  app.listen(port, () => { console.log(`app listen on port ${port}`); });
}).on('error', (err) => {
  console.log(`Connnection error: ${err.message}`);
})
