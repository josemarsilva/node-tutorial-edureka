Feature: Feature Autenticar e acessar o sistema

Feature Description

    Scenario:: Autenticar e acessar o sistema - profile (F)Financ/Financer
        Given Acessar o sistema pela url no ambiente desejado "https://frontend.hml.seuativo.com.br/"
        When Autenticar credenciais acessar o sistema "josemar.furegatti+sa.hml.financer@gmail.com" "EHDK!hekq6m7"
        Then Página principal de entrada do sistema será apresentada

    #Scenario:: Autenticar e acessar o sistema - profile (S)Sacador/Payee
    #    Given Acessar o sistema pela url no ambiente desejado "https://frontend.hml.seuativo.com.br/"
    #    When Autenticar credenciais acessar o sistema "josemar.furegatti+sa.hml.payee@gmail.com" "EHDK!hekq6m7"
    #    Then Página principal de entrada do sistema será apresentada

    #Scenario:: Autenticar e acessar o sistema - profile (P)Sacado/Payer
    #    Given Acessar o sistema pela url no ambiente desejado "https://frontend.hml.seuativo.com.br/"
    #    When Autenticar credenciais acessar o sistema "josemar.furegatti+sa.hml.payer@gmail.com" "EHDK!hekq6m7"
    #    Then Página principal de entrada do sistema será apresentada
