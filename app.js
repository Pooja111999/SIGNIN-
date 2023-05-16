const express = require('express');

const app = express();

const cookieparser = require('cookie-parser');

// const router = express.Router();

app.use(express.urlencoded());

app.use(cookieparser())

const db = require('./config/mongoose');
const bodyParser = require('body-parser');

app.use(express.static('./assets'));

  

app.set('view engine','ejs');
app.set('views','./view');

app.use('/',require('./Routes/route'))




app.listen(3000,()=>{
  console.log('app listening on port 3000');
})