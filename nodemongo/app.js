const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('client-sessions');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
  cookieName: 'session_demo',
  secret: 'session_demo_secret',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
}));


app.get('/', function (req, res) {
  res.status(200);
  res.send('Hello World!')
})

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})

