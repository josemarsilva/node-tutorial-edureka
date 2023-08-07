const {When, Before, After} = require('@cucumber/cucumber');

Before(function() {
    console.log('Before - Autenticar credenciais acessar o sistema');
});

After(function() {
    console.log('After - Autenticar credenciais acessar o sistema');
});

When('Autenticar credenciais acessar o sistema {string} {string}', (login, password) =>{
    console.log('Autenticar credenciais acessar o sistema', '||', 'login=', login, 'password=', password);

}
);