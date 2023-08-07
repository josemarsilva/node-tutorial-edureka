Feature: Feature name

Feature Description

    Scenario:: Autenticar e acessar o sistema
        Given Acessar o sistema pela url no ambiente desejado "https://frontend.hml.seuativo.com.br/"
        When Autenticar credenciais acessar o sistema "josemarsilva@inmetrics.com.br" "EHDK!hekq6m7"
        Then Página principal de entrada do sistema será apresentada
