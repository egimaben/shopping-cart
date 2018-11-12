const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
// App Init
const app = express();
require("dotenv").config()

// db

require('./libs/db-connection');

const PORT = process.env.PORT || 5000;

// Middlewares
app.use(require('helmet')());
app.use(require('cors')());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
require("./config/passport");
  // Routes
app.use('/api/products', require('./routes/products'));
app.use('/api/auth', require('./routes/auth'));

// Production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  

  app.get('*', (req, res) => {
    res.sendfile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`Server running on port ${ PORT }`));