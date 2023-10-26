require("dotenv").config();
const express = require('express');

const app = express();

app.use(express.json());

app.use("/qualquer-coisa", (req, res, next) => {
    // watching path(s): *.*
});

app.use("/", (req, res, next) => {
    console.log('GET /');
    console.log('req.originalUrl:', req.originalUrl);
    console.log('req.body:', req.body);
    res.send(`GET / - Hello World - Node Express WebHooks!`);
});


app.listen(process.env.PORT, () => {
    console.log("Server started at " + process.env.PORT);
});