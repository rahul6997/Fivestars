const express = require('express');
const bodyParser =  require('body-parser');
const cookieParser = require('cookie-parser');
const { request } = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/connectDB');

const doctorslistRouter = require('./routes/doctorslist-routes');
const signupRouter = require('./routes/signups-routers');
const loginRouter = require('./routes/login-router');

const credentials = require('./middleware/credentials');
//const corsOptions = require('./config/corsOptions');

const app = express();

connectDB();


// mongoose.connect('mongodb+srv://Sandeep:' + process.env.MONGO_ATLAS_PASSWORD + '@node-medicareapp.dpgqpzu.mongodb.net/MedicareData?retryWrites=true&w=majority', {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// });

app.use(credentials);
//app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if(req.method === 'OPTIONS') {
        res.header("Access-Control-Allow-Methods", 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});


app.use('/signup', signupRouter);
app.use('/login', loginRouter);


app.use('/', doctorslistRouter);

app.use((error, req, res, next) => {
    res.status(500);
    res.json({
        error: {
            message: error.message
        }
    });
});


mongoose.connection.once('open', () => {
    console.log("Connected to MongoDB");
    app.listen(4000, () => console.log("Server Running on Port 4000"));
});


module.exports = app;