const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');

//Initialize the app
const app = express();

//Middlewares
//Form data Middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
//Json Body Middleware
app.use(bodyParser.json());
//Cors Middleware
app.use(cors());

//Setting up the static directory
app.use(express.static(path.join(__dirname, 'public')));

//use the passport middleware
app.use(passport.initialize());
//Bring in the Passport Strategy
require('./config/passport')(passport);

//Bring in the Database Config
const db = require('./config/keys').mongoURI;
mongoose.connect(db, { useNewUrlParser:true }).then(() => {
    console.log(`Database connected successfully ${db}`)
}).catch(err => console.log(`Unable to connect to the database ${err}`));


app.get('/', (req, res) => {
    return res.send("<h2>Database Connected!</h2>")
});

//Bring in the Users route
const users = require('./routes/api/users');
app.use('/api/users', users);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})