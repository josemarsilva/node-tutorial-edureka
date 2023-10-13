Feature: Feature Autenticar e acessar o sistema

Feature Description

    Scenario: Autenticar e acessar o sistema - profile (F)Financ/Financer
        Given Acessar o sistema pela url no ambiente desejado "https://site.com.br/"
        When Autenticar credenciais acessar o sistema "email@dominio.com.br" "************"
        Then Página principal de entrada do sistema será apresentada

    #Scenario: Autenticar e acessar o sistema - profile (S)Sacador/Payee
    #    Given Acessar o sistema pela url no ambiente desejado "https://site.com.br/"
    #    When Autenticar credenciais acessar o sistema "email@dominio.com.br" "************"
    #    Then Página principal de entrada do sistema será apresentada

    #Scenario: Autenticar e acessar o sistema - profile (P)Sacado/Payer
    #    Given Acessar o sistema pela url no ambiente desejado "https://site.com.br/"
    #    When Autenticar credenciais acessar o sistema "josemar.furegatti+sa.hml.payer@gmail.com" "************"
    #    Then Página principal de entrada do sistema será apresentada
