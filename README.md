## 1. Introdução

Este repositório contém os artefatos do projeto / laboratório   **study-node**.  Este projeto / laboratório consiste em diversos tutoriais de estudo de Node JS

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
    + [3.5.16. Angular and RxJS](#3516-angular-and-rxjs)
    + [3.5.17. Hands on Node.js Selenium WebDriver ChromeDriver](#3517-handson-on-node-js-selenium-webdriver-chromedriver)
    + [3.5.18. Hands on Node.js Cucumber Selenium ](#3518-hands-on-node--express-and-redis)
    + [3.5.19. Hands On Node, Express, Redis e Cache](#3519-hands-on-node-express-redis-e-cache)
    + [3.5.20. Hands On Node, Express, Redis and Node-Fetch](#3520-hands-on-node-express-redis-e-cache)
    + [3.5.21. Curso Angular - Loiane Groner](#3521-curso-angular-loiane-groner)
 


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
$ npm init -y # or a lot of <enter> later
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
$ npm init -y # or a lot of <enter> later
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
$ npm init -y # or a lot of <enter> later
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
$ npm init -y # or a lot of <enter> later
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
$ npm init -y # or a lot of <enter> later
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
$ npm init -y # or a lot of <enter> later
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

#### a. API

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
$ npm init -y # or a lot of <enter> later
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

#### b. Angular

* [What is Angular | Node JS Full Course - Learn Node.js in 7 Hours | Node.js Tutorial for Beginners | Edureka](https://www.youtube.com/watch?v=JnvKXcSI7yk&t=18073s)
* [Hands on Angular and Express and MongoDB | Node JS Full Course - Learn Node.js in 7 Hours | Node.js Tutorial for Beginners | Edureka](https://www.youtube.com/watch?v=JnvKXcSI7yk&t=20520s)

* Install dependencies

```bash
$ sudo npm install -g @angular/cli
$ npm install @angular/cli --save
```

* Create angular project

```bash
$ npx ng new client
```

* Observe the results of angular projects created
  * new dependencies node_module installed `./node_modules/@angular/cli`
  * new sub-folder(s): `./client`, `./client/src`
  * new app typescript components file(s): `./client/src/app/app.component.ts`
    * observe content `... export class AppComponent ... title = 'client' ...`
  * new html component loader file(s): `./client/src/index.html`

* Start Angular project using command `npm start` or `ng serve` from `./client`

```bash
$ cd ./client
$ pwd
 ... /node-tutorial-edureka/node-express-mongodb-angular-tutorial/client
$ echo 'To run app you can use "npm start" or "ng serve"'
$ npm start
   :
Generating browser application bundles (phase: setup)...
   :
Generating browser application bundles (phase: building)...
   :
✔ Compiled successfully.
```

* Test application
  * GET on `http://localhost:4200` using browser or postman
  * expected result is a page like `... client app is running! ... Next Steps ...`
  * Stop aplication with `^C`

* Help in command line

```bash
$ ng --help
ng <command>

Commands:
  ng add <collection>            Adds support for an external library to your project.
  ng analytics                   Configures the gathering of Angular CLI usage metrics.
  ng build [project]             Compiles an Angular application or library into an output directory named dist/ at the given output path.          [aliases: b]  ng cache                       Configure persistent disk cache and retrieve cache statistics.
  ng completion                  Set up Angular CLI autocompletion for your terminal.
  ng config [json-path] [value]  Retrieves or sets Angular configuration values in the angular.json file for the workspace.
  ng deploy [project]            Invokes the deploy builder for a specified project or for the default project in the workspace.
  ng doc <keyword>               Opens the official Angular documentation (angular.io) in a browser, and searches for a given keyword.              [aliases: d]  ng e2e [project]               Builds and serves an Angular application, then runs end-to-end tests.                                              [aliases: e]  ng extract-i18n [project]      Extracts i18n messages from source code.
  ng generate                    Generates and/or modifies files based on a schematic.                                                              [aliases: g]  ng lint [project]              Runs linting tools on Angular application code in a given project folder.
  ng new [name]                  Creates a new Angular workspace.                                                                                   [aliases: n]  ng run <target>                Runs an Architect target with an optional custom builder configuration defined in your project.
  ng serve [project]             Builds and serves your application, rebuilding on file changes.                                                    [aliases: s]  ng test [project]              Runs unit tests in a project.                                                                                      [aliases: t]  ng update [packages..]         Updates your workspace and its dependencies. See https://update.angular.io/.
  ng version                     Outputs Angular CLI version.                                                                                       [aliases: v]
Options:
  --help  Shows a help message for this command in the console.                                                                                        [boolean]
For more information, see https://angular.io/cli/.
```

* Create a **new component** `Contacts`
  * Observe results on `./src/app/contacts/`
* Create a **new service** `contact`
  * Observe results on `./src/app/contact.service.ts` and `./src/app/contact.service.spec.ts`

```bash
$ ng g component contacts
$ ng g service contact
```
* Create sub-folder's: `../client/src/app/model`, `./src/app/services`
* Create/Edit manually a **new schema** for component **contact**
  * Edit file `./src/app/model/contact.ts` and define class and attributes using `?` for optionals
  * Edit file `./src/app/services/contact.service.ts` and import {Http, Headeres} and implement {get, add, delete}
  * Edit file `./src/app/contacts/contacts.component.ts`, import { ContactService, Contact }, declare variables { `contacts`, `contact`, `first_name`, `last_name`, `phone`}, create a `constructor()` and define a `ngOnInit()` 
  * Edit file `./src/app/contacts/contacts.component.css`, 
    * Use `http://bootswatch.com` to prototype and choose one template html. Ex: Darkly
  * Edit file `./src/app/contacts/contacts.component.html`, 
    * Write `ng*` loop code to print dinamically all contacts



### 3.5.16. Angular and RxJS

* Angular
  * [Angular Course Online Free - Tutorial for Beginners](https://www.youtube.com/watch?v=N4MF3mDPFww&list=PLEjh-YiSBCDLC_zhXQ2J5SkHrLHdmV8qc)
  * [Angular Full Course - Learn Angular in 6 Hours | Angular Tutorial For Beginners | Edureka](https://www.youtube.com/watch?v=Ati-oip_HcU)
* RXJS
  * [Learn RxJS Angular, RxJS pipe, async pipe, RxJS observables, Behaviorsubject, Combinelatest](https://www.youtube.com/watch?v=2T3F5TfrYwI)
  * [Behaviorsubject vs Subject rxjs - What to Use?](https://www.youtube.com/watch?v=TFXpoabwBfU)
  
Angular provides several lifecycle hooks that allow you to tap into different stages of a component's lifecycle. These hooks are methods that you can implement in your component class to execute custom logic at specific points in the component's lifecycle. Here are the Angular lifecycle hooks and when they should be used:
* `ngOnChanges()`: This hook is called when one or more input properties (@Input) of the component change. It receives a SimpleChanges object that provides information about the changes. 
  * Use this hook to respond to changes in input properties and perform any necessary actions based on the new values.
* `ngOnInit()`: This hook is called once after Angular has initialized the component and set up the data-bound properties. It is commonly used for initialization tasks such as initializing variables, subscribing to Observables, or fetching initial data. 
  * Use this hook to perform any setup logic that needs to happen before rendering the component.
* `ngDoCheck()`: This hook is called during every change detection cycle. It allows you to perform custom change detection and respond to changes that Angular doesn't detect automatically. 
  * Use this hook with caution, as it can impact performance if not used properly. It is generally recommended to rely on Angular's default change detection mechanism.
* `ngAfterContentInit()`: This hook is called after Angular has projected external content into the component's view. It is used when a component has projected content using the <ng-content> directive. 
  * Use this hook to perform initialization logic that relies on the content projected into the component.
* `ngAfterContentChecked()`: This hook is called after Angular has checked the projected content for any changes. It is called after every change detection cycle that includes the projected content. 
  * Use this hook when you need to perform custom logic after Angular has checked the projected content.
* `ngAfterViewInit()`: This hook is called after Angular has fully initialized the component's view and its child views (if any). It is commonly used for initialization tasks that require access to the component's view or interacting with child components. 
  * Use this hook to perform any setup logic that relies on the component's view hierarchy.
* `ngAfterViewChecked()`: This hook is called after Angular has checked the component's view and its child views for any changes. It is called after every change detection cycle that includes the component's view. 
  * Use this hook when you need to perform custom logic after Angular has checked the component's view.
* `ngOnDestroy()`: This hook is called just before Angular destroys the component and cleans up resources. It is used to perform cleanup tasks such as unsubscribing from Observables or releasing any resources held by the component. 
  * Use this hook to release resources and prevent memory leaks.

These are the primary lifecycle hooks provided by Angular. Each hook serves a specific purpose and allows you to integrate custom logic at different stages of a component's lifecycle. By understanding and leveraging these hooks, you can control the behavior and perform necessary actions at the appropriate points in your component's lifecycle.

In Angular, a component goes through a series of lifecycle stages from its creation to its destruction. The lifecycle of a component can be divided into several distinct phases, each with its corresponding lifecycle hooks. Here is an overview of the lifecycle stages of an Angular component:

* **Creation**:
  * `constructor()`: The component's constructor is called when the component is instantiated. It is used for basic initialization and dependency injection setup.
* **Initialization**:
  * `ngOnChanges()`: This hook is called when one or more input properties (@Input) of the component change. It allows you to respond to changes in input properties.
  * `ngOnInit()`: This hook is called after Angular has initialized the component's data-bound properties (@Input) and before the first change detection cycle. It is commonly used for initialization tasks.
* **Content Projection**:
  * `ngAfterContentInit()`: This hook is called after Angular has projected external content into the component's view using the <ng-content> directive. It allows you to perform initialization logic that relies on the projected content.
  * `ngAfterContentChecked()`: This hook is called after Angular has checked the projected content for any changes. It is called after every change detection cycle that includes the projected content.
* **View Initialization**:
  * `ngAfterViewInit()`: This hook is called after Angular has fully initialized the component's view and its child views (if any). It is commonly used for initialization tasks that require access to the component's view hierarchy.
  * `ngAfterViewChecked()`: This hook is called after Angular has checked the component's view and its child views for any changes. It is called after every change detection cycle that includes the component's view.
* **Component Update**:
  * `ngOnChanges()`: This hook is called again when input properties change after the component has been initialized. It allows you to respond to subsequent changes in input properties.
  * `ngDoCheck()`: This hook is called during every change detection cycle and allows you to perform custom change detection and respond to changes that Angular doesn't detect automatically.
* **Destruction**:
  * `ngOnDestroy()`: This hook is called just before Angular destroys the component and cleans up resources. It is used for cleanup tasks such as unsubscribing from Observables or releasing any resources held by the component.

Throughout these lifecycle stages, Angular performs change detection to detect and update bindings between the component and its templates. The lifecycle hooks provide opportunities to tap into these stages and execute custom logic as needed.

It's important to note that these lifecycle stages apply to Angular components and may differ for other Angular constructs like directives or services. Understanding the component lifecycle is crucial for implementing proper initialization, cleanup, and responding to changes in Angular components.


### 3.5.17. Hands on Node.js Selenium WebDriver ChromeDriver

* [Introduction to WebDriverJS — Selenium WebDriver for Node.js](https://www.youtube.com/watch?v=X3pTXG9a1oQ&list=PLt1BzgDPWET4m4c4hrOZe--apdA6P2WoA)
* [NodeJs e Selenium, como automatizar suas tarefas.](https://www.youtube.com/watch?v=-9TP-8BocdA)

* Create folder for project, init npm and install dependencies
* Download Chrome driver from https://chromedriver.chromium.org/downloads into `./chromedriver`

```bash
$ mkdir node-selenium-webdriver
$ mkdir chromedriver
$ echo chromedriver >> .gitignore
$ cd node-selenium-webdriver
$ npm init -y # or a lot of <enter> later
$ npm install selenium-webdriver --save
$ npm install chromedriver --save
```

* Create/Edit `index.js`

### 3.5.18. Hands on Node.js Cucumber Selenium

* [Selenium cucumber javascript combined](https://www.youtube.com/watch?v=C7cSKtnovEo)
* [How to - Cucumber & Selenium with Node JS](https://www.youtube.com/watch?v=bsGr6xjZ0mY)
* [Cucumber Official Documentation](https://cucumber.io/)
* [npm chai - Official](https://www.npmjs.com/package/chai)
* [npm pretty-format - Official](https://www.npmjs.com/package/pretty-format)
* [npm selenium-webdriver - Official](https://www.npmjs.com/package/selenium-webdriver)

* Create folder for project, init npm and install dependencies
* Download Chrome driver from https://chromedriver.chromium.org/downloads into `./chromedriver`

```bash
$ mkdir node-cucumber-selenium
$ cd node-cucumber-selenium
$ npm init -y # or a lot of <enter> later
$ npm install @cucumber/cucumber --save
$ npm install chai --save
$ npm install pretty-format --save
$ npm install selenium-webdriver --save
$ npm install chromedriver --save
$ mkdir chromedriver
$ echo chromedriver >> .gitignore
```

* Create a folder to store features files for cucumber, support files and common stpes files:

```bash
$ mkdir features
$ mkdir features/step-definitions
```

* Criar a estrutura de uma feature simples:
  * Create/Edit a features files with extension (.feature) `autenticar-acesso-e-login-financer.feature`
  * Create/Edit a **given** steps files with extension (.js) `./features/step-definitions/given-autenticar-acesso-e-login.js`
  * Create/Edit a **when** steps files with extension (.js) `./features/step-definitions/when-autenticar-acesso-e-login.js`
  * Create/Edit a **then** steps files with extension (.js) `./features/step-definitions/then-autenticar-acesso-e-login.js`
  * Create/Edit um arquivo para organizar as funções de uso geral e comuns `steps-util-common.js`
  * Create/Edit um arquivo para organizar as funções básicas do WebDriver `steps-webdriver.js`
  * Create/Edit um arquivo para organizar as funções de navegação de autenticação `steps-autenticar-acesso-e-login.js`
* Configurar o script de teste em `package.json` para executar a(s) features do cucumber:

```package.json
  :
"scripts": {
  "test": "./node_modules/.bin/cucumber-js",
  "test_pretty_formatter": "./node_modules/.bin/cucumber-js -f @cucumber/pretty-formatter"
}
  : 
```

* Executar(run) a feature simples criada e observar o resultado  no console: `./node_modules/.bin/cucumber-js` ou `npm run test` ou `npm run test_cmd`

```console
Before - Autenticar credenciais acessar o sistema
.Acessar o sistema pela url no ambiente desejado || url= https://frontend.hml.seuativo.com.br/
.Autenticar credenciais acessar o sistema || login= josemarsilva@inmetrics.com.br password= EHDK!hekq6m7
.Página principal de entrada do sistema será apresentada
.After - Autenticar credenciais acessar o sistema
.

1 scenario (1 passed)
3 steps (3 passed)
0m00.021s (executing steps: 0m00.002s)
┌──────────────────────────────────────────────────────────────────────────────┐
│ Share your Cucumber Report with your team at https://reports.cucumber.io     │
│                                                                              │
│ Command line option:    --publish                                            │
│ Environment variable:   CUCUMBER_PUBLISH_ENABLED=true                        │
│                                                                              │
│ More information at https://cucumber.io/docs/cucumber/environment-variables/ │
│                                                                              │
│ To disable this message, add this to your ./cucumber.js:                     │
│ module.exports = { default: '--publish-quiet' }                              │
└──────────────────────────────────────────────────────────────────────────────┘
```


### 3.5.19. Hands On Node, Express, Redis e Cache

* [CACHE com NodeJS e Redis NA PRÁTICA](https://www.youtube.com/watch?v=wVHBQILmd_8)
* [Redis - Official Documentation](https://redis.io/)

* Create a new Node.js project folder and initialize project

```bash
$ mkdir node-express-redis-cache
$ cd node-express-redis-cache
$ npm init -y # or a lot of <enter> later
```

* Install dependencies and observe the results in file `package.json` and sub-folder `.\node_modules`

```bash
$ npm install express --save
$ npm install redis --save
```

* Install, Configure and Run pre-requisites
  * Run Docker Container Redis

```bash
$ docker run --name redis -p 6379:6379 -d redis
```

* Install, Configure and Run pre-requisites
  * Download and install `https://redis.com/pt/redis-enterprise/redisinsight/` Windwos Client UI for Redis - enables you connect Redis server and see all keys

* Edit `package.json` and configure package `"main": "server.js"`

```bash
$ cat package.json
{
  "name": "express-redis-cache",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2",
    "redis": "^4.6.7"
  }
}
```

* Create/Edit `server.js`
  * Criar api que responda `/products` com uma lista de todos os produtos Ex: `[ Produto 1, Produto 2, Produto 3]`
  * Criar api que responda `/products-throttling` com uma lista de todos os produtos Ex: `[ Produto 1, Produto 2, Produto 3]` e fique variando de forma randômica o tempo de resposta de 0 até 5 segundos
  * Criar api que responda `/product-set` com o set na chave `key` da configuração default do Redis, com o valor `value-<n>` onde `n` incrementa-se sequencialmente a cada execução
  * Criar api que responda `/product-get` que retorne a tupla (chave, valor) da configuração default do Redis da chave `key`
  * Criar api que responda `/product-del` com o delete da chave `key` da configuração default do Redis
  * Criar api que responda `/product-set-key-value-expiration/:key/:value/:expiration` com o set na chave `key` da configuração default do Redis, com o valor `value`, com as opção de expiração de `expiration` segundos


  * Criar api que responda `/product-get-cache-throttling/:key` que retorne a tupla (chave, valor) da configuração default do Redis da chave `key`e fique variando de forma randômica o tempo de resposta de 0 até 5 segundos, porém utilizando o artifício cache com expiração de `60 segundos` para tornar mais rápido o acesso de informação que pode variar pouco


```bash
$ node index.js
```

* Open application on your browser, request url, enter and observe results in tool **redisinsight**:
  * `http://localhost:3000`
  * `http://localhost:3000/products`
  * `http://localhost:3000/products-throttling`
  * `http://localhost:3000/product-set`
  * `http://localhost:3000/product-get`
  * `http://localhost:3000/product-del`
  * `http://localhost:3000/product-set-key-value-expiration/key-ex/value-ex/30`
  * `http://localhost:3000/product-get-key/key-ex`
  * `http://localhost:3000/product-del-key/key-ex`
  * `http://localhost:3000/product-set-key-value-expiration/key-cache/value-cache/30`
  * `http://localhost:3000/product-get-cache/key-cache`
  * `http://localhost:3000/product-del-key/key-cache`



### 3.5.20. Hands On Node, Express, Redis and Node-Fetch

* [Redis Caching in Node.js](https://www.youtube.com/watch?v=oaJq1mQ3dFI)

* Create a new Node.js project folder and initialize project

```bash
$ mkdir node-express-redis-node-fetch
$ cd node-express-redis-node-fetch
$ npm init -y # or a lot of <enter> later
```

* Install dependencies and observe the results in file `package.json` and sub-folder `.\node_modules`

```cmd
$ npm install express --save
$ npm install node-fetch --save
$ npm install redis --save
```

```bash
$ cat package.json
{
  "name": "express-redis-node-fetch",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2",
    "node-fetch": "^3.3.2",
    "redis": "^4.6.7"
  }
}
```

* Create/Edit `index.js`

```bash
$ node index.js
```

* Open application on your browser
  * `http://localhost:3000/repos/bradtraversy`
  * Observe result

```json
{
"login": "bradtraversy",
  :
"public_repos": 268,
  :
}
```


### 3.5.21. Curso Angular Loiane Groner

* [Curso Angular 2](https://loiane.training/curso/angular)
* [Official Documentation](https://angular.io/)

#### a. Introdução

* **Template** encapsula (formulário, botões, data-grid, menu, etc), 
* **Metadados**: processamento das classes
* **Data Binding**: Dados a ser mostrado na tela
  * Componente raiz (root) contém todos os demais componentes da aplicação
  * Principal objetivo do componente é mostrar dados e pode ser integrado com __Backend__ Node JS
* **Serviços**: Não é boa prática escrever código de lógica de negócio no componente, elas devem ser escritad nos serviços que podem ser injetados em outras classes
* **Roteamento**: É comum ter várias páginas na aplicação, mas o angular trabalha com Single Page Application. O responsável pela navegação entre diferentes telas é o __Router__
* **Diretivas**: Responsável por modificar elementos DOM e/ou seu comportamento. Ex: quando um campo ganha o foco, ele pode mudar de tamanho
* A aplicação pode ser dividida em módulos: Ex: Cliente, Produto e Venda

```txt
+-----------+ +-----------+                                         +-----------+
|   Module  | |   Module  |                +-----------+            | Directive |
| Component | | Service   |                | Template  | < - - - - -|-   { }    |
+-----------+ +-----------+           +--> |    < >    | ---+       +-----------+
                                      |    +-----------+    |
+-----------+ +-----------+           |                     |
|   Module  | |   Module  |  Property |      Metadata       | Event
|   Value   | |  Function |  Binding  |                     | Binding
+-----------+ +-----------+           |    +-----------+    |
                                      |    | Component |    |
+----------------------+              +--> |    < >    | <--+
|     Injector         |                   +-----------+
|    +------------+    |
|    | SerViCe(1) |    |
|    +------------+    |
| +------+    +------+ |
| |SVC(2)| .. |SVC(n)| |
| +------+    +------+ |
+----------------------+
```
* TypeScript é um superconjunto de JavaScript
* Um script Typescript pode ser compilado para Javascript com comando `tsc nomearquivo.ts`
* Um transpiler, Ex: [Babel](https://bablejs.io/),  resolve a conversão de padrão ES6 para JavaScript puro: Ex:  `let variavel`

* Create a new Node.js project folder and initialize project

```bash
$ mkdir node-angular2
$ cd node-angular2
$ npm init -y # or a lot of <enter> later
$ npm install -g typescript
$ npm install -g @angular/cli
```

* Check installed packages

```bash
$ ng version  
    _                      _                 ____ _     ___ 
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | | 
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | | 
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 16.2.0
Node: 18.10.0      
Package Manager: npm 8.19.2
OS: linux x64

Angular: undefined
```

##### a.1. Typescript

* [Curso Angular #04: Introdução ao TypeScript para Angular](https://www.youtube.com/watch?v=cNJVzgUH0gA&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=6)
* Criar uma pasta `hello-world-typescript` para construir e testar um programa Typescript:
  * Nesta pasta, crie o arquivo Typescript `main.js` com a declaração simples de variável `var minhaVar = 'minha variavel';`
  * Compile o arquivo Typescript `main.ts` com o comando `tsc main.ts` gerando um arquivo Javascript `main.js`
  * Observe e analise o conteúdo do arquivo Javascript gerado
  * Edite o arquivo `main.ts` e crie uma função simples e repita o comando de compilação
  * Compile o arquivo Typescript `main.ts` com o comando `tsc main.ts` gerando um arquivo Javascript `main.js`
  * Observe e analise o conteúdo do arquivo Javascript gerado: as linhas sobressalentes são removidas
  * Edite o arquivo `main.ts` e crie uma variável com o `let num = 2` e uma constante `const PI = 3.14;` que é padrão ES6
  * Compile o arquivo Typescript `main.ts` com o comando `tsc main.ts` gerando um arquivo Javascript `main.js`
  * Observe e analise o conteúdo do arquivo Javascript gerado: let e const são substituídos por var
  * Para mais informações osbre ECMAScript6 - https://es6-features.org/
  

```bash
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2
$ mkdir hello-world-typescript
$ cd hello-world-typescript
$ tsc main.ts
$
```

* Criar o projeto com Angular CLI com instalação das bibliotecas e dependências
  * Nomenclatura do projeto precisa iniciar com uma letra. Ex: `prj-angular-2`
  * Responder `y` para confirmar a criação
  * Observar a estrutura de pastas e arquivos [Curso Angular #21: Angular CLI: Estrutura do projeto](https://www.youtube.com/watch?v=ICvq9YeDCh0): 
    * `./node-angular-2/index.html`: página principal e inicial do projeto
    * `./node-angular-2/package.json`: arquivos Typescripts iniciais, arquivos .CSS e arquivos de testes unitários (.spec.ts) com ferramentas Jasmine, Protractor e Karma
    * `./node-angular-2/node_modules`: instala as dependências dos módulos do `npm install`
    * `./node-angular-2/.gitignore`: arquivo de configuração do Github

    * `./node-angular-2/config`: diretório que contém configuração para deploy/build e teste
    * `./node-angular-2/dist`: diretório onde é gerado o build da aplicação (.gitignore)
    * `./node-angular-2/e2e`: diretório que contém os scripts para testes end-to-end
    * `./node-angular-2/node_modules`: dretório que contém os pacotes npm da app (package.json) (.gitignore)
    * `./node-angular-2/public`: diretório genérico que contém um arquivo .npmignore
    * `./node-angular-2/src`: diretório do código fonte da aplicação. Contém código typescript/javascript, CSS, imagem e templates HTML
    * `./node-angular-2/angular-cli.json`: arquivo que contém informações sobre o projeto e build de produção, como nome do projeto, config de onde encontrar os arquivos fontes da app, config de testes, etc.
    * `./node-angular-2/tslint.json`: arquivos que contém configurações para fazer lint da app


#### b. Componentes e Templates

##### b.1. New Component

* [Curso Angular #03: Hello, World! Criando primeiro projeto e o primeiro Componente](https://www.youtube.com/watch?v=wBrIT2Z8t5I&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=4)

```bash
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2
$ ng new prj-angular-2
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? CSS
  :          :
CREATE prj-angular-2/angular.json (2735 bytes)
CREATE prj-angular-2/package.json (1044 bytes)
CREATE prj-angular-2/tsconfig.json (901 bytes)
CREATE prj-angular-2/tsconfig.app.json (263 bytes)      
CREATE prj-angular-2/tsconfig.spec.json (273 bytes)     
  :          :
CREATE prj-angular-2/src/main.ts (214 bytes)
CREATE prj-angular-2/src/favicon.ico (948 bytes)
CREATE prj-angular-2/src/index.html (297 bytes)
CREATE prj-angular-2/src/styles.css (80 bytes)
CREATE prj-angular-2/src/app/app-routing.module.ts (245 bytes)
CREATE prj-angular-2/src/app/app.module.ts (393 bytes)
CREATE prj-angular-2/src/app/app.component.css (0 bytes)
CREATE prj-angular-2/src/app/app.component.html (23115 bytes)
CREATE prj-angular-2/src/app/app.component.spec.ts (1012 bytes)
CREATE prj-angular-2/src/app/app.component.ts (217 bytes)
  :          :
✔ Packages installed successfully.
    Directory is already under version control. Skipping initialization of git.
```

* Executar o projeto ou seja servir o códgio ao Browser com `ng serve`
  * Observar o resultado no browser no endereço informado `http://localhost:4200`

```bash
$ pwd 
/mnt/c/GitHome/ws-github-03/study-node/node-angular2
$ ng serve
  :
✔ Browser application bundle generation complete.
  :
Initial Chunk Files   | Names         |  Raw Size
vendor.js             | vendor        |   2.33 MB |
polyfills.js          | polyfills     | 333.19 kB |
styles.css, styles.js | styles        | 230.46 kB |
main.js               | main          |  48.12 kB |
runtime.js            | runtime       |   6.52 kB |
                      | Initial Total |   2.94 MB
  :
Build at: 2023-08-21T13:34:44.586Z - Hash: 65af89eece8bad60 - Time: 49978ms
  :
** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **
  :
✔ Compiled successfully.
```

* Open `http://localhost:4200/`

```browser
+----------------------------------+
| http://localhost:4200            |
+----------------------------------+
|   prj-angular-2 app is running ! |
|              :                   |
+----------------------------------+
```


##### b.2. Modules

* **Modules**: arquivo que vai ajudar a organizar as aplicações em pastas. Com os módulos você pode escolher o que vai expor para fora do diretório
* Quando o projeto é criado pelo CLI ele já módulo default chamado `AppModule`. Exemplo: `./node-angular2/prj-angular2/src/app/app.module.ts`. Observar `... export class AppModule { } ...`
* Dentro do móduo temos: 
  * `... export class AppModule { } ...`: export da classe seguindo convenção de nomenclatura segundo ECMAN Script 2015
  * Import da biblioteca de Decorator `import { NgModule } from '@angular/core';` e  `... @NgModule({ ...` definição do Decorator da classe que representa o módulo. A maioria dos decorators fazem parte deste pacote
  * `... import { BrowserModule } from '@angular/platform-browser'; ...`: Prepara a aplicação para ser executada em um browser

##### b.3. Metadata

* **Metadata**: Declaração dos componentes, diretivas e pipes que serão usados no módulo
  * `... declarations: [ ...` e `... AppComponent ... `: neste caso está sendo declarado apenas o AppComponents



#### c. Data Binding
#### d. Diretiva
#### e. Serviços
#### f. Formulários
#### g. Roteamento
#### h. Integração com servidor
#### i. CRUD Metres-Detalhe



## I - Referências

* [Node JS Full Course - Learn Node.js in 7 Hours | Node.js Tutorial for Beginners | Edureka](https://www.youtube.com/watch?v=JnvKXcSI7yk&list=PLORrDfZD1hkGDVKuuxZPq6770NpM5Y6kK)
