let express = require('express')
let app = express()
let router = express.Router()
let path = require('path')
let morgan = require('morgan')
let db = require('./server/db/models/index.js')
let bodyParser = require('body-parser')
let chalk = require('chalk')
let env = require(path.join(__dirname, './server/env'));
let pg = require('pg');
let http = require("http");


// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

// router.use(morgan(':method :url :status :response-time ms - :res[content-length]'));

app.set('env', env)

app.use('/api', require('./server/routes/index.js'));

console.log("after database")

router.use(function(req, res, next) {
    console.log('/' + req.method);
    next();
});

router.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/browser')));
app.use(express.static(path.join(__dirname, '/node_modules')));

app.use('*', router);

app.use(function(err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})


db.sync()
    .then(function() {
        var PORT = process.env.PORT || 3000;
        app.listen(PORT, function() {
            console.log('Live at Port 3000');
        });
    })
    .catch(function(err) {
        console.error(chalk.red(err.stack));
    });