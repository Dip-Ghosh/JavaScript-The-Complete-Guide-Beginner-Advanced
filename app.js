const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

//middleware to parse URL encoded data
app.use(bodyParser.urlencoded({extended: false}));

//middleware to set response header for html
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'text/html');
    next();
})

//main route to handle POST request
app.use((req, res) => {
    const body = req.body || {};
    let userName = body.username;

    if (!userName) userName = 'Unknown';

    res.render('index', {
        user: userName,
    })
})


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});