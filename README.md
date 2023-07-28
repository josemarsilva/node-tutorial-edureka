## 1. Introdução

Este repositório contém os artefatos do projeto / laboratório   **node-tutorial-edureka**.  Este projeto / laboratório consiste em:
* Tutorial Node JS Full Course - Leran Nde.js in 7 hours | Node.js Tutorial for Beginners | Edureka

##### Table of Contents  
- [1. Introdução](#1-introdução)
- [2. Documentação](#2-documentação)
  * [2.9. Glossário de Termos (Glossary)](#29-glossário-de-termos-glossary)
- [3. Projeto / Laboratório](#3-projeto--laboratório)
  * [3.1. Pré-Requisitos, Pré-Condições e Premissas](#31-pré-requisitos-pré-condições-e-premissas)
    + [3.1.1. Tecnologias e ferramentas](#311-tecnologias-e-ferramentas)
    + [3.1.2. Ferramental de apoio](#312-ferramental-de-apoio)
  * [3.5. Guia de Estudo](#35-guia-de-estudo)
    + [3.5.1. Node.js First Example](#351-node-js-first-example)
    + [3.5.2. Blocking and Non-Blocking](#352-blocking-and-non-blocking)
    + [3.5.3. NPM - Modules, Globas and Timers](353-npm---modules-globals-and-timers)
    + [3.5.4. Filesystem](#354-filesystem)
    + [3.5.5. Events](#355-events)
    + [3.5.6. HTTP](#356-http)
    + [3.5.7. Data Types, Variables, Operators, Functions](#357-data-types-variables-operators-functions)
    + [3.5.8. Express](#358-express)
    + [3.5.9. Hands on Express features, Routing and REST API](#359-hands-on-express-features-routing-and-rest-api)
    + [3.5.10. Hands on Express Generator](#3510-hands-on-express-generator)
    + [3.5.11. RESTfull API](#3511-restfull-api)
    + [3.5.12. Hands on fast-xml-parser](#3512-hands-on-fast-xml-parser)
    + [3.5.13. Hands On Laboratory Creating Node.js Project with dependencies (express, jade, nano, body-parser, errorhandler, url, serve-favicon, logger, json, express-session)](#3513-hands-on-laboratory-creating-nodejs-project-with-dependencies-express-jade-nano-body-parser-errorhandler-url-serve-favicon-logger-json-express-session)
    + [3.5.14. Hands on Node.js and Docker](#3514-hands-on-node-js-and-docker)
    + [3.5.15. Hands on MEAN (Mongodb, Express, Angular, Node.js) Stack Application CRUD Tutorial](#3515-hands-on-mean-(mongodb,-express,-angular,-node.js)-stack-application-crud-tutorial)



## 2. Documentação

### 2.9. Glossário de Termos (Glossary)

De uma forma geral, vamos tentar <ins>definir</ins> e <ins>caracterizar</ins> alguns dos termos utilizados neste projeto para permitir uma melhor compreensão e entendimento:

| Termo       | Significado                     |
| :---------- | :------------------------------ |
| `npm`       | Node Package Manager: Provides online repositories for node.js packages/modules, provides command line utility to install Node.js pacakges. |



## 3. Projeto / Laboratório

### 3.1. Pré-Requisitos, Pré-Condições e Premissas

#### 3.1.1. Tecnologias e ferramentas

* NodeJS (Development, Build and Deploy)


#### 3.1.2. Ferramental de apoio

* Ferramenta: [Draw.IO](https://app.diagrams.net/) (only for diagrams design and documentation)


### 3.5. Guia de Estudo

### 3.5.1. Node Js First Example

* [Node Js First Example | Node JS Full Course - Learn Node.js in 7 Hours | Node.js Tutorial for Beginners | Edureka](https://www.youtube.com/watch?v=JnvKXcSI7yk&t=1010s)

* Crie pasta para o projeto e um arquivo `first_example.js` com um comando simples:

```cmd
C:\..\> md node-tutorial-edureka
C:\..\> cd node-tutorial-edureka
C:\..\> cd
C:\...\node-tutorial-edureka
```

* Edit `first_example.js` and Run

```cmd
C:\..\> node first_example.js
Welcome to Edureka
```

### 3.5.2. Blocking and Non-Blocking

* [Blocking and Non-Blocking | Node JS Full Course - Learn Node.js in 7 Hours | Node.js Tutorial for Beginners | Edureka](https://www.youtube.com/watch?v=JnvKXcSI7yk&t=1050s)

* Edit `text.txt`, `blocking.js`,  `non-blocking.js` and Run

```cmd
C:\..\>node blocking.js
Welcome Edureka
End here!
```

### 3.5.3. NPM - Modules, Globals and Timers

* [NPM Modules, Globals and Timers | Node JS Full Course - Learn Node.js in 7 Hours | Node.js Tutorial for Beginners | Edureka](https://www.youtube.com/watch?v=JnvKXcSI7yk&t=1430s)

* Comandos básicos: 
  * `npm install`: instala todos os módulos do `package.json`; 
  * `npm install <module-name>`: instala um módulo específico; 
  * `npm install <module-name> -g`: instala dependências globais;
  * pasta `node_modules` contém os binários dos módulos instalados no projeto;
* Global Objects
  * `__dirname`: diretório corrente que contém o código
  * `__filename`: nome do arquivo corrente que contém o código
* Timer in Node.js is an internal construt that calls a given function after certain period of time:
  * `setTimeout(callback, delay, [...args])`
  * `setInterval(callback, delay, [...args])`
  * `setImmediate(callback, delay, [...args])`

* [NPM Tutorial | Node JS Full Course - Learn Node.js in 7 Hours | Node.js Tutorial for Beginners | Edureka](https://www.youtube.com/watch?v=JnvKXcSI7yk&t=7117s)

  * Provides online repositories for packages/modules for Node.js
  * Provides CLI
  * Helps on incorporate pre-build packages in your project, download various standalone tools, run package without having to download it, share code betweens developers, create virtual teams to share codes, automatically update application. Example of NPM modules: **express**, **body-parser**, **nodemon**, **babel-core**, **lodash**, **react**, **request**, **async**, etc



### 3.5.4. Filesystem

* [Filesystem | Node JS Full Course - Learn Node.js in 7 Hours | Node.js Tutorial for Beginners | Edureka](https://www.youtube.com/watch?v=JnvKXcSI7yk&t=1615s)
* [Filesystem | Node JS Full Course - Learn Node.js in 7 Hours | Node.js Tutorial for Beginners | Edureka](https://www.youtube.com/watch?v=JnvKXcSI7yk&t=5394s)

* File I/O is provided by simple wrappers `fs`
* File System functions podem ser Synchronous read ou Assynchronous
* File System functions used: open, path, flags, close, read, create, updae, delete and rename files
  * fs.open(path, flag[,mode],callback)
  * fs.openSync(path, flag[,mode])
  * fs.close(fd,callback)
  * read(fd, buffer, offset, length, position, callback)
  * readFile(file[,options],callback)

* [Filesystem exercices | Node JS Full Course - Learn Node.js in 7 Hours | Node.js Tutorial for Beginners | Edureka](https://www.youtube.com/watch?v=JnvKXcSI7yk&t=5395s)

* Edit `file.txt`, `filesystem-read-write.js` and Run

```cmd
C:\..\>node filesystem-read-write.js
```



### 3.5.5. Events

* [Events | Node JS Full Course - Learn Node.js in 7 Hours | Node.js Tutorial for Beginners | Edureka](https://www.youtube.com/watch?v=JnvKXcSI7yk&t=1905s)
* [Events | Node JS Full Course - Learn Node.js in 7 Hours | Node.js Tutorial for Beginners | Edureka](https://www.youtube.com/watch?v=JnvKXcSI7yk&t=6000s)
* [Events | Node JS Full Course - Learn Node.js in 7 Hours | Node.js Tutorial for Beginners | Edureka](https://www.youtube.com/watch?v=JnvKXcSI7yk&t=5625s)


* Node.js is event-driven architecture: Certain objects (emitters) periodically emit events which further invokes the listeners
* Node.js provide concurrency by using the concept of events and callbacks
* All objects that emit events are instances of EventEmitter class

* Edit `text.txt`, `events.js` and Run

```cmd
C:\..\>node events.js
```
* Edit `events-emitter-listener.js` and Run and test in your browser `http://localhost:3000`

```cmd
C:\..\>node events.js
```


### 3.5.6. HTTP

* [HTTP | Node JS Full Course - Learn Node.js in 7 Hours | Node.js Tutorial for Beginners | Edureka](https://www.youtube.com/watch?v=JnvKXcSI7yk&t=1985s)

* Edit `index.html`, `http.js`
* Run `http.js`

```cmd
C:\..\> node http.js
```

* Open following url in your browser `http://localhost:3000/index.html` and observe browser result and logs

```browser
index.html - file
```

```log
Request for /index.html received.
Request for /favicon.ico received.
[Error: ENOENT: no such file or directory, open 'C:\GitHome\ws-github-03\node-tutorial-edureka\favicon.ico'] {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'C:\\GitHome\\ws-github-03\\node-tutorial-edureka\\favicon.ico'
}
```

* Open following url in your browser `http://localhost:3000/text.txt` and observe browser result and logs

```browser
Welcome Edureka
```

```logs
Request for /text.txt received.
```

* [HTTP | Node JS Full Course - Learn Node.js in 7 Hours | Node.js Tutorial for Beginners | Edureka](https://www.youtube.com/watch?v=JnvKXcSI7yk&t=6277s)

* Web Application Architecture:
  * **Client**: This layer consist of web browsers, mobile browsers or applications wich can make HTTP requests to the web server
    * **Mobile Browser**
    * **Web Browser**
    * **Application**
  * **Server**: This layer consist of web server which can intercept request made by the clients and response them
    * **Web Server**
  * **Business Layer**: This layer contains the application server which is utilized by the server to do the required processing. This layer interact data layer via database or external programs
    * **Application Server**
    * **File System**
  * **Data Layer**: This layer contains the database or any other source of data
    * **Database**
    * **External System**

* Edit `http-server.js`, Run `http-server.js` and Test `http://localhost:8082`

```cmd
C:\..\> node http-server.js
```



### 3.5.7. Data Types, Variables, Operators, Functions

* [Data Types | Node JS Full Course - Learn Node.js in 7 Hours | Node.js Tutorial for Beginners | Edureka](https://www.youtube.com/watch?v=JnvKXcSI7yk&t=5012s)

* Primitive Data Types: `String`, `Number`, `Boolean`, `Null`, `Undefined`
* Non Primitives Data Types: `Object`, `Date`, `Array`
* Declare variable: `var varName = value;`
* Operators:
  * Arithmetic: `+`, `-`, `/`, `*`, `%`, `++`, `--`
  * Assignment: `=`, `+=`, `-=`, `*=`, `/=`, `%=`
  * Conditional: `=?`
  * Comparison: `==,` `===`, `!=`, `!==`, `>`, `>=`, `<`, `<=`
  * Logical: `&&` (and), `||` (or), `!` (not)
  * Bitwise: `&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`

* Edit `datatypes-variables-operarators-functions.js` and Run

```cmd
C:\..\>node datatypes-variables-operarators-functions.js
```

* [Objects | Node JS Full Course - Learn Node.js in 7 Hours | Node.js Tutorial for Beginners | Edureka](https://www.youtube.com/watch?v=JnvKXcSI7yk&t=5348s)

* Edit `objects.js` and run

```cmd
C:\..\>node objects.js
```

### 3.5.8. Express

* [Express | Node JS Full Course - Learn Node.js in 7 Hours | Node.js Tutorial for Beginners | Edureka](https://www.youtube.com/watch?v=JnvKXcSI7yk&t=6342s)
* [Express features | Node JS Full Course - Learn Node.js in 7 Hours | Node.js Tutorial for Beginners | Edureka](https://www.youtube.com/watch?v=JnvKXcSI7yk&t=9092s)

* Express is a Node.js framework which facilitates the management of the flow of data between server and routes in the server-side applications
  * Faster application development
  * Provides 2 templates engines: Jade and EJS
  * Helps in building application of single-page, muli-page and hybrid types
  * Helps to connect any database: MySQL, Redis, MongoDB, etc
  * Simplifies configuration and custumize applications
  * Defines an error handling process

* Install Express a **third party** library

```bash
$ npm install express
```

* Edit `express-demo.js`, `db.json`
* Run `express-demo.js`

```cmd
C:\..\> node express-demo.js
```

* See also:
  * https://expressjs.com/pt-br/
  * https://www.npmjs.com/package/express


### 3.5.9. Hands on Express features, Routing and REST API

* [Hands on Express features, Routing and REST API | Node JS Full Course - Learn Node.js in 7 Hours | Node.js Tutorial for Beginners | Edureka](https://www.youtube.com/watch?v=JnvKXcSI7yk&t=9092s)

* Create a folder for hands on laboratory

```bash
$ mkdir node-express-tutorial
$ cd node-express-tutorial
```

* Run npm init and answer <enter> for each configuration item accepting defaults values
  * Edit to inspect content of file `package.json`
  * List sub-folder `ls -la ./node_modules` where news modules are installed

```bash
$ npm init
$ npm install express --save
```

* Edit/Create `server.js` - Import Express library, create application, define a default get method and run server listening port 8080
* Run application `node server.js` and Test using browser to acess `http://localhost:8080`. Expected page content is `Hello World Express Tutorial !!! \o/`

```bash
$ node server.js
```

* Edit/Create file `server.js` - Configure Routing methods [`GET`, `POST`] and Test them.
  * Observe result and log

```bash
$ curl http://localhost:8080
<h1>Hello World Express Tutorial</h1> <br> You have done a <b>GET</b> successfully !!! \o/ 

$ curl -X POST http://localhost:8080 -d '{"key1": "value1", "key2": "value2"}'
<h1>Hello World Express Tutorial</h1> <br> You have done a <b>POST</b> successfully !!! \o/ 
```

```log
Server started and running on 8080
GET /
POST /
```

### 3.5.10. Hands on Express Generator

* [Hands on Express Generator | Node JS Full Course - Learn Node.js in 7 Hours | Node.js Tutorial for Beginners | Edureka](https://www.youtube.com/watch?v=JnvKXcSI7yk&t=9897s)

* Create a folder for hands on laboratory

```bash
$ mkdir node-express-generator-tutorial
$ cd node-express-generator-tutorial
```

* Run npm init and answer <enter> for each configuration item accepting defaults values
  * Edit to inspect content of file `package.json`
  * List sub-folder `ls -la ./node_modules` where news modules are installed

```bash
$ npm init
	:
	a lot of <enter> later ...
	:
$ sudo npm install express-generator -g
```

* Run Express Generator, install dependencies

```bash
$ express
	:
destination is not empty, continue? [y/N] y
	:
   create : public/
   create : routes/
   create : views/
   create : app.js
   create : package.json
   create : bin/
   create : bin/www
	:
$ npm install
```

* Start application and Test opening browser `http://localhost:3000`

```bash
npm start
	:
> node-express-generator-tutorial@0.0.0 start
> node ./bin/www
	:
```

* Observe application generated:
  * `package.json`: key "script/start" points to "node ./bin/www"
  * `./app.js`: main application
  * sub-folders: 
    * `./bin`: main program generated that runs http server;  
	* `./public`: public and statics documents, images, styles, etc
	* `./routes`: path routing
	* `./views`: views in jade format


### 3.5.11. RESTfull API

* [Hands on Express Generator | Node JS Full Course - Learn Node.js in 7 Hours | Node.js Tutorial for Beginners | Edureka](https://www.youtube.com/watch?v=JnvKXcSI7yk&t=10092s)

* **REST** is **RE** presentantion of **S** tate **T** ransfer: architectural style as well approach for communications with various web services
* Priciples of REST API: **Stateless**, **Client Server**, **Uniform Interface**, **Cacheable**, **Layered** and **Code on Demand**
* Methods: **GET**, **POST**, **PUT** and **DELETE**

* Create a folder to hands on the laboratory

```bash
$ mkdir node-restfull-api-express-generator-tutorial
$ cd node-restfull-api-express-generator-tutorial
```

* Run npm init and answer <enter> for each configuration item accepting defaults values
  * Edit to inspect content of file `package.json`
  * List sub-folder `ls -la ./node_modules` where news modules are installed

```bash
$ npm init
	:
	a lot of <enter> later ...
	:
```

* Install dependencies

```bash
$ npm install --save express
```

* Create/Edit `application.js`
* Run application `node application.js` and Test:
  * Test GET on `http://localhost:3000`
    * `curl http://localhost:3000` or via browser
  * Test GET on `http://localhost:3000/people`
    * `curl http://localhost:3000/people` or via browser
  * Test POST on `http://localhost:3000/people` using Postman
    * `curl -X POST http://localhost:3000/people -d '{"name": "Josemar" }'`





### 3.5.12. Hands on fast-xml-parser

* [A beginner’s guide to parse and create XML with Node.js](https://geshan.com.np/blog/2022/11/nodejs-xml-parser/#parse-xml-with-nodejs)

* Create a folder for handson-express

```bash
$ mkdir node-fast-xml-parser
$ cd node-fast-xml-parser
```

* Run npm init and answer <enter> for each configuration item accepting defaults values
  * Edit to inspect content of file `package.json`
  * List sub-folder `ls -la ./node_modules` where news modules are installed

```bash
$ npm init
$ npm install fast-xml-parser --save
```

* Create/Copy-and-Paste sub-folder `./xml` the following files: `books.xml` and `nfe-1.xml`
* Edit/Create `eval-fast-xml-parser.js` 
* Run application `node server.js` and Test 



### 3.5.13. Hands On Laboratory Creating Node.js Project with dependencies (express, jade, nano, body-parser, errorhandler, url, serve-favicon, logger, json, express-session)

* [Hands On Node.js Project Express, jade, nano, Apache CouchDB, etc | Node JS Full Course - Learn Node.js in 7 Hours | Node.js Tutorial for Beginners | Edureka](https://www.youtube.com/watch?v=JnvKXcSI7yk&t=2090s)

* Download and install `apache-couchdb-3.3.2.msi` database from https://couchdb.apache.org/
  * Run Apache CouchDB `http://localhost:5984/_utils/index.html#login`
  * Login using same username and password for installation
  * Create a database called `adddress`
  * Click on left tool bar icon of setup `http://localhost:5984/_utils/index.html#setup/singlenode` and setup Apache CouchDB
    * Use login and password informed in installation
    * Bind address the node will listen on: `0.0.0.0`, Port: `5984`
    * Click on `Configure Node`
  * Run windows command `services.msc` and look for `Apache CouchDB` service name. Check if it is running
  * Be sure firewall port `5984` is opened
  * For more about Apache CouchDB see this [tutorial video](https://www.youtube.com/watch?v=nlqv9Np3iAU)


* Create a new Node.js project folder and initialize project

```bash
$ mkdir node-express-jade-nano-coachdb
$ cd node-express-jade-nano-coachdb
$ npm init
  :
  a lot of <enter> later ...
  :
```

* Install dependencies and observe the results in file `package.json` and sub-folder `.\node_modules`

```cmd
$ npm install express --save
$ npm install jade --save
$ npm install nano --save
$ npm install body-parser --save
$ npm install errorhandler --save
$ npm install url --save
$ npm install serve-favicon --save
$ npm install logger --save
$ npm install json --save
$ npm install express-session --save
$ npm install method-override --save
$ npm install ejs --save
$ npm install --save
$ npm audit fix --force
```

```bash
$ ls -la 
     :            :             :         :   :  :    :
drwxrwxrwx 1 josemarsilva josemarsilva   512 Jul 27 17:44 node_modules
-rwxrwxrwx 1 josemarsilva josemarsilva 46416 Jul 27 17:44 package-lock.json
-rwxrwxrwx 1 josemarsilva josemarsilva   565 Jul 27 17:44 package.json
     :            :             :         :   :  :    :
$ cat package.json
{
  "name": "express-jade-nano-coachdb",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.20.2",
    "ejs": "^3.1.9",
    "errorhandler": "^1.5.1",
    "express": "^4.18.2",
    "express-session": "^1.17.3",
    "jade": "^0.31.2",
    "json": "^11.0.0",
    "logger": "^0.0.1",
    "method-override": "^3.0.0",
    "nano": "^10.1.2",
    "serve-favicon": "^2.5.0",
    "url": "^0.11.1"
  }
}
```

* Edit `app.js`
* Create sub-folder(s):  `./routes` and `./views`
* Create/edit/configure view(s) layout(s): `./views/index.jade` for default extendable pages
* Create/edit/configure view(s) layout(s): `./views/layout.jade` for initial page with main commands: new Contact, new Database, etc
* Create/edit/configure route(s): `./routes/index.js`
* Create/edit/configure route(s): `./routes/createdb.js`
* Run application

```bash
$ node app.js
```

* Open application on your browser
  * `http://localhost:3000`
* Test Application
  * Create contacts records: `[ {"name": "Um", "phone": "1"}, {"name": "Dois", "phone": "2"}, {"name": "Tres", "phone": "3"} ]`
  * Create database `teste`
  * Delete record `1`
  * View record `2`


### 3.5.14. Hands on Node.js and Docker

* [Hands on Express Generator | Node JS Full Course - Learn Node.js in 7 Hours | Node.js Tutorial for Beginners | Edureka](https://www.youtube.com/watch?v=JnvKXcSI7yk&t=17118s)

* Create a folder to hands on the laboratory

```bash
$ mkdir node-docker-express-tutorial
$ cd node-docker-express-tutorial
```

* Run npm init and answer <enter> for each configuration item accepting defaults values
  * Edit to inspect content of file `package.json`
  * List sub-folder `ls -la ./node_modules` where news modules are installed

```bash
$ npm init
	:
	a lot of <enter> later ...
	:
```

* Install dependencies

```bash
$ npm install --save express
```

* Create/Edit `app.js`
* Run application `node app.js`
* Test application
  * GET on `http://localhost:3000` using curl or browser
    * via curl: `curl http://localhost:3000`
    * browser: url `http://localhost:3000`


* Create/Edit `Dockerfile` and configure with Node
  * Use DocherHub documentation `https://hub.docker.com/_/node`, look for "How to use this image
  * Configure `Dockerfile` with best practices and official documentation sugestion

* Build Docker Container image

```bash
$ docker build -t node-docker-express-tutorial .
$ docker image ls
REPOSITORY                    TAG     ID             CREATED         SIZE
   :                           :       :                :             :
node-docker-express-tutorial  latest  418785daeb07   2 minutes ago   916MB
   :                           :       :                :             :
```

* Run Docker Container image

```bash
$ docker run -d -p 3000:3000 node-docker-express-tutorial
```

* Test application
  * GET on `http://localhost:3000` using curl or browser observe result `Hello from Docker !`
    * via curl: `curl http://localhost:3000`
    * browser: url `http://localhost:3000`


### 3.5.15. Hands on MEAN (Mongodb, Express, Angular, Node.js) Stack Application CRUD Tutorial

* [Hands on Express and MongoDB | Node JS Full Course - Learn Node.js in 7 Hours | Node.js Tutorial for Beginners | Edureka](https://www.youtube.com/watch?v=JnvKXcSI7yk&t=17918s)

* Melhor laboratório de Node.js, mongoDB, Angular
* What is Mean?
  * Mongodb, Express, Angular and Node.js application

* Create a folder to hands on the laboratory

```bash
$ mkdir node-express-mongodb-angular-tutorial
$ cd node-express-mongodb-angular-tutorial
```

* Run npm init and answer <enter> for each configuration item accepting defaults values
  * Edit to inspect content of file `package.json`
  * List sub-folder `ls -la ./node_modules` where news modules are installed

```bash
$ npm init
	:
	a lot of <enter> later ...
	:
```

* Install dependencies

```bash
$ npm install express --save
$ npm install mongoose cors body-parser --save
$ # npm install nodemon --save
```

* Create/Edit `app.js`
* Run application `node app.js`
* Test application
  * GET on `http://localhost:3000` using curl or browser
    * via curl: `curl http://localhost:3000`
    * browser: url `http://localhost:3000`
    * expected return is `Hello !!!`
  * GET on `http://localhost:3000/api/contacts` using curl or browser
    * via curl: `curl http://localhost:3000/api/contacts`
    * browser: url `http://localhost:3000/api/contacts`
    * expected return is `Retrieving the contact list`

* Create sub-folder routes `./routes` and Create/Edit routes files `./routes/route.js`
* Create sub-folder routes `./public` and Create/Edit routes files `./public/index.html`
* Create sub-folder routes `./models` and Create/Edit routes files `./models/contacts.js`
* Edit `./routes/route.js` and implement contact schema, post and delete method 

* Run mongoDB container

```bash
$ docker run -d -p 27017:27017 --name node-express-mongodb-angular-tutorial -e MONGO_INITDB_ROOT_USERNAME=mongouser -e MONGO_INITDB_ROOT_PASSWORD=mongopassword mongo
```

* Edit `app.js` and implement connection to mongodb database
* Run application `node app.js` expected console log messages are:

```log
Server started listening port 3000
Connected to database mongodb @ localhost:27017`
```

* Test application
  * GET on `http://localhost:3000` using curl or browser or postman
    * via curl: `curl http://localhost:3000`
    * browser: url `http://localhost:3000`
    * expected return is `Hello !!!`
  * GET on `http://localhost:3000/api/contacts` using curl or browser or postman
    * via curl: `curl http://localhost:3000/api/contacts`
    * browser: url `http://localhost:3000/api/contacts`
    * expected return message is `Retrieving the contact list`
  * POST on `http://localhost:3000/api/contact` using postman
    * url: `http://localhost:3000/api/contact`
    * body (JSON): `{ "first_name": "Bruce", "last_name": "Wayne", "phone": "(11)9191-9191" }`
    * expected return message:

```json
{
    "msg": "Contact added successfully",
    "contact": {
        "first_name": "Bruce",
        "last_name": "Wayne",
        "phone": "(11)9191-9191",
        "_id": "64c2f9dfecc7e7bf42f9853c"
    }
}
```

* Test application
  * GET on `http://localhost:3000/api/contacts` using curl or browser or postman
    * via curl: `curl http://localhost:3000/api/contacts`
    * browser: url `http://localhost:3000/api/contacts`
    * expected return message is:

```json
[
    {
        "_id": "64c2f1b5966a30c5722e220f",
        "first_name": "Bruce",
        "last_name": "Wayne",
        "phone": "(11)9191-9191",
        "__v": 0
    },
    {
        "_id": "64c2f9dfecc7e7bf42f9853c",
        "first_name": "Bruce",
        "last_name": "Wayne",
        "phone": "(11)9191-9191",
        "__v": 0
    }
]
```

* Test application
  * DELETE on `http://localhost:3000/api/contact/64c2f1b5966a30c5722e220f` using postman
    * expected return message:

```json
{"msg":"Contact deleted successfully"}
```


* [Hands on Angular and Express and MongoDB | Node JS Full Course - Learn Node.js in 7 Hours | Node.js Tutorial for Beginners | Edureka](https://www.youtube.com/watch?v=JnvKXcSI7yk&t=20520s)



## I - Referências

* [Node JS Full Course - Learn Node.js in 7 Hours | Node.js Tutorial for Beginners | Edureka](https://www.youtube.com/watch?v=JnvKXcSI7yk&list=PLORrDfZD1hkGDVKuuxZPq6770NpM5Y6kK)
