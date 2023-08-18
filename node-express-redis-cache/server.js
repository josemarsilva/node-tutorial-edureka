const express = require('express');
const app = express();

const { createClient} = require ('redis');
const client = createClient(); // default IP 127.0.0.1,  port 6379

let counter = 0;


app.get("/", (req,res) => {
    console.log("/");
    res.send({
        ok: true
    });
});


app.get("/products", (req, res) => {
    console.log("/products");
    const products = [{'1': 'Product 1'}, {'2': 'Product 2'}, {'3': 'Product 3'}];
    res.send(products);
});


const getAllProducts = async() => {
    const time = Math.random() * 5000; // 0 .. 5 seconds
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve([{'1': 'Product 1'}, {'2': 'Product 2'}, {'3': 'Product 3'}]);
        }, time);
    });
};


app.get("/products-throttling", async (req, res) => {
    console.log("/products-throttling");
    const products = await getAllProducts();
    res.send(products);
});


app.get("/product-set", async (req, res) => {
    console.log("/product-set");
    key = "key";
    value = "value" + "-" + counter++;
    await client.set(key, value);
    const setKeyValue = { "key": key, "value": value}
    res.send(setKeyValue);
});


app.get("/product-get", async (req, res) => {
    console.log("/product-get");
    const key = "key"
    const value = await client.get(key);
    const setKeyValue = { "key": key, "value": value}
    res.send(setKeyValue);
});


app.get("/product-del", async (req, res) => {
    console.log("/product-del");
    const key = "key"
    await client.del(key);
    const delKey = `key "${key}" was deleted!`;
    res.send(delKey);
});


app.get("/product-set-key-value-expiration/:key/:value/:expiration", async (req, res) => {
    const key = req.params.key;
    const value = req.params.value;
    const ex = req.params.expiration;
    let expirationInSeconds = 60; // default 60 seconds
    try {
        expirationInSeconds = Number(ex);
    } catch (e) {
        // If there's an error, the default value (60) will be used.
    }
    console.log(`/product-product-set-key-value-ex - key: ${key}, value: ${value}, ${expirationInSeconds}`);
    await client.set(key, value, {'EX': expirationInSeconds});
    const setKeyValue = { "key": key, "value": value}
    res.send(setKeyValue);
});


app.get("/product-get-key/:key", async (req, res) => {
    const key = req.params.key;
    console.log(`/product-get-key/:key - key: ${key}`);
    const value = await client.get(key);
    console.log(`  - value: ${value}`);
    const setKeyValue = { "key": key, "value": value}
    res.send(setKeyValue);
});


app.get("/product-del-key/:key", async (req, res) => {
    const key = req.params.key;
    console.log(`/product-del-key - key: ${key}`);
    await client.del(key);
    const delKey = `key "${key}" was deleted!`;
    res.send(delKey);
});


const getProductFromSourceWithThrottling = async (key) => {
    console.log(`  - getProductFromSourceWithThrottling() - ${key}`);
    const time = Math.random() * 5000; // 0 .. 5 seconds
    return new Promise((resolve) => {
        setTimeout(async () => { // Mark this inner function as async
            const time = Math.random() * 5000; // 0 .. 5 seconds
            let expirationInSeconds = 60; // default 60 seconds
            value = "value" + "-" + counter++;

            await client.set(key, value, {'EX': expirationInSeconds});
            resolve(value);
        }, time);
    });
};


app.get("/product-get-cache/:key", async (req, res) => {
    const key = req.params.key;
    console.log(`/product-get-cache - key: ${key}`);
    let valueFromCache = await client.get(key);
    if (valueFromCache) {
        console.log("  - from Cache");
    } else {
        console.log("  - from Source");
        valueFromCache = await getProductFromSourceWithThrottling(key); // Await here
    }
    const setKeyValue = { "key": key, "value": valueFromCache}
    res.send(setKeyValue);
});


const startup = async() => {
    await client.connect();
    app.listen(3000, () => {
        console.log('Server running on port 3000');
    });
};


startup();