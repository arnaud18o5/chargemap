'use strict';
import express  from 'express';
const app = express();
const port = 8080;


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: false })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.send("Hello chargemap!")
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

