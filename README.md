## 1. Introdução

Este repositório contém os artefatos do projeto / laboratório   **node-tutorial-edureka**.  Este projeto / laboratório consiste em:
* Tutorial Node JS Full Course - Leran Nde.js in 7 hours | Node.js Tutorial for Beginners | Edureka

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
  * `npm install`: instala todos os módulos do package.json; 
  * `npm install <module-name>`: instala um módulo específico; 
  * `npm install <module-name> -g`: instala dependências globais;
* Global Objects
  * `__dirname`: diretório corrente que contém o código
  * `__filename`: nome do arquivo corrente que contém o código
* Timer in Node.js is an internal construt that calls a given function after certain period of time:
  * `setTimeout(callback, delay, [...args])`
  * `setInterval(callback, delay, [...args])`
  * `setImmediate(callback, delay, [...args])`


### 3.5.4. Filesystem

* [Filesystem | Node JS Full Course - Learn Node.js in 7 Hours | Node.js Tutorial for Beginners | Edureka](https://www.youtube.com/watch?v=JnvKXcSI7yk&t=1615s)

* File I/O is provided by simple wrappers `fs`
* File System functions podem ser Synchronous read ou Assynchronous
* File System functions para: open, path, flags e close
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

* Node.js is event-driven architecture: Certain objects (emitters) periodically emit events which further invokes the listeners
* Node.js provide concurrency by using the concept of events and callbacks
* All objects that emit events are instances of EventEmitter class

* Edit `text.txt`, `events.js` and Run

```cmd
C:\..\>node events.js
```

* [Events | Node JS Full Course - Learn Node.js in 7 Hours | Node.js Tutorial for Beginners | Edureka](https://www.youtube.com/watch?v=JnvKXcSI7yk&t=5625s)


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

* Edit `objects.js` and run

```cmd
C:\..\>node objects.js
```


### 3.5.8. Hands On Creating Node.js Project with dependencies (express, jade, nano, body-parser, errorhandler, url, serve-favicon, logger, json, express-session)

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

```cmd
C:\..\> md node-tutorial-edureka-handson-1
C:\..\> cd node-tutorial-edureka-handson-1
C:\..\node-tutorial-edureka-handson-1\> cd
C:\..\node-tutorial-edureka-handson-1
C:\..\> npm init
:
package name: (tutorial-edureka-handson-1)
version: (1.0.0)
description:
entry point: (index.js) app.js
test command:
git repository:
keywords:
author: Josemar Silva
license: (ISC)
About to write to C:\GitHome\ws-github-03\node-tutorial-edureka-handson-1\package.json:
:
{
  "name": "tutorial-edureka-handson-1",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Josemar Silva",
  "license": "ISC"
}
:
Is this OK? (yes) yes:
:
```

* Install dependencies and observe the results in file `package.json` and sub-folder `.\node_modules`

```cmd
C:\..\node-tutorial-edureka-handson-1\> cd
C:\..\node-tutorial-edureka-handson-1
C:\..\> npm install express --save
C:\..\> npm install jade --save
C:\..\> npm audit fix --force --save
C:\..\> npm install nano --save
C:\..\> npm audit fix --force --save
C:\..\> npm install body-parser --save
C:\..\> npm install errorhandler --save
C:\..\> npm install url --save
C:\..\> npm install serve-favicon --save
C:\..\> npm install logger --save
C:\..\> npm install json --save
C:\..\> npm install express-session --save
C:\..\> npm install method-override --save
C:\..\> npm install ejs --save
C:\..\> npm install --save
```

```cmd
C:\..\> dir
    :         :        :                :
19/07/2023  21:34    <DIR>          node_modules
19/07/2023  21:34            36.326 package-lock.json
19/07/2023  21:34               523 package.json
    :         :        :                :
C:\..\> type package.json
{
  "name": "tutorial-edureka-handson-1",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Josemar Silva",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.20.2",
    "errorhandler": "^1.5.1",
    "express": "^4.18.2",
    "express-session": "^1.17.3",
    "jade": "^0.29.0",
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

```cmd
C:\...\node-tutorial-edureka-handson-1> node app.js
```

* Open application on your browser
  * `http://localhost:3000`
* Test Application
  * Create contacts records: `[ {"name": "Um", "phone": "1"}, {"name": "Dois", "phone": "2"}, {"name": "Tres", "phone": "3"} ]`
  * Create database `teste`
  * Delete record `1`
  * View record `2`
  


## I - Referências

* [Node JS Full Course - Learn Node.js in 7 Hours | Node.js Tutorial for Beginners | Edureka](https://www.youtube.com/watch?v=JnvKXcSI7yk&list=PLORrDfZD1hkGDVKuuxZPq6770NpM5Y6kK)
