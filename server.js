const express = require('express');
const app = express();
const path = require('path');
const router = require('./modules/router');
const port = process.env.PORT || '8888';

app.set('view engine',"pug");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname,'public')));

app.use("/", router);

app.listen(port, ()=>{
    console.log("App ready on http://localhost:8888/")
})

