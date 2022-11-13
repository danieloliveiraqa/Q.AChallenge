# Q.AChallenge

<p align="left"> <img src="https://guisalmeida.com/static/d625d911d0062643ecc86729b8ecf061/b5381/cypress-cover.png" alt="mayribeirofernandes" /> </p>

### 💻 Topics

Integrado com:

- [x] https://github.com/badeball/cypress-cucumber-preprocessor
- [x] https://github.com/bahmutov/cypress-esbuild-preprocessor
- [x] https://www.npmjs.com/package/multiple-cucumber-html-reporter
- [x] https://github.com/cucumber/json-formatter

- ## 💻 Pre-Requesitos:

1. Node JS


- ## 💻 Projeto conta com uma estrutura que usa Cypress v10+ com cucumber, bdd, gherkin, report HTML e Page Objects

- Features: cenarios de testes
- Steps: os passos do comportamento do usuario ao realizar os testes
- Pages: elementos
- Utils: funcionalidades

## 🚀 Executando o projeto

Instale as dependencias do projeto: npm i

## Execute um teste via mod headless 

1. npx cypress run --env tags="@CT-01"

## Executando via cypress open

O projeto esta configurando para abrir conforme a keyword:

npx cypress open

pode acessar a feature e assim executar todos os testes de uma só vez.


## 🚀 Gerando uma evidencia dos testes

-- é preciso executar o teste via terminal com o comando: npx cypress run --env tags="@CT-01"

caso queira mudar o cenario a ser rodado, somente trocar pela TAG do teste! 

após rodar o teste, rode o comando: node cucumber-html-report

ira criar uma pasta de reports, entre nela e abra o index.html. 
