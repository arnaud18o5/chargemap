'use strict';
import express  from 'express';
const app = express();
const port = process.env.PORT || 3000;


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: false })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.send("Hello chargemap!")
})
