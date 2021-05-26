const express = require('express');
const cp = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const fs = require('fs');
require('dotenv').config();

//app
const app = express();

// middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cp())

// db
// mongoose.connect(parameter1 = connection string in .env file using dotenv package, {if any warning include it here}).then(() => {logic});
mongoose.connect(process.env.DATABASE,{useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true,useFindAndModify:false}).then(() => {console.log('database connected');})

//cors
if(process.env.NODE_ENV === 'development') {
    app.use(cors({origin: `${process.env.CLIENT_URL}`}));    
}


// call the routes
fs.readdirSync('./routes').map((r) => app.use('/', require(`./routes/${r}`)));     // localhost:5005/

app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError'){
        res.status(401).json({
            error: "Unauthorized!"
        });
    }
});


// handle port
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})