const express = require('express');
const redis = require('redis');

import('node-fetch').then(fetch => {
    // Now you can use the fetch function
  }).catch(error => {
    // Handle errors
  });
  
const PORT = process.env.PORT || 3000;
const REDIS_PORT = process.env.PORT || 6379;

const client = redis.createClient(REDIS_PORT);

const app = express();

// getRepos()
async function getRepos(req, res, next) {
    try {
        const { username } = req.params;

        const response = await fetch(`https://api.github.com/users/${username}`);
        
        const data = await response.json();
        
        const repo = data.public_repos;

        // Set data to Redis ( key, expiration, )
        client.setEx(username, 3600, repos);

        const client = redis.createClient(REDIS_PORT);

        res.send(setResponse(username, repos));

    } catch (err) {
        console.error(err);
        res.status(500);
    }
}

// setResponse()
function setResponse(username, repos) {
    return `<h2>${username} has ${repos} Github repos`
}

// cache middleware function
function cache(req, res, next) {
    const { username } = req.prams;

    client.get(username, (err, data) => {
        if (err) throw err;

        if (data !== null) {
            res.send(setResponse(username,data));
        } else {
            next();
        }
    })
}

app.get('/repos/:username', getRepos);
// app.get('/repos/:username', cache, getRepos);

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);

});
