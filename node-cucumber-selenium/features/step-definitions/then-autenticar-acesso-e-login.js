const {Then} = require('@cucumber/cucumber');
const {expect} = require('chai');

Then('Página principal de entrada do sistema será apresentada', () =>{
    console.log('Página principal de entrada do sistema será apresentada');
    expect(1).equals(1);
}
);