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
    + [3.5.3. NPM - Modules, Globas and Timers](#353-npm---modules-globals-and-timers)
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
    + [3.5.14. Hands on Node.js and Docker](#3514-hands-on-nodejs-and-docker)
    + [3.5.15. Hands on MEAN (Mongodb, Express, Angular, Node.js) Stack Application CRUD Tutorial](#3515-hands-on-mean-mongodb-express-angular-nodejs-stack-application-crud-tutorial)
    + [3.5.16. Angular and RxJS](#3516-angular-and-rxjs)
    + [3.5.17. Hands on Node.js Selenium WebDriver ChromeDriver](#3517-hands-on-nodejs-selenium-webdriver-chromedriver)
    + [3.5.18. Hands on Node.js Cucumber Selenium ](#3518-hands-on-nodejs-cucumber-selenium)
    + [3.5.19. Hands On Node, Express, Redis e Cache ![star.jpg](./doc/images/star.jpg) ](#3519-hands-on-node-express-redis-e-cache)
    + [3.5.20. Hands On Node, Express, Redis and Node-Fetch](#3520-hands-on-node-express-redis-e-cache)
    + [3.5.21. Curso Angular - Loiane Groner](#3521-curso-angular-loiane-groner)
      - [3.5.21.1. Introdução](#35211-introdução) 
      - [3.5.21.2. Typescript](#35212-typescript) 
      - [3.5.21.3. Components and Templates](#35213-components-and-templates) 
        * [3.5.21.3.1. New Angular Project](#352131-new-angular-project) 
        * [3.5.21.3.2. Manual New Component on existing Angular project](#352132-manual-new-component-on-existing-angular-project) 
        * [3.5.21.3.3. CLI New Component on existing Angular project](#352133-cli-new-component-on-existing-angular-project) 
        * [3.5.21.3.4. Create New Modules](#352134-create-new-modules) 
        * [3.5.21.3.5. Create New Template](#352135-create-new-template) 
        * [3.5.21.3.6. ](#352136-cli-generate-services) 
      - [3.5.21.4. Data Binding](#35214-data-binding) 
        * [3.5.21.4.1. Data Binding - Interpolation](#352141-data-binding---intepolation) 
        * [3.5.21.4.2. Data Binding - Property Binding](#352142-data-binding---property-binding) 
        * [3.5.21.4.3. Data Binding - Class Binding and Style Binding](#352143-data-binding---class-binding-and-style-binding) 
        * [3.5.21.4.4. Data Binding - Event Binding](#352144-data-binding---event-binding) 
        * [3.5.21.4.5. Data Binding - Two-Way Data binding](#352145-data-binding---two-way-data-binding)
        * [3.5.21.4.6. Data Binding - Reutilizando Componentes com Input Propoerties](#352146-reutilizando-componentes-com-input-propoerties)
        * [3.5.21.4.7. Data Binding - Emitindo Eventos com Output properties](#352147-emitindo-eventos-com-output-properties)
        * [3.5.21.4.8. Data Binding - Component Life Cycle](#352148-component-life-cycle)
        * [3.5.21.4.9. Data Binding - DOM access and Template ViewChild](#352149-dom-access-and-template-viewchild)
      - [3.5.21.5. Angular CLI](#35215-angular-cli) 
        * [3.5.21.5.1. Angular CLI - Install](#352151-angular-cli---install)
        * [3.5.21.5.2. Angular CLI - Create Project](#352152-angular-cli---create-project)
        * [3.5.21.5.3. Angular CLI - Start Project](#352153-angular-cli---start-project)
        * [3.5.21.5.4. Angular CLI - Directive ng-if](#352154-angular-cli---directive-ng-if)
        * [3.5.21.5.5. Angular CLI - Using-pre-processors sass, less and stylus](#352155-angular-cli---using-pre-processors-sass-less-and-stylus)
        * [3.5.21.5.6. Angular CLI - Using lint, test and e2e](#352156-angular-cli---using-lint-test-e2e)
        * [3.5.21.5.7. Angular CLI - Project folder strucuture](#352157-angular-cli---project-folders-structure)
      - [3.5.21.6. Build Deploy and Production](#35216-build-deploy-and-production) 
      - [3.5.21.7. Install libraries - Bootstrap](#35217-install-libraries-bootstrap) 
      - [3.5.21.8. Directives](#35218-directives) 
        * [3.5.21.8.1. Directives - `*ngIf`](#352181-directives---ngif)
        * [3.5.21.8.2. Directives - `*ngSwitch`, `*ngSwitchCase`, `*ngSwitchDefault`](#352182-directives---ngswitch-ngswitchcase-and-ngswitchdefault)
        * [3.5.21.8.3. Directives - `*ngFor`](#352183-directives---ngfor)
        * [3.5.21.8.4. Directives - `*ngClass`](#352184-directives---ngclass)
        * [3.5.21.8.5. Directives - `*ngStyle`](#352185-directives---ngstyle)
        * [3.5.21.8.6. Directives - Elvis operator](#352186-directives---elvis-operator)
        * [3.5.21.8.7. Directives - `ng-content`](#352187-directives---ng-content)


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

* Plugins do VSCode:
  * "Angular Snippets (Version 16)" - 5 star - John Papa
  * "Auto Import" - 4.5 stars - steoates
  * "HTML Boileplate" - 5 stars - sidthesloth
  * "vscode-icons" - 5 stars - VSCode Icons Teamn
  * "Ionic 2 Commands with Snippets" - 3.5 stars - Thavarajan
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

#### 3.5.21.1. Introdução

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

#### 3.5.21.2 Typescript

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

#### 3.5.21.3. Components and Templates

##### 3.5.21.3.1. New Angular Project

* [Curso Angular #03: Hello, World! Criando primeiro projeto e o primeiro Componente](https://www.youtube.com/watch?v=wBrIT2Z8t5I&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=4)

* Criar o projeto com Angular CLI com instalação das bibliotecas e dependências
  * Nomenclatura do projeto precisa iniciar com uma letra. Ex: `prj-angular-2`
  * Responder `y` para confirmar a criação

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
|   Here area some links ...       |
|              :                   |
+----------------------------------+
```

* Editar os arquivos abaixo e observar o resultado no browser
  * `./prj-angular-2/src/app/app.component.ts`: Componente principal da aplicação. Os projetos Angular são baseados em Componentes
    * Editar o arquivo `./prj-angular-2/src/app/app.component.ts`: Este arquivo define o módulo da aplicação, substituir o trecho:
      * de: `... title = 'prj-angular-2'; ...`
      * para: `... title = 'Josemar/prj-angular-2'; ...`
  * `./prj-angular-2/src/app/app.component.html`: O arquivo que está sendo mostrado na url principal de entrada
    * Editar o arquivo `./prj-angular-2/src/app/app.component.html` substituir o trecho:
      * de: `<p>Here are some links to help you get started:</p>`
      * para:  `<p>Hello Josemar !!! Here are some links to help you get started:</p>`
  * Interpolação é a definição da variável no arquivo `app.component.ts` que é apresentada no arquivo `app.component.html`


##### 3.5.21.3.2. Manual New Component on existing Angular Project

* Criar o arquivo do primeiro componente manual `./src/app/meu-primeiro.component.ts` e crie o conteúdo de uma classe `... @Component()  .. class MeuPrimeiroComponent {} ... `. Observe que a nomenclatura de padrão de nome de arquivos (separados por hifen) e nomenclatura de nome de classes.
* Criar o conteúdo do template com o uso de **inline template literal** isto é a crase. Recomendado quando código até 3 linhas
* selector: nome da tag HTML
* template: `
<p>Meu primeiro component com Angular 2!</p>
`

```meu-primeiro.component.ts
import { Component } from '@angular/core';

@Component({
    selector: 'meu-primeiro-component'
    template: `
        <p>Meu primeiro component com Angular 2!</p>
    `
})

export class MeuPrimeiroComponent { }

```

* Editar o arquivo `./src/app/app.module.ts` e declarar o `MeuPrimeiroComponent` para que ele torne-se visível para os demais módulos

```./src/app/app.module.ts
:
import { MeuPrimeiroComponent } from './meu-primeiro-component';
:
@ngModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent
  ]
})
:
```

* Editar template no arquivo `./src/app/app.component.html` e usar o componente `MeuPrimeiroComponent`

```./src/app/app.component.html
  :
  <h2>Resources</h2>
  <p>Hello Josemar Silva !!! Here are some links to help you get started:</p>
  <meu-primeiro-component></meu-primeiro-component>
  :
```

* Run application and test results

```browser
+---------------------------------------------+
| http://localhost:4200                       |
+---------------------------------------------+
|    Josemar/prj-angular-2 app is running!    |
|              :                              |
| Hello Josemar Silva !!! Here are some links |
|    Meu primeiro component com Angular 2!    |
|              :                              |
+---------------------------------------------+
```

##### 3.5.21.3.3. CLI New Component on existing Angular Project

* Create new Component using CLI

```bash
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-angular-2
$ ng g component meu-segundo
CREATE src/app/meu-segundo/meu-segundo.component.css (0 bytes)
CREATE src/app/meu-segundo/meu-segundo.component.html (26 bytes)
CREATE src/app/meu-segundo/meu-segundo.component.spec.ts (588 bytes)
CREATE src/app/meu-segundo/meu-segundo.component.ts (221 bytes)
UPDATE src/app/app.module.ts (585 bytes)
```

* Observe new folder `src/app/meu-segundo/` and files:
  * `meu-segundo.component.html`: HTML da págia `... <p>meu-segundo works!</p> ...`
  * `meu-segundo.component.ts`: Segundo componente
  * `meu-segundo.component.spec.ts`: Script Teste Unitário
* Observe `./src/app/app.module.ts` was updated and new component was added:

```app.module.ts
  :
import { MeuSegundoComponent } from './meu-segundo/meu-segundo.component';
  :
@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuSegundoComponent
  ],
  :
```

* Editar template HTML  `./src/app/app.component.html` e usar o componente `MeuSegundoComponent`

* Run application and test results

```bash
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-angular-2
$ ng serve
```

```browser
+---------------------------------------------+
| http://localhost:4200                       |
+---------------------------------------------+
|    Josemar/prj-angular-2 app is running!    |
|              :                              |
| Hello Josemar Silva !!! Here are some links |
|    Meu primeiro component com Angular 2!    |
|      meu-segundo works!                     |
|              :                              |
+---------------------------------------------+
```


##### 3.5.21.3.4. Create New Modules

* [Curso Angular #05: Módulos (ngModule)](https://www.youtube.com/watch?v=36kd3uR-hG8&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=6)
* **Modules**: arquivo que vai ajudar a organizar e modularizar as aplicações em pastas. Com os módulos você pode escolher o que vai expor para fora do diretório.
* Quando o projeto é criado pelo CLI ele já módulo default chamado `AppModule`. Exemplo: `./node-angular2/prj-angular2/src/app/app.module.ts`. Observar `... export class AppModule { } ...`
* Dentro do móduo temos: 
  * `... export class AppModule { } ...`: export da classe seguindo convenção de nomenclatura segundo ECMA Script 2015
  * Import da biblioteca de Decorator `import { NgModule } from '@angular/core';` e  `... @NgModule({ ...` definição do Decorator da classe que representa o módulo. A maioria dos decorators fazem parte deste pacote
  * `... import { BrowserModule } from '@angular/platform-browser'; ...`: Prepara a aplicação para ser executada em um browser
  * `... import { FormsModule } from '@angular/forms'; ... `: Quando formos utilizar "two way data bind" 
  * `... import { HttpModule }  from '@angular/forms';`: 

* Os **Metadatas** encontrados no arquivo de componentes `./src/app/app.modules.ts`
* **Metadata** - **declarations**: Declaração dos componentes, diretivas e pipes que serão usados no módulo
  * `... declarations: [ ...` e `... AppComponent ... `: neste caso está sendo declarado apenas o AppComponents
* **Metadata** - **imports**: Outros módulos que queremos utilizar dentro deste módulo
  * `... imports: [ ...`: 
* **Metadata** - **providers**: Os serviços que ficarão disponíveis para toda aplicação. Ex: serviço de autenticação, login, guarda de rotas
  * `... providers[] ...`
* **Metadata** - **bootstrap**: Encontrado somente no módulo raiz, Componente que deve ser iniciado quando executamos a aplicação. O componente que vai servir como container do projeto. Trabalhamos com uma aplicação SPA (Single Page Applications ).

* Generate / Create New Modules using CLI

```bash
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-angular-2
$ ng generate module cursos
CREATE src/app/cursos/cursos.module.ts (192 bytes)
```

* Observe results:
  * New Folder `./src/app/cursos/` and New File `./src/app/cursos/cursos.module.ts`
  * File contents of feature module created  `./src/app/cursos/cursos.module.ts`
  * Difference for Angular 2, CommonModule contains imports

```./src/app/cursos/cursos.module.ts
  :
import { CommonModule } from '@angular/common';
  :
  imports: [
    CommonModule
  ]
  :
```

* Generate / Create New Component Curso inside new module Cursos using CLI

```bash
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-angular-2
$ ng generate component cursos
CREATE src/app/cursos/cursos.component.css (0 bytes)
CREATE src/app/cursos/cursos.component.html (21 bytes)
CREATE src/app/cursos/cursos.component.spec.ts (559 bytes)
CREATE src/app/cursos/cursos.component.ts (202 bytes)
UPDATE src/app/cursos/cursos.module.ts (269 bytes)
```

* Observe `./src/app/cursos/cursos.module.ts`

```./src/app/cursos/cursos.module.ts
  :
import { CursosComponent } from './cursos.component';
  :
@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CursosModule { }
  :
```

* Observe `./src/app/cursos/cursos.component.html`

```./src/app/cursos/cursos.component.html
<p>cursos works!</p>
```

* Observe `./src/app/cursos/cursos.component.ts`

```./src/app/cursos/cursos.component.ts
:
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
:
export class CursosComponent {
:
```

* Observe `./src/app/app.module.ts` and remove automatically added component configuration from root module:

```app.module.ts
  :
import { MeuSegundoComponent } from './meu-segundo/meu-segundo.component';
  :
@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuSegundoComponent
  ],
  :
```

* Editar template HTML  `./src/app/app.component.html` e usar o componente `... <app-cursos></app-cursos> ...`

* Run application and test results

```bash
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-angular-2
$ ng serve
```

```browser
+---------------------------------------------+
| http://localhost:4200                       |
+---------------------------------------------+
|    Josemar/prj-angular-2 app is running!    |
|              :                              |
| Hello Josemar Silva !!! Here are some links |
|    Meu primeiro component com Angular 2!    |
|      meu-segundo works!                     |
|        cursos works!                        |
|              :                              |
+---------------------------------------------+
```

* Generate / Create New Component CursoDetalhe inside new module Cursos using CLI

```bash
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-angular-2
$ ng generate component cursos/curso-detalhe
```

* Observe new component `CursoDetalheComponent` was generated in folder `./curso-detalhe` on file `./src/app/cursos/curso-detalhe/curso-detalhe.component.ts`

```
  :
@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent {
  :
```

* Observe new component `CursoDetalheComponent` was automatically added to `./src/app/cursos/cursos.module.ts`

```./src/app/cursos/cursos.module.ts
  :
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
  :
@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent
  ],
  :
```

* Edit `./src/app/cursos/cursos.component.html` and include references to selector from  `CursoDetalheComponent`
  * Apesar de ser possível adicionar o seletor do componente `CursoDetalheComponent` dentro do component HTML `cursos.component.html`, ele é componente privado interno do componente `CursosModule` e não poderia ser referenciado no HTML da raiz `./src/app/app.component.html` porque `CursoDetalheComponent` não foi exportado e importado em `CursosModule`

```./src/app/cursos/cursos.component.html
<p>cursos works!</p>

<app-curso-detalhe></app-curso-detalhe>
```


* Run application and test results

```bash
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-angular-2
$ ng serve
```

```browser
+---------------------------------------------+
| http://localhost:4200                       |
+---------------------------------------------+
|    Josemar/prj-angular-2 app is running!    |
|              :                              |
| Hello Josemar Silva !!! Here are some links |
|    Meu primeiro component com Angular 2!    |
|      meu-segundo works!                     |
|        cursos works!                        |
|      curso-detalhe works!                   |
|              :                              |
+---------------------------------------------+
```

##### 3.5.21.3.5. Create New Template

* Edit `./src/app/cursos/cursos.component.ts` e crie as propriedades: a) nomePortal: string; b) cursos: string array
* Edit `./src/app/cursos/cursos.component.html` e faça com que o HTML mostre o nome do portal e a lista de cursos, lembrando que ambas as informações agora são atributos de propriedade do componente cursos
  * **interpolation** é o mecanismo que faz com que o HTML mostre o conteúdo da propriedade da classe CursosComponent

```./src/app/cursos/cursos.component.html
    :
    Lista de cursos do portal {{ nomePortal }}
    :
<ul>
    <li *ngFor="let curso of cursos">
        {{ curso }}
    </li>
</ul>
    :
```

* Run application and test results

```bash
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-angular-2
$ ng serve
```

```browser
+---------------------------------------------+
| http://localhost:4200                       |
+---------------------------------------------+
|    Josemar/prj-angular-2 app is running!    |
|              :                              |
| Hello Josemar Silva !!! Here are some links |
|    Meu primeiro component com Angular 2!    |
|      meu-segundo works!                     |
|        cursos works!                        |
|      curso-detalhe works!                   |
|         * Java                              |
|         * Ext JS                            |
|         * Angular                           |
|              :                              |
+---------------------------------------------+
```

* [Curso Angular #07: Introdução aos Serviços e Injeção de Dependência (DI)](https://www.youtube.com/watch?v=v0qEUq4YwpU&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=8)
* Segregação de funções entre classes:

```txt
+-----------+     +-----------+     +-----------+
| Component | <-> |  Service  | <-> |  Backend  |
+-----------+     +-----------+     +-----------+
```

##### 3.5.21.3.6. CLI Generate Services

* Generate Service Class inside folder = "cursos" with name "cursos"
* Observe results in `./src/app/cursos/cursos.service.ts`

```bash
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-angular-2
$ ng generate service cursos/cursos # folder/servicename
CREATE src/app/cursos/cursos.service.spec.ts (357 bytes)
CREATE src/app/cursos/cursos.service.ts (135 bytes)
```

* Edit Component `./src/app/cursos/cursos.component.ts`
  * change initialization of array in property declaration, remove `cursos: string[] = ['Java', 'Ext JS', 'Angular'];` by constructor dependency of service and initialization
  * add constructor dependency `constructor(private cursosService: CursosService) {`
  * initialize property `this.cursos = this.cursosService.getCursos();`
* Edit Service `/src/app/cursos/cursos.service.ts`
  * define `getCursos() { ...`
* Edit Module `/src/app/cursos/cursos.module.ts`
  * add import `import { CursosService } from './cursos.service';`
  * add providers `providers: [ CursosService ]`

* Run application and test results

```bash
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-angular-2
$ ng serve
```

```browser
+---------------------------------------------+
| http://localhost:4200                       |
+---------------------------------------------+
|    Josemar/prj-angular-2 app is running!    |
|              :                              |
| Hello Josemar Silva !!! Here are some links |
|    Meu primeiro component com Angular 2!    |
|      meu-segundo works!                     |
|        cursos works!                        |
|      curso-detalhe works!                   |
|         * Java                              |
|         * Ext JS                            |
|         * Angular                           |
|              :                              |
+---------------------------------------------+
```

#### 3.5.21.4. Data Binding

* [Curso Angular #09: Property Binding e Interpolação](https://www.youtube.com/watch?v=rlVxG2lG1Tk&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=10)

* Angular has 4 differents ways to construct _data binding_, that is associate informations from components, class, templates, etc.

* Create New Project for Data Binding 

```bash
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2
$ ng new prj-data-binding  
? Would you like to add Angular routing? No
? Which stylesheet format would you like to use? CSS
CREATE prj-data-binding/README.md (1068 bytes)
CREATE prj-data-binding/.editorconfig (274 bytes)
CREATE prj-data-binding/.gitignore (548 bytes)
CREATE prj-data-binding/angular.json (2750 bytes)
CREATE prj-data-binding/package.json (1047 bytes)
CREATE prj-data-binding/tsconfig.json (901 bytes)
CREATE prj-data-binding/tsconfig.app.json (263 bytes)
CREATE prj-data-binding/tsconfig.spec.json (273 bytes)
CREATE prj-data-binding/.vscode/extensions.json (130 bytes)
CREATE prj-data-binding/.vscode/launch.json (470 bytes)
CREATE prj-data-binding/.vscode/tasks.json (938 bytes)
CREATE prj-data-binding/src/main.ts (214 bytes)
CREATE prj-data-binding/src/favicon.ico (948 bytes)
CREATE prj-data-binding/src/index.html (300 bytes)
CREATE prj-data-binding/src/styles.css (80 bytes)
CREATE prj-data-binding/src/app/app.module.ts (314 bytes)
CREATE prj-data-binding/src/app/app.component.css (0 bytes)
CREATE prj-data-binding/src/app/app.component.html (23083 bytes)
CREATE prj-data-binding/src/app/app.component.spec.ts (922 bytes)
CREATE prj-data-binding/src/app/app.component.ts (220 bytes)
CREATE prj-data-binding/src/assets/.gitkeep (0 bytes)
✔ Packages installed successfully.
    Directory is already under version control. Skipping initialization of git.
```

* Run project and observe result on browser

```bash
$ cd prj-data-binding
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-data-binding
$ npm install --save
$ ng serve
```


```browser
+---------------------------------------------+
| http://localhost:4200                       |
+---------------------------------------------+
|      prj-data-binding app is running!       |
|           Resources                         |
|              :                              |
+---------------------------------------------+
```

* Create New Component to use Data Binding

```bash
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-data-binding
$ ng generate component data-binding
CREATE src/app/data-binding/data-binding.component.css (0 bytes)
CREATE src/app/data-binding/data-binding.component.html (27 bytes)
CREATE src/app/data-binding/data-binding.component.spec.ts (595 bytes)
CREATE src/app/data-binding/data-binding.component.ts (225 bytes)
UPDATE src/app/app.module.ts (418 bytes)
```

#### 3.5.21.4.1. Data Binding - Intepolation
Obter o valor de um atributo ou método no Template

* Configure the use of Data Binding Interpolation
* Observe `.\node-angular2\data-bingind\src\app\data-binding\data-binding.component.ts`
  * define `selector: 'app-data-binding` that can be used on templates: 
  * define `./data-binding.component.html` that points to a HTML template file contents is `data-binding works!`
* Edit Template `.\node-angular2\prj-data-binding\src\app\app.component.html`
  * replace all contents by:

```.\node-angular2\prj-data-binding\src\app\app.component.html
<app-data-binding></app-data-binding>
```

* Run project and observe result on browser

```bash
$ cd prj-data-binding
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-data-binding
$ ng serve
```

```browser
+---------------------------------------------+
| http://localhost:4200                       |
+---------------------------------------------+
| data-binding works!                         |
+---------------------------------------------+
```


* Edit Component `.\node-angular2\prj-data-binding\src\app\data-binding\data-binding.component.ts`

```.node-angular2\prj-data-binding\src\app\data-binding\data-binding.component.ts
  :
export class DataBindingComponent {
  :
  url:string = 'http://loiane.com';
  cursoAngular: boolean = true;
  getValor() { 
    return 1
  }
  :
```

* Edit Template `.\node-angular2\prj-data-binding\src\app\data-binding\data-binding.component.html`
  * replace all contents by:

```.\node-angular2\prj-data-binding\src\app\data-binding\data-binding.component.html
<section>
    <article>
      <h3>Interpolation</h3>
      <p>String renderizada com interpolação {{ url }} </p>
      <p>Resultado de expressão com interpolação: 1 + 1 = {{ 1 + 1 }} </p>
      <p>Resultado da chamada de função getValor():  {{ getValor() }} </p>
      <p>Resultado de expressões lógicas: {{ cursoAngular && getValor() }} </p>
    </article>
</section>
```

* Run project and observe result on browser

```bash
$ cd prj-data-binding
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-data-binding
$ ng serve
```

```browser
+--------------------------------------------------------+
| http://localhost:4200                                  |
+--------------------------------------------------------+
| Interpolation                                          |
| String renderizada com interpolação http://loiane.com  |
| Resultado de expressão com interpolação: 1 + 1 = 2     |
| Resultado da chamada de função getValor(): 1           |
| Resultado de expressões lógicas: 1                     |
+--------------------------------------------------------+
```


#### 3.5.21.4.2. Data Binding - Property binding
Obter um valor ou atributo do Componente para o template

* Usa-se colchetes `<img [src]="urlImage"/>`
* Formato padrão é através de bind + nomePropriedade:  `<img bind-src="urlImage"/>`
* Quando não existe uma propriedade no elemento, usa-se `[attr.colspan]`
* Configure the use of Data Binding Property binding

* Edit Component `.\node-angular2\prj-data-binding\src\app\data-binding\data-binding.component.ts`

```.node-angular2\prj-data-binding\src\app\data-binding\data-binding.component.ts
  :
export class DataBindingComponent {
  :
  urlImagem:string = 'http://lorempixel.com/400/200/nature/'
  :
```

* Edit Template `.\node-angular2\prj-data-binding\src\app\data-binding\data-binding.component.html`
  * add contents by:

```.\node-angular2\prj-data-binding\src\app\data-binding\data-binding.component.html
     :
    <article>
        <h3>Property Binding</h3>
        <img src="{{ urlImage  }}">
        <img [src]="urlImage">
        <img bind-src="urlImage">
    </article>
     :
```

* Run project and observe result on browser

```bash
$ cd prj-data-binding
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-data-binding
$ ng serve
```

```browser
+--------------------------------------------------------+
| http://localhost:4200                                  |
+--------------------------------------------------------+
|    :                                                   |
| image-1 image-2 image-3                                |
+--------------------------------------------------------+
```


#### 3.5.21.4.3. Data Binding - Class Binding and Style Binding

Obter um valor ou atributo do Componente para o template usando CSS

* [Curso Angular #10: Class e Style binding](https://www.youtube.com/watch?v=NxtlQSpSgx8&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G)

* Bootstrap Official Documentation
  * https://getbootstrap.com/docs/5.3/components/alerts/
  * Observe there are `<div>` classes and `roles`
* Instalar pacote ng2-bootstrap

```bash
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-data-binding
$ npm install ng2-bootstrap bootstrap --save
  :
$ cat package.json | grep bootstrap
    "bootstrap": "^5.3.1",
    "ng2-bootstrap": "^1.6.3",
```

* Edit Style  `.\node-angular2\prj-data-binding\src\styles.css` (opção 1)
  * add import css

```.\node-angular2\prj-data-binding\src\styles.css
@import ./node_modules/bootstrap/dist/css/bootstrap.min.css
```

* Edit Style  `.\node-angular2\prj-data-binding\angular.json` (opção 2)
  * add import css

```.\node-angular2\prj-data-binding\angular.json
  :
            "styles": [
              "./node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ],
  :
```

* Edit Template `.\node-angular2\prj-data-binding\src\app\data-binding\data-binding.component.html`
  * define variable to listen to change of select option on HTML
  * add contents by:

```.\node-angular2\prj-data-binding\src\app\data-binding\data-binding.component.html
     :
    <article>
        <h3>Class Binding & Style Binding</h3>
    </article>
     :
```

* Run project and observe result on browser

```bash
$ cd prj-data-binding
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-data-binding
$ ng serve
```

```browser
+--------------------------------------------------------+
| http://localhost:4200                                  |
+--------------------------------------------------------+
|    :                                                   |
|                       +-------------------+            |
| Class & Style Binding | alert-primary     |            |
|                       +-------------------+            |
|                       |   alert-secondary |            |
|                       |   alert-success   |            |
|                       |   alert-danger    |            |
|                       |   alert-warning   |            |
|                       |   alert-info      |            |
|                       |   alert-light     |            |
|                       |   alert-dark      |            |
|                       +-------------------+            |
|    :                                                   |
+--------------------------------------------------------+
```



#### 3.5.21.4.4. Data Binding - Event Binding
Escutar eventos do Template (view HTML) e executar a lógica de programação no componente

* [Curso Angular #11: Event binding](https://www.youtube.com/watch?v=WF28rLBangw&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=12)
* [Official Documentation - Web Events](https://developer.mozilla.org/en-US/docs/Web/Events)
* Captura de eventos permite capturar os caracteres digitados em um campo, clique de um botão, passagem do mouse sobre um objeto, etc

* Edit Template `.\node-angular2\prj-data-binding\src\app\data-binding\data-binding.component.css`
  * add css

```.\node-angular2\prj-data-binding\src\app\data-binding\data-binding.component.css
.highlight {
    background-color: yellow;
    font-weight: bold;
}
```



* Edit Template `.\node-angular2\prj-data-binding\src\app\data-binding\data-binding.component.html`
  * define variable to listen to change of select option on HTML
  * add contents by:

```.\node-angular2\prj-data-binding\src\app\data-binding\data-binding.component.html
     :
<section>
    <article>
      <h3>Event Binding</h3>
      <div>
        <button (click)="botaoClicado()"
            class="btn btn-primary">
            Me clique!
        </button>

        <br><br>

        <input type="text"
            (keyup)="onKeyUp($event)"
            (keyup.enter)="salvarValor(campoInput.value)"
            (blur)="salvarValor(campoInput.value)"
            #campoInput
            />>
        
        <p> Valor atual: {{ valorAtual }} </p>
        <p> Valor salvo: {{ valorSalvo }} </p>

        <br>
        <span
            (mouseover)="onMouseOverOut()"
            (mouseout)="onMouseOverOut()"
            [class.highlight]="isMouseOver"
            >
            Passe o mouse sobre mim</span>

      </div>
    </article>
</section>
     :
```

* Edit Component `.\node-angular2\prj-data-binding\src\app\data-binding\data-binding.component.ts`

```.node-angular2\prj-data-binding\src\app\data-binding\data-binding.component.ts
  :
export class DataBindingComponent {
  :
  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;
  :
  botaoClicado() {
    alert('Botao clicado!');
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor:string){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }
  :
```

* Run project and observe result on browser

```bash
$ cd prj-data-binding
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-data-binding
$ ng serve
```

```browser
+--------------------------------------------------------+
| http://localhost:4200                                  |
+--------------------------------------------------------+
| Event Binding                                          |
| +------------+                                         |
| | Me clique! |                                         |
| +------------+                                         |
|     :                                                  |
+--------------------------------------------------------+
```


#### 3.5.21.4.5. Data Binding - Two-Way Data binding
Manter o sincronismo ao mesmo tempo o componente quanto o template

* Template value updates Component value and vice-versa
* Use Events Binding + Property Bind

* [Curso Angular #12: Two-way data binding](https://www.youtube.com/watch?v=7PI-2pvLTu8&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=13)

* Edit Template `.\node-angular2\prj-data-binding\src\app\app.module.ts`
  * **Import** `FormsModule` required to use ngModule

```.\node-angular2\prj-data-binding\src\app\app.module.ts
     :
import { FormsModule } from '@angular/forms';

@NgModule({
     :
  imports: [
    BrowserModule, 
    FormsModule
  ],
     :
```


* Edit Template `.\node-angular2\prj-data-binding\src\app\data-binding\data-binding.component.html`
  * define variable to listen to change of select option on HTML
  * add contents by:

```.\node-angular2\prj-data-binding\src\app\data-binding\data-binding.component.html
     :
 <section>
    <article>
      <h3>Two-way data binding</h3>
      <div>
        <input type="text"
            [ngModel]="nome"
            (ngModelChange)="nome = $event"
        />
        <input type="text" [(ngModel)]="nome">
        <br>
        <p>Você digitou {{ nome }}</p>
      </div>
      <div>
        <p>Meu nome é {{ pessoa.nome }} e tenho {{ pessoa.idade }} anos de idade</p>
        <input type="text" [(ngModel)]="pessoa.nome">
        <input type="text" [(ngModel)]="pessoa.idade">
      </div>
    </article>
</section>
     :
```

* Edit Component `.\node-angular2\prj-data-binding\src\app\data-binding\data-binding.component.ts`

```.node-angular2\prj-data-binding\src\app\data-binding\data-binding.component.ts
  :
export class DataBindingComponent {
  :
nome: string = 'abc';

  pessoa: any = {
    nome: 'fulano',
    idade: 20
  }
  :
```

* Run project and observe result on browser

```bash
$ cd prj-data-binding
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-data-binding
$ ng serve
```

```browser
+-------------------------------------------------------------+
| http://localhost:4200                                       |
+-------------------------------------------------------------+
|Two-way data binding                                         |
| [ abc             ] [ abc             ]                     |
| Você digitou abc                                            |
| [ ciclano         ] [ 3             ]                       |
| Meu nome é ciclano e tenho 3 anos de idade                  |
+-------------------------------------------------------------+
```

#### 3.5.21.4.6. Reutilizando Componentes com Input Propoerties
Expor a propriedade de um componente para outro componente

* [Curso Angular #13: Reusando Componentes com Input properties](https://www.youtube.com/watch?v=G2cBpYZ0fzk)

* Create New Component to use Data Binding

```bash
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-data-binding
$ ng generate component input-property
CREATE src/app/input-property/input-property.component.css (0 bytes)
CREATE src/app/input-property/input-property.component.html (29 bytes)
CREATE src/app/input-property/input-property.component.spec.ts (609 bytes)
CREATE src/app/input-property/input-property.component.ts (233 bytes)
UPDATE src/app/app.module.ts (594 bytes)
```

* Edit Template `.\node-angular2\prj-data-binding\src\app\data-binding\data-binding.component.html`
  * use selector `app-input-property`
  * add contents by:

```.\node-angular2\prj-data-binding\src\app\data-binding\data-binding.component.html
     :
<section class="input-output-propoerties">
    <article>
        <h3>Input/Output Properties</h3>
        <app-input-property [nomeDataBinding]="nomeDataBinding" [aliasDataBinding2]="nomeDataBinding2"></app-input-property>
    </article>
</section>
     :
```

* Edit Template `.\node-angular2\prj-data-binding\src\app\input-property\input-property.component.html`
  * use input properties using interpolation
  * add contents by:

```.\node-angular2\prj-data-binding\src\app\input-property\input-property.component.html
     :
<p>input-property works!</p>
<p>nomeDataBinding: {{ nomeDataBinding }}</p>
<p>nomeDataBinding2: {{ nomeDataBinding2 }}</p>
     :
```

* Edit Component `.\node-angular2\prj-data-binding\src\app\data-binding\data-binding.component.ts`
  * Create properties: 

```.node-angular2\prj-data-binding\src\app\data-binding\data-binding.component.ts
  :
export class DataBindingComponent {
  :
  nomeDataBinding: string = 'nomeDataBinding';
  nomeDataBinding2: string = 'nomeDataBinding2';
  :
```


* Edit Component `.\node-angular2\prj-data-binding\src\app\input-property\input-property.component.ts`
  * add import `import ... Input`
  * add @Input() decorator on properties declarations `@Input() nomeDataBinding: string = '';`
  * Create properties: 

```.\node-angular2\prj-data-binding\src\app\input-property\input-property.component.ts
  :
import { Component, Input } from '@angular/core';
  :
export class InputPropertyComponent {
  :
  @Input() nomeDataBinding: string = '';
  @Input('aliasDataBinding2') nomeDataBinding2: string = '';
  :
```

#### 3.5.21.4.7. Emitindo Eventos com Output properties
Emitir eventos customizados através do com Output properties. O exercício será criar um número com dois botões, sendo um para incrementar o valor e outro para decrementar o valor

* [Curso Angular #14: Emitindo Eventos com Output properties](https://www.youtube.com/watch?v=Lbwk8oDJrCU&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=15)

* Create New Component to use Data Binding

```bash
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-data-binding
$ ng generate component output-property
CREATE src/app/output-property/output-property.component.css (0 bytes)
CREATE src/app/output-property/output-property.component.html (30 bytes)
CREATE src/app/output-property/output-property.component.spec.ts (616 bytes)
CREATE src/app/output-property/output-property.component.ts (237 bytes)
UPDATE src/app/app.module.ts (710 bytes)
```

* Edit Template `.\node-angular2\prj-data-binding\src\app\data-binding\data-binding.component.html`
  * use selector `app-input-property`
  * add contents by:

```.\node-angular2\prj-data-binding\src\app\data-binding\data-binding.component.html
     :
 <section class="output-propoerties">
    <article>
        <h3>Output Properties</h3>
        <app-output-property 
            (mudouValor)="onMudouValor($event)">
        </app-output-property>
    </article>
</section>
     :
```

* Edit Template `.\node-angular2\prj-data-binding\src\app\output-property\output-property.component.html`
  * use output properties readonly and listen to events
  * add contents by:

```.\node-angular2\prj-data-binding\src\app\input-property\input-property.component.html
     :
<p>output-property works!</p>

<div>
    <button class="btn btn-primary" (click)="decrementa()">-</button>
    <input type="text" [value]="valor" readonly>
    <button class="btn btn-primary" (click)="incrementa()">+</button>
</div>
     :
```

* Edit Component `.\node-angular2\prj-data-binding\src\app\data-binding\data-binding.component.ts`
  * Create properties: 

```.node-angular2\prj-data-binding\src\app\data-binding\data-binding.component.ts
  :
  onMudouValor(){
    console.log(evento);
  }
  :
```


* Edit Component `.\node-angular2\prj-data-binding\src\app\output-property\output-property.component.ts`
  * import ` Input, Output, EventEmitter`
  * add property declaration `@Input() valor: number = 0`
  * define methods `incrementa()` e `decrementa()`

```.\node-angular2\prj-data-binding\src\app\output-property\output-property.component.ts
  :
import { Component, Input, Output, EventEmitter } from '@angular/core';
  :
  @Input() valor:number = 0;
  @Output() mudouValor = new EventEmitter();

  incrementa(){
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa(){
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }

  :
```

* Run project and observe result on browser

```bash
$ cd prj-data-binding
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-data-binding
$ ng serve
```

```browser
+-------------------------------------------------------------+
| http://localhost:4200                                       |
+-------------------------------------------------------------+
|  Input/Output Properties                                    |
|    input-property works!                                    |
|    nomeDataBinding: nomeDataBinding                         |
|    nomeDataBinding2: nomeDataBinding2                       |
|  Output Properties                                          |
|    output-property works!                                   |
|     [-] [ 10 ] [+]                                          |
+-------------------------------------------------------------+
```


#### 3.5.21.4.8. Component Life Cycle
Ciclo de vida de um componente

* [Curso Angular #15: Ciclo de vida do Componente](https://www.youtube.com/watch?v=4Z543sAKmBA&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=16)

* O Angular possui eventos que são disparados automaticamentes:
  * **ngOnChanges**: before ngOnInit when property-bindign is updated
  * **ngOnInit**: when Component is initialized
  * **ngDoCheck**: each cycle of changes verify
  * **ngAfterContentInit**: after insert external content into view
  * **ngAfterContentChecked**: each content insert verify
  * **ngAfterViewChecked**: each content / child content is verify
  * **ngOnDestroy**: before directive of component destroy


* Create New Component to test Life Cycle

```bash
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-data-binding
$ ng generate component life-cycle
CREATE src/app/life-cycle/life-cycle.component.css (0 bytes)
CREATE src/app/life-cycle/life-cycle.component.html (25 bytes)
CREATE src/app/life-cycle/life-cycle.component.spec.ts (581 bytes)
CREATE src/app/life-cycle/life-cycle.component.ts (217 bytes)
UPDATE src/app/app.module.ts (806 bytes)
```

* Edit Template `.\node-angular2\prj-data-binding\src\app\app.component.html`
  * Edit Template class: add reference **selector** `app-life-cycle`
  * Edit Template class: use **property bind** `valorInicial` with local variable `valor`
  * Edit Template class: use **event bind** (click)="mudarValor()"
  * Edit Template class: use **event bind** (click)="deletarValor()"
  * Edit Template class: use **directive ngIf** 
  * replace all by

```.\node-angular2\prj-data-binding\src\app\app.component.html
     :
<!-- <app-data-binding></app-data-binding> -->
<app-life-cycle [valorInicial]="valor" *ngIf="!deletarCiclo"></app-life-cycle>
<button (click)="mudarValor()">Mudar Valor</button>
<button (click)="destruirCiclo()">Deletar Ciclo</button>
     :
```


* Edit Component class `.\node-angular2\prj-data-binding\src\app\app.component.ts`
  * Edit Component class: define and initialize variable `valor: number = 5`

```.\node-angular2\prj-data-binding\src\app\app.component.ts
    :
export class AppComponent {
  title = 'prj-data-binding';
  valor: number = 5;
  deletarCiclo: boolean = false;

  mudarValor() {
    this.valor++;
  }

  destruirCiclo(){
    this.deletarCiclo = true;
  }
    :
```

* Edit Component class `.node-angular2\prj-data-binding\src\app\life-cycle\life-cycle.component.ts`
  * Edit Component class LifeCycleComponent: add log on each hooks`ngOnChanges()`, `ngOnInit()`, `ngDoCheck()`, `ngAfterContentInit()`, `ngAfterContentChecked()`, `ngAfterViewChecked()`, `ngOnDestroy()`
  * Import `Input` library and expose variable `valorInicial`


```.\node-angular2\prj-data-binding\src\app\life-cycle\life-cycle.component.ts
     :
export class LifeCycleComponent {

  @Input() valorInicial: number = 10;

  constructor(){
    this.log('constructor()');
  }

  ngOnInit() {
    this.log('ngOnInit()');
  }

  ngOnChanges(){
    this.log('ngOnChanges()');
  }
  
  ngDoCheck(){
    this.log('ngDoCheck()');
  }
  
  ngAfterContentInit(){
    this.log('ngAfterContentInit()');
  }
  
  ngAfterContentChecked(){
    this.log('ngAfterContentChecked()');
  }
  
  ngAfterViewChecked(){
    this.log('ngAfterViewChecked()');
  }
  
  ngOnDestroy(){
    this.log('ngOnDestroy()');
  }

  private log(hook: string) {
    console.log(hook);
  }
     :
```

* Edit Template class `.\node-angular2\prj-data-binding\src\app\life-cycle\life-cycle.component.html`
  * Edit Template class add interpolation show variable valorInicial

```.\node-angular2\prj-data-binding\src\app\life-cycle\life-cycle.component.html
    :
<p>life-cycle works!</p>

<p>valor: {{ valorInicial }}</p>
    :
```

* Run project and observe result on browser and development tools

```bash
$ cd prj-data-binding
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-data-binding
$ ng serve
```

* Enter project url

```browser
+-------------------------------------------------------------+
| http://localhost:4200                                       |
+-------------------------------------------------------------+
| life-cycle works!                                           |
| valor: 5                                                    |
| +-------------+    +---------------+                        |
| | Mudar Valor |    | Deletar Ciclo |                        |
| +-------------+    +---------------+                        |
+-------------------------------------------------------------+
```

* Observe browser development tools - Log

```browser-devtools
+---------+---------------------------------------------------+
| Console |                                                   |
+---------+---------------------------------------------------+
|      :                                                      |
| constructor()                                               |
| life-cycle.component.ts:43 ngOnInit()                       |
| life-cycle.component.ts:43 ngDoCheck()                      |
| life-cycle.component.ts:43 ngAfterContentInit()             |
| life-cycle.component.ts:43 ngAfterContentChecked()          |
| life-cycle.component.ts:43 ngAfterViewChecked()             |
| core.mjs:26021 Angular is running in development mode.      |
| life-cycle.component.ts:43 ngDoCheck()                      |
| life-cycle.component.ts:43 ngAfterContentChecked()          |
| life-cycle.component.ts:43 ngAfterViewChecked()             |
|      :                                                      |
+-------------------------------------------------------------+
```

* Clear log's and click button `Mudar Valor`

```browser-devtools
+---------+---------------------------------------------------+
| Console |                                                   |
+---------+---------------------------------------------------+
|      :                                                      |
| life-cycle.component.ts:43 ngOnChanges()                    |
| life-cycle.component.ts:43 ngOnDoCheck()                    |
| life-cycle.component.ts:43 ngAfterContentChecked()          |
| life-cycle.component.ts:43 ngAfterViewChecked()             |
|      :                                                      |
+-------------------------------------------------------------+
```

* Clear log's and click button `Deletar Ciclo`

```browser
+-------------------------------------------------------------+
| http://localhost:4200                                       |
+-------------------------------------------------------------+
| +-------------+    +---------------+                        |
| | Mudar Valor |    | Deletar Ciclo |                        |
| +-------------+    +---------------+                        |
+-------------------------------------------------------------+
```

```browser-devtools
+---------+---------------------------------------------------+
| Console |                                                   |
+---------+---------------------------------------------------+
|      :                                                      |
| life-cycle.component.ts:43 ngOnDestroy()                    |
|      :                                                      |
+-------------------------------------------------------------+
```


#### 3.5.21.4.9. DOM access and Template ViewChild
How to access DOM and Template with decorator ViewChild

* [Curso Angular #16: Acesso ao DOM e ao Template com ViewChild](https://www.youtube.com/watch?v=WO3LdMeh8WU&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=17)

* Create New Component to use Data Binding

```bash
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-data-binding
$ ng generate component dom-access-with-viewchild
  :
```

* Edit Template `.\node-angular2\prj-data-binding\src\app\app.component.html`
  * Edit Template class: add reference **selector** `dom-access-with-viewchild`
  * replace all by

```.\node-angular2\prj-data-binding\src\app\app.component.html
     :
<!-- <app-data-binding></app-data-binding> -->

<!-- 
<app-life-cycle [valorInicial]="valor" *ngIf="!deletarCiclo"></app-life-cycle>
<button (click)="mudarValor()">Mudar Valor</button>
<button (click)="destruirCiclo()">Deletar Ciclo</button>
 -->

 <app-dom-access-with-viewchild [valor]="valor"></app-dom-access-with-viewchild>
     :
```

* Edit Component class `.\node-angular2\prj-data-binding\src\app\dom-access-with-viewchild\dom-access-with-viewchild.component.ts`
  * Edit Component class import `Input` and `ViewChild`
  * Edit Component class decorator `@Input()` to bind component variable `valor`
  * Edit Component class decorator `@ViewChild()` to bind component variable `campoValorInput` to template variable `campoInput`
  * Edit Component class implement function to capture and log value of initialization and changes on variable `valor` using Life Cycle `ngAfterViewInit()` and `ngOnChanges()`

```.\node-angular2\prj-data-binding\src\app\dom-access-with-viewchild\dom-access-with-viewchild.component.ts
    :
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
    :
export class DomAccessWithViewchildComponent {
  @Input() valor:number = 0;
  @ViewChild('campoInput') campoValorInput!: ElementRef;
    :
  ngAfterViewInit() {
    console.log('ngAfterViewInit()');
    console.log(this.campoValorInput.nativeElement);
  }
    :
```


* Edit Template class `.\node-angular2\prj-data-binding\src\app\dom-access-with-viewchild\dom-access-with-viewchild.component.html`
  * Edit Template class: add input text

```.\node-angular2\prj-data-binding\src\app\dom-access-with-viewchild\dom-access-with-viewchild.component.html
    :
<p>dom-access-with-viewchild works!</p>
<input type="text" [value]="valor" #campoInput>
    :
```

* Run project and observe result on browser and development tools

```bash
$ cd prj-data-binding
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-data-binding
$ ng serve
```

* Enter project url

```browser
+-------------------------------------------------------------+
| http://localhost:4200                                       |
+-------------------------------------------------------------+
| dom-access-with-viewchild works!                            |
| [  5  ]                                                     |
+-------------------------------------------------------------+
```

* Observe browser development tools - Log

```browser-devtools
+---------+---------------------------------------------------+
| Console |                                                   |
+---------+---------------------------------------------------+
|      :                                                      |
| ngAfterViewInit()                                           |
| input                                                       |
|      :                                                      |
| value: "5"                                                  |
|      :                                                      |
+-------------------------------------------------------------+
```

#### 3.5.21.5. Angular CLI
How to install, create project, ng new, ng init, ng serve

* [Curso Angular #17: Angular CLI: Instalação e criação de projetos: ng new e ng serve](https://www.youtube.com/watch?v=RlfOhrhPh_Y&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=18)

#### 3.5.21.5.1. Angular CLI - Install

* Pre-requisites: Node ( version >4 ) and NPM - Node Package Manager
* Install globally `npm install -g @angular/cli`
* Official Documentation - https://github.com/angular/angular-cli

```bash
$ node -v
v18.16.0
$ npm install -g @angular/cli
```

#### 3.5.21.5.2. Angular CLI - Create Project

* Option 1: Create New with `ng new <project-name>`

```bash
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2
$ ng new prj-directives
? Would you like to add Angular routing? No
? Which stylesheet format would you like to use? (Use arrow keys)
  :
CREATE prj-directives/README.md (1067 bytes)
  :
CREATE prj-directives/src/main.ts (214 bytes)
  :
⠋ Installing packages (npm)...
✔ Packages installed successfully.
    Directory is already under version control. Skipping initialization of git.
  :
```

* Option 2: Init a project on a existing directory `ng init`

```bash
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2
$ mkdir prj-directives
$ cd prj-directives
$ ng init
```


#### 3.5.21.5.3. Angular CLI - Start project

```bash
$ cd prj-directives
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-directives
$ ng serve
    :
** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **
    :
```

```browser
+-------------------------------------------------------------+
| http://localhost:4200                                       |
+-------------------------------------------------------------+
| prj-directives app is running!                              |
|           :                                                 |
+-------------------------------------------------------------+
```

#### 3.5.21.5.4. Angular CLI - Directive ng-if

* Step-1: Use CLI to generate component `directive-ng-if`
* Step-2: Use CLI to generate service `directive-ng-if`

```bash
$ cd prj-directives
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-directives
$ ng generate component directive-ng-if
  :
$ ng generate service directive-ng-if/directive-ng-if
  :
```


#### 3.5.21.5.5. Angular CLI - Using pre-processors: sass, less and stylus

* [Curso Angular #19: Angular CLI: Usando pré-processadores (Sass, Less, Stylus)](https://www.youtube.com/watch?v=Z0umP8p2aW8&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=20)

* Step-1: Sintax generate new project

```bash
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2
$ ng new prj-pre-processor-sass --style=sass
  :
$ ng new prj-pre-processor-less --style=less
  :
$ ng new prj-pre-processor-stylus --style=stylus
  :
```

* Step-2: Sintax modify existing process

```bash
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-pre-processor-sass
$ ng set defaults.styleExt scss
  :
$ ng set defaults.styleExt less
  :
$ ng set defaults.styleExt stylus
  :
```

#### 3.5.21.5.6. Angular CLI - Using lint, test e2e

* [Curso Angular #20: Angular CLI: ng lint, ng test, ng e2e](https://www.youtube.com/watch?v=TZDWgAfYYqo&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=21)
* [ng lint](https://angular.io/cli/lint)
* [ng test](https://angular.io/cli/test)
* [ng e2e](https://angular.io/cli/e2e)

* Step-1: Using lint - Check code using style guide

```bash
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-directives
$ ng lint
  :
Would you like to add ESLint now? Yes
  :
```

* Step-2: Create a new component and violate a best practice

```bash
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-directives
$ ng generate component test-lint
  :
```

* Step-3: Edit `.\node-angular2\prj-directives\src\app\test-lint\test-lint.component.ts`
  * Create a new variable using spaces between columns that is not a Best Practice `minhaVariavel : string;`

* Step-4: Run lint and observe message of not a Best Practice

```bash
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-directives
$ ng lint
  :
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-directives/src/app/test-lint/test-lint.component.ts
  9:3  error  Type string trivially inferred from a string literal, remove type annotation  @typescript-eslint/no-inferrable-types
  :
```

* Step-5: Explore Jasmine Unit Test `.\node-angular2\prj-directives\src\app\app.component.spec.ts`
  * Observe `.. it( ... should have as title 'prj-directives' ...`
  * SET CHROME_BIN variable

```bash
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-directives
$ export CHROME_BIN='/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe'
$ ng test
  :
✔ Browser application bundle generation complete.
28 08 2023 21:08:02.098:WARN [karma]: No captured browser, open http://localhost:9876/
28 08 2023 21:08:02.304:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
28 08 2023 21:08:02.305:INFO [launcher]: Launching browsers Chrome with concurrency unlimited
28 08 2023 21:08:02.338:INFO [launcher]: Starting browser Chrome
28 08 2023 21:08:02.340:ERROR [launcher]: No binary for Chrome browser on your platform.
  Please, set "CHROME_BIN" env variable.
  :
```

* Step-6: Explore Protractor Integration Test `.\node-angular2\prj-directives\src\app\app.component.spec.ts`
  * Observe `.. it( ... should have as title 'prj-directives' ...`

```bash
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-directives
$ export CHROME_BIN='/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe'
$ ng e2e
```


#### 3.5.21.5.7. Angular CLI - Project folders structure

* [Curso Angular #21: Angular CLI: Estrutura do projeto](https://www.youtube.com/watch?v=ICvq9YeDCh0&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=22)

* Why use Angular CLI?
  * Creates project structure
  * Generates initial HTML, Typscript, CSS and Unit test files
  * Creates package.json
  * Install NPM - Node Package Management dependencies
  * Configures Karma to execute Unit Test
  * Configures Protractor to execute end-to-end tests
  * Initializes Git repository
  * Creates commands to build and deploy application in production


#### 3.5.21.6. Build Deploy and Production
How to build a Deploy package and run Production

* [Curso Angular #22: Angular CLI: Gerando build de produção](https://www.youtube.com/watch?v=U0zHj14mNrI&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=23)

* Step-1: Build **Development** `ng build` (default)
  * **Development** code is not obfuscated and not minified and can be used for debug proposals

```bash
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-directives
$ ng build
      :
✔ Browser application bundle generation complete.
✔ Copying assets complete.
✔ Index html generation complete.
Initial Chunk Files           | Names         |  Raw Size | Estimated Transfer Size
main.cfe7cc91c77d7b55.js      | main          | 125.69 kB |                37.56 kB
polyfills.7c71b41b0c13f5f4.js | polyfills     |  33.02 kB |                10.64 kB
runtime.e8f73fdad719f0ee.js   | runtime       | 906 bytes |               519 bytes
styles.ef46db3751d8e999.css   | styles        |   0 bytes |                       -
                              | Initial Total | 159.60 kB |                48.71 kB
Build at: 2023-08-29T12:26:31.205Z - Hash: 4e315ba1fd46bb2b - Time: 53346ms
      :
$ ls -laR ./dist
      :
./dist/prj-directives:
      :
-rwxrwxrwx 1 josemarsilva josemarsilva    575 Aug 29 09:26 index.html
-rwxrwxrwx 1 josemarsilva josemarsilva 128707 Aug 29 09:26 main.cfe7cc91c77d7b55.js
-rwxrwxrwx 1 josemarsilva josemarsilva  33817 Aug 29 09:26 polyfills.7c71b41b0c13f5f4.js
-rwxrwxrwx 1 josemarsilva josemarsilva    906 Aug 29 09:26 runtime.e8f73fdad719f0ee.js
-rwxrwxrwx 1 josemarsilva josemarsilva      0 Aug 29 09:26 styles.ef46db3751d8e999.css      :
      :
```

* Step-2: Build **Production** `ng build --configuration production` 
  * **Production** code is obfuscated and minified and can't be used for debug proposals

```bash
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-directives
$ rm -rf ./dist/
$ cat angular.json | jq '.projects."prj-directives".architect.build.configurations'
      :
{
  "production": {
    "budgets": [
      :
    "outputHashing": "all"
  },
  "development": {
    "buildOptimizer": false,
    "optimization": false,
    "vendorChunk": true,
    "extractLicenses": false,
    "sourceMap": true,
    "namedChunks": true
  }
      :
$ ng build --configuration production
      :
✔ Browser application bundle generation complete.
✔ Copying assets complete.
✔ Index html generation complete.
Initial Chunk Files           | Names         |  Raw Size | Estimated Transfer Size
main.cfe7cc91c77d7b55.js      | main          | 125.69 kB |                37.56 kB
polyfills.7c71b41b0c13f5f4.js | polyfills     |  33.02 kB |                10.64 kB
runtime.e8f73fdad719f0ee.js   | runtime       | 906 bytes |               519 bytes
styles.ef46db3751d8e999.css   | styles        |   0 bytes |                       -
                              | Initial Total | 159.60 kB |                48.71 kB
Build at: 2023-08-29T13:03:35.830Z - Hash: 4e315ba1fd46bb2b - Time: 8739ms
      :
$ ls -laR ./dist
      :
./dist/prj-directives:
      :
-rwxrwxrwx 1 josemarsilva josemarsilva  12269 Aug 29 10:03 3rdpartylicenses.txt
-rwxrwxrwx 1 josemarsilva josemarsilva    948 Aug 29 10:03 favicon.ico
-rwxrwxrwx 1 josemarsilva josemarsilva    575 Aug 29 10:03 index.html
-rwxrwxrwx 1 josemarsilva josemarsilva 128707 Aug 29 10:03 main.cfe7cc91c77d7b55.js
-rwxrwxrwx 1 josemarsilva josemarsilva  33817 Aug 29 10:03 polyfills.7c71b41b0c13f5f4.js
-rwxrwxrwx 1 josemarsilva josemarsilva    906 Aug 29 10:03 runtime.e8f73fdad719f0ee.js
-rwxrwxrwx 1 josemarsilva josemarsilva      0 Aug 29 10:03 styles.ef46db3751d8e999.css
      :
```

* Step-3: Test deployment running `http-server` to serve your application to browser

```bash
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-directives
$ cd dist
$ http-server
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8080
  http://172.24.139.148:8080
Hit CTRL-C to stop the server
```


#### 3.5.21.7. Install libraries: Bootstrap
How to install libraries: Bootstrap

* [Curso Angular #118: Instalando Bootstrap](https://www.youtube.com/watch?v=Vgj9N_Lw-r4)
* [How to Add Bootstrap to an Angular CLI project](https://loiane.com/2017/08/how-to-add-bootstrap-to-an-angular-cli-project/)

* Step-1: Create New project to test Bootstrap

```bash
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2
$ ng new prj-bootstrap
      :
```

* Step-2: Instal NPM - Node Package Module - Bootstrap

```bash
$ cd prj-bootstrap
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-bootstrap
$ npm install bootstrap --save
      :
$ cat package.json | grep 'bootstrap'
      :
    "bootstrap": "^5.3.1"
      :
```

* Step-3: Find out where is bootstrap min css file

```bash
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-bootstrap
$ find . -name bootstrap.min.css
./node_modules/bootstrap/dist/css/bootstrap.min.css
```

* Step-4: Importing the CSS - Option 1: Configure `angular.json`
  * Edit `.\node-angular2\prj-bootstrap\angular.json`

```.\node-angular2\prj-bootstrap\angular.json
        :
            "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ],
        :
```

* Step-5: Importing the CSS - Option 2: Configure `styles.scss`
  * Edit `.\node-angular2\prj-bootstrap\src\styles.css`
  * `~` is the same as `./node_modules/`

```.\node-angular2\prj-bootstrap\src\styles.css
        :
/* You can add global styles to this file, and also import other style files */
@import '~bootstrap/dist/css/bootstrap.min.css';
        :
```

* Step-6: Bootstrap JavaScript Components with ngx-bootstrap

```bash
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-bootstrap
$ npm install ngx-bootstrap --save
        :
```

* Step-7: Option: Install Bootstrap and ngx-bootstrap at same time

```bash
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-bootstrap
$ npm install bootstrap ngx-bootstrap --save
        :
```

* Step-8: Adding the required Bootstrap modules in app.module.ts
  * Edit `.\node-angular2\prj-bootstrap\src\app\app.module.ts` and import Bootstrap, For example, suppose we want to use the Dropdown, Tooltip and Modal components:

```node-angular2\prj-bootstrap\src\app\app.module.ts
    :
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
    :
@NgModule({
    :
  imports: [
    BrowserModule,
    BsDropdownModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot()
  ],
    :
```

* Step-9: Edit HTML file
  * Edit `.\node-angular2\prj-bootstrap\src\app\app.component.html`

```.\node-angular2\prj-bootstrap\src\app\app.component.html
<h1>prj-bootstrap app is running!</h1>

<nav class="navbar navbar-default">
  <div class="container-fluid">
      <div class="navbar-header">
          <a class="navbar-brand">
            <img src="assets/img/ngx-bootstrap.svg" class="logo">
          </a>
          <span class="navbar-brand">Angular + Bootstrap</span>
      </div>
      <ul class="nav navbar-nav">
          <li class="active"><a href="#">
            Link <span class="sr-only">(current)</span>
          </a></li>
          <li><a href="#">Link</a></li>
          <li class="dropdown" dropdown> <!-- {1} -->
              <a dropdownToggle role="button"> <!-- {2} -->
                Dropdown <span class="caret"></span></a>
              <ul *dropdownMenu class="dropdown-menu"> <!-- {3} -->
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="#">Separated link</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="#">One more separated link</a></li>
              </ul>
          </li>
      </ul>
  </div>
</nav>
```

* Step-10: Start application and Test on browser

```bash
$ pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-bootstrap
$ ng serve
```


#### 3.5.21.8. Directives

* Type of directives:
  * **Structural**: Used to modify DOM HTML
  * **Attributes**: Interacts with elements (modify class or styles)

#### 3.5.21.8.1. Directives - *ngIf

* [Curso Angular 2 #25: Diretivas: ngIf](https://www.youtube.com/watch?v=7zJNIp44B60&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=26)
* [Curso Angular 2 #28: Diretivas: sobre o * e template](https://www.youtube.com/watch?v=e-OGZocglTA&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=29)
* *ngIf vs hidden: 
  * *ngIf recomendado para elementos grandes
  * hidden recomendado para árvores de elementos pequenas (menos custoso ponderar segurança)

* Step-01: Create component to test `*ngIf`

```bash
$  pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-directives
$ ng generate component directive-ngif
```

* Step-02: Edit main app Template and configure use of selector
  * Edit `.\src\app\app.component.html` use selector component `app-directive-ngif`

```.\node-angular2\prj-directives\src\app\app.component.html
  :
<app-directive-ngif></app-directive-ngif>
  :
````

* Step-03: Edit Component
  * Edit `.\src\app\directive-ngif\directive-ngif.component.ts`
  * Create variable property string cursos[]

```.\src\app\directive-ngif\directive-ngif.component.ts
  :
export class DirectiveNgifComponent {

  cursos: string[] = ["Angular 2"];
  
  mostrarCursos: boolean = false;


  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }
  :
```

* Step-04: Edit Template
  * Edit `.\src\app\directive-ngif\directive-ngif.component.html`

```directive-ngif.component.html
<h3>*ngIf - expression</h3>

<div *ngIf="cursos.length > 0">
    <p>*ngIf="cursos.length > 0"</p>
    <p>Lista de cursos: {{ cursos }}</p>
</div>
<div *ngIf="cursos.length == 0">
    <p>*ngIf="cursos.length == 0"</p>
    Não há cursos para serem listados
</div>

<h3>*ngIf - boolean</h3>

<div *ngIf="mostrarCursos">
    <p>*ngIf="mostrarCursos"</p>
    <p>Lista de cursos: {{ cursos }}</p>
</div>
<div *ngIf="!mostrarCursos">
    <p>*ngIf="!mostrarCursos"</p>
    Não há cursos para serem listados
</div>

<h3>*ngIf - toggle mostrarCursos</h3>

<button (click)="onMostrarCursos()">Mostrar/Esconder cursos</button>
```

#### 3.5.21.8.2. Directives - *ngSwitch, *ngSwitchCase and *ngSwitchDefault

* [Curso Angular #26: Diretivas: ngSwitch, ngSwitchCase e ngSwitchDefault](https://www.youtube.com/watch?v=uToE2t9RHME&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=27)
* [Bootstrap - Official Documentation - version 5.3, component NavBar](https://getbootstrap.com/docs/5.3/components/navbar/)
* [npm ngx-bootstrap-navbar - Official Documentation](https://www.npmjs.com/package/ngx-bootstrap-navbar)
* [Starter Project - Angular - NavBar](https://stackblitz.com/edit/ngx-bootstrap-rc8ab4?file=app%2Fapp.component.html)

* Step-01: Create component to test `*ngSwitch`, `*ngSwitchCase` and `*ngSwitchDefault`

```bash
$  pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-directives
$ ng generate component directive-ngswitch
  :
```

* Step-02: Edit main app Template and configure use of selector
  * Edit `.\src\app\app.component.html` use component selector `app-directive-ngswitch`

```.\node-angular2\prj-directives\src\app\app.component.html
  :
<!-- <app-directive-ngif></app-directive-ngif> -->
<app-directive-ngswitch></app-directive-ngswitch>
  :
````

* Step-03: Install Bootstrap

```bash
$  pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-directives
$ npm install bootstrap --save
  :
```

* Step-04: Edit `angular.json` add Bootstrap Style `./node_modules/bootstrap/dist/css/bootstrap.min.css`
  * `cat angular.json | jq '.projects."prj-directives".architect.build.options.styles'`
  * Edit `.\prj-directives\angular.json`

```.\src\app\app.module.ts
    :
            "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ],
    :
```

* Step-05: Edit Template
  * Edit `.\src\app\directive-ngswitch\directive-ngswitch.component.html`

```.\src\app\directive-ngswitch\directive-ngswitch.component.html
  :
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" (click)="aba = 'home'">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" (click)="aba = 'features'">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" (click)="aba = 'pricing'">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true" (click)="aba = 'disable'">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
</nav>

<div class="container" [ngSwitch]="aba" >
    <p *ngSwitchCase="'home'">Modo <b>home</b> ativado</p>
    <p *ngSwitchCase="'features'">Modo <b>features</b> ativado</p>
    <p *ngSwitchCase="'pricing'">Modo <b>pricing</b> ativado</p>
    <p *ngSwitchDefault>Modo <b>default</b> ativado</p>
</div>
  :
```

* Step-06: Edit Component
  * Edit `.\src\app\directive-ngswitch\directive-ngswitch.component.ts`
  * Create a variable 

```.\src\app\directive-ngswitch\directive-ngswitch.component.ts
  :
export class DirectiveNgswitchComponent {
  aba: string = 'home'; // ['home', 'features', 'pricing']
  :
```

* Step-07: Run application and observe results

```bash
$ ng serve
```

```browser
+-------------------------------------------------------------+
| http://localhost:4200                                       |
+-------------------------------------------------------------+
| NavBar | Home | Features | Pricing | Disabled               |
|                                                             |
|    Modo home ativado                                        |
|           :                                                 |
+-------------------------------------------------------------+
```


#### 3.5.21.8.3. Directives - *ngFor

* [Curso Angular 2 #27: Diretivas: ngFor](https://www.youtube.com/watch?v=seEbP5FGcvo&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=28)

* Step-01: Create component to test `*ngFor`

```bash
$  pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-directives
$ ng generate component directive-ngfor
  :
```

* Step-02: Edit main app Template and configure use of selector
  * Edit `.\src\app\app.component.html` use component selector `app-directive-ngfor`

```.\node-angular2\prj-directives\src\app\app.component.html
  :
<!-- <app-directive-ngif></app-directive-ngif> -->
<!-- <app-directive-ngswitch></app-directive-ngswitch> -->
<app-directive-ngfor></app-directive-ngfor>
  :
````

* Step-03: Edit Component
  * Edit `.\src\app\directive-ngswitch\directive-ngfor.component.ts`
  * Create a variable 

```.\src\app\directive-ngswitch\directive-ngfor.component.ts
  :
export class DirectiveNgforComponent {
  cursos: string[] = ["Angular 2", "Java", "Node JS"];
  :
```

* Step-04: Edit Template
  * Edit `.\src\app\directive-ngswitch\directive-ngfor.component.html`
  * Implement For loop printing cursos[] on `<ul><li> cursos[i] </li></ul>`

```.\src\app\directive-ngswitch\directive-ngfor.component.html
  :
  :
```

* Step-05: Run application and observe results

```bash
$ ng serve
```

```browser
+-------------------------------------------------------------+
| http://localhost:4200                                       |
+-------------------------------------------------------------+
| directive-ngfor                                             |
| 1: Angular 2                                                |
| 2: Java                                                     |
| 3: Node JS                                                  |
+-------------------------------------------------------------+
```

#### 3.5.21.8.4. Directives - *ngClass

* [Curso Angular #29: Diretivas: ngClass](https://www.youtube.com/watch?v=DCFJZzFwDKs&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=30)
* [Bootstrap Icons - Official Documentation](https://icons.getbootstrap.com/)

* Step-01: Create component to test `*ngClass`

```bash
$  pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-directives
$ ng generate component directive-ngclass
  :
```

* Step-02: Edit main app Template and configure use of selector
  * Edit `.\src\app\app.component.html` use component selector `app-directive-ngclass`

```.\node-angular2\prj-directives\src\app\app.component.html
  :
<!-- <app-directive-ngif></app-directive-ngif> -->
<!-- <app-directive-ngswitch></app-directive-ngswitch> -->
<!-- <app-directive-ngfor></app-directive-ngfor> -->
<app-directive-ngclass></app-directive-ngclass>
  :
````

* Step-03: Install Bootstrap

```bash
$  pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-directives
$ npm install bootstrap --save
  :
$ npm install bootstrap-icons --save
  :
```

* Step-04: Edit `angular.json` add Bootstrap CSS icons `./node_modules/bootstrap/dist/css/bootstrap.min.css`
  * `cat angular.json | jq '.projects."prj-directives".architect.build.options.styles'`
  * Edit `.\prj-directives\angular.json`

```.\prj-directives\angular.json
    :
            "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "node_modules/bootstrap-icons/font/bootstrap-icons.min.css",
              "src/styles.css"
            ],
    :
```

* Step-05: Edit Template
  * Edit `.\src\app\directive-ngswitch\directive-ngclass.component.html`
  * Show Icon Favorite using property flag on component
  * Implement toggle favorite icon

```.\src\app\directive-ngswitch\directive-ngclass.component.html
  :
<h3>directive-ngclass</h3>

<h5>Using class as property binding </h5>

Favorite icons toggle (click) 
    <i class="bi" 
        [class.bi-bookmark-star]="!meuFavorito"
        [class.bi-bookmark-star-fill]="meuFavorito"
        (click)="onClick()"
    ></i>

<h5>Using class as ngClass</h5>

Favorite icons toggle (click) 
<i class="bi" 
    [ngClass]="{
        'bi-bookmark-star': !meuFavorito,
        'bi-bookmark-star-fill': meuFavorito
    }"
    (click)="onClick()"
></i>
  :
```

* Step-06: Edit Component
  * Edit `.\src\app\directive-ngswitch\directive-ngclass.ts`
  * Create a variable 

```.\src\app\directive-ngswitch\directive-ngclass.component.ts
  :
export class DirectiveNgclassComponent {
  meuFavorito: boolean = false;

  onClick() {
    this.meuFavorito = !this.meuFavorito;
  }
  :
```

* Step-07: Run application and observe results

```bash
$ ng serve
```

```browser
+-------------------------------------------------------------+
| http://localhost:4200                                       |
+-------------------------------------------------------------+
| directive-ngclass                                           |
|   Using class as property binding                           |
|     Favorite icons toggle (click)                           |
|   Using class as ngClass                                    |
|     Favorite icons toggle (click)                           |
+-------------------------------------------------------------+
```


#### 3.5.21.8.5. Directives - *ngStyle

* [Curso Angular #30: Diretivas: ngStyle](https://www.youtube.com/watch?v=WBf5sgByOY4&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=31)
* [Bootstrap Icons - Official Documentation](https://icons.getbootstrap.com/)

* Step-01: Create component to test `*ngStyle`

```bash
$  pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-directives
$ ng generate component directive-ngstyle
  :
```

* Step-02: Edit main app Template and configure use of selector
  * Edit `.\src\app\app.component.html` use component selector `app-directive-ngclass`

```.\node-angular2\prj-directives\src\app\app.component.html
  :
<!-- <app-directive-ngif></app-directive-ngif> -->
<!-- <app-directive-ngswitch></app-directive-ngswitch> -->
<!-- <app-directive-ngfor></app-directive-ngfor> -->
<!-- <app-directive-ngclass></app-directive-ngclass> -->
<app-directive-ngstyle></app-directive-ngstyle>
  :
````


* Step-03: Edit Template
  * Edit `.\src\app\directive-ngswitch\directive-ngstyle.component.html`
  * Implement **property bind** to make ativo
  * Implement **Two way data bind** to change size
  * Implement **ngStyle** to change style (require FormsModule)

```.\src\app\directive-ngstyle\directive-ngstyle.component.html
  :
<h3>directive-ngstyle works!</h3>
<h5>Property Bind and Two Way data Bind to change active and size</h5>
<button
    [style.backgroundColor]="ativo ? 'blue' : 'gray'"
    [style.color]="ativo ? 'white' : 'black'"
    [style.fontWeigth]="ativo ? 'bold' : 'normal'"
    [style.fontSize]="tamanhoFonte + 'px'"
    (click)="mudarAtivo()"
> Mudar atributo 'ativo'
</button>
<br>
<input type="text" [(ngModel)]="tamanhoFonte">
<h5>Styles com diretiva ngStyle</h5>
<button
    [ngStyle]="{
        'backgroundColor': (ativo ? 'blue' : 'gray'),
        'color': (ativo ? 'white' : 'black'),
        'fontWeigth': (ativo ? 'bold' : 'normal'),
        'fontSize': tamanhoFonte + 'px'
    }"
    (click)="mudarAtivo()"
> Mudar atributo 'ativo'
</button>
  :
```

* Step-06: Edit Component
  * Edit `.\src\app\directive-ngswitch\directive-ngclass.ts`
  * Create a variable and method to toggle active

```.\src\app\directive-ngstyle\directive-ngstyle.component.ts
  :
export class DirectiveNgstyleComponent {
  ativo: boolean = false;
  tamanhoFonte: number = 10;
  mudarAtivo() {
    this.ativo = !this.ativo;
  }
  :
```

* Step-07: Edit Application Module
  * Edit `.\src\app\app.module.ts`
  * Import ngModule

```.\src\app\app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
    :
import { FormsModule } from '@angular/forms';
    :
@NgModule({
    :
  imports: [
    BrowserModule,
    FormsModule
  ],
    :
```


* Step-08: Run application and observe results

```bash
$ ng serve
```

```browser
+---------------------------------------------------------------+
| http://localhost:4200                                         |
+---------------------------------------------------------------+
| directive-ngstyle works!                                      |
| Property Bind and Two Way data Bind to change active and size |
|   Mudar atributo 'ativo'                                      |
|   [ 20 ]                                                      |
| Styles com diretiva ngStyle                                   |
|   Mudar atributo 'ativo'                                      |
+---------------------------------------------------------------+
```


#### 3.5.21.8.6. Directives - Elvis Operator

* [Curso Angular #31: Operador Elvis ("?")](https://www.youtube.com/watch?v=z2GUOnkGCdc&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=32)

* Step-01: Create component to test `Elvis Operator`

```bash
$  pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-directives
$ ng generate component elvis-operator
  :
```

* Step-02: Edit main app Template and configure use of selector
  * Edit `.\src\app\app.component.html` use component selector `app-directive-ngclass`

```.\node-angular2\prj-directives\src\app\app.component.html
  :
<!-- <app-directive-ngif></app-directive-ngif> -->
<!-- <app-directive-ngswitch></app-directive-ngswitch> -->
<!-- <app-directive-ngfor></app-directive-ngfor> -->
<!-- <app-directive-ngclass></app-directive-ngclass> -->
<!-- <app-directive-ngstyle></app-directive-ngstyle> -->
<app-elvis-operator></app-elvis-operator>
  :
````


* Step-03: Edit Template
  * Edit `.\src\app\elvis-operator\elvis-operator.component.html`
  * Use interpolation to show object `tarefa`
  * But only shows responsible if not null

```.\src\app\elvis-operator\elvis-operator.component.html
  :
<h3>elvis-operator works!</h3>
<p> Descrição: {{ tarefa.descricao }} </p>
<!-- Error if tarefa.responsavel is null </p> -->
<!-- <p> Responsável: {{ tarefa.responsavel.nome }} </p> -->
<h5>Using ternary operator</h5>
<p> Responsável: {{ tarefa.responsavel != null ? tarefa.responsavel.nome : '' }} </p>
<h5>Using elvis operator</h5>
<p> Responsável: {{ tarefa.responsavel?.nome }} </p>
  :
```

* Step-06: Edit Component
  * Edit `.\src\app\elvis-operator\elvis-operator.component.ts`
  * Create variable object task: any

```.\src\app\elvis-operator\elvis-operator.component.ts
  :
export class ElvisOperatorComponent {
  tarefa: any = {
    descricao: 'Descrição da tarefa',
    responsavel: null
  }
  :
```

* Step-07: Run application and observe results

```bash
$ ng serve
```

```browser
+---------------------------------------------------------------+
| http://localhost:4200                                         |
+---------------------------------------------------------------+
| elvis-operator works!                                         |
|   Descrição: Descrição da tarefa                              |
|     Using ternary operator                                    |
|       Responsável:                                            |
|     Using elvis operator                                      |
|       Responsável:                                            |
+---------------------------------------------------------------+
```

#### 3.5.21.8.7. Directives - ng-content

* [Curso Angular #32: ng-content](https://www.youtube.com/watch?v=fud-ezN6RJo&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=33)
* [Bootstrap - Official Documentation](https://getbootstrap.com/)

* Step-01: Create component to test `ng-content`

```bash
$  pwd
/mnt/c/GitHome/ws-github-03/study-node/node-angular2/prj-directives
$ ng generate component ng-content
  :
```

* Step-02: Edit main app Template and configure use of selector
  * Edit `.\src\app\app.component.html` use component selector ``

```.\node-angular2\prj-directives\src\app\app.component.html
  :
<!-- <app-directive-ngif></app-directive-ngif> -->
<!-- <app-directive-ngswitch></app-directive-ngswitch> -->
<!-- <app-directive-ngfor></app-directive-ngfor> -->
<!-- <app-directive-ngclass></app-directive-ngclass> -->
<!-- <app-directive-ngstyle></app-directive-ngstyle> -->
<!-- <app-elvis-operator></app-elvis-operator> -->
<app-ng-content>
    <div class="titulo">Conteúdo do Titulo do Painel</div>
    <div class="corpo">Conteúdo do Corpo do Painel</div>
</app-ng-content>
  :
````


* Step-03: Edit Template
  * Edit `.\src\app\ng-content\ng-content.component.html`

```.\src\app\ng-content\ng-content.component.html
  :
<h3>ng-content works!</h3>
<div class="panel-head">
    <p>Panel Head</p>
    <ng-content selector=".titulo"></ng-content>
</div>
<div class="panel-body">
    <p>Panel Body</p>
    <ng-content selector=".corpo"></ng-content>
</div>
  :
```

* Step-06: Edit Component
  * Edit `.\src\app\ng-content\ng-content.component.ts`

```.\src\app\ng-content\ng-content.component.ts
  :
  :
```

* Step-07: Run application and observe results

```bash
$ ng serve
```

```browser
+---------------------------------------------------------------+
| http://localhost:4200                                         |
+---------------------------------------------------------------+
| ng-content works!                                             |
|   Panel Head                                                  |
|   Panel Body                                                  |
|     Conteúdo do Titulo do Painel                              |
|     Conteúdo do Corpo do Painel                               |
+---------------------------------------------------------------+
```



#### 3.5.21.9. Services
#### 3.5.21.10. Pipes
#### 3.5.21.11. Roteamento
#### 3.5.21.12. Forms (Template Driven)
#### 3.5.21.13. Forms Reactive (Data-Driven)
#### 3.5.21.14. HTTP
#### 3.5.21.15. Debug





## I - Referências

* https://loiane.training/curso/angular