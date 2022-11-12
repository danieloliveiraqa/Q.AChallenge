import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  
  import criarContaUtils from "../../utils/CCUtils";

  When('clico no botao {string}',(botao) =>{
    criarContaUtils.clicoNoBotao(botao);
  });

  When("insiro no campo {string} o valor {string}", (campo,valor) => {
    criarContaUtils.InsiroNoCampoOValor(campo,valor);
   });

   When("insiro no campo {string} um email aleatorio", (campo) => {
    criarContaUtils.insiroNoCampo(campo);
   });

   When("clico para assinar os Termos e Condições", () => {
    criarContaUtils.assinarTermosCondicoes();
   });

   When("clico no botao {string} ", (botao) => {
    criarContaUtils.clicoNoBotao(botao);
   });

   When("seleciono a opção {string} no campo {string}", (opcao,campo) => {
    criarContaUtils.selecionoAopcaoNoCampo(opcao,campo);
   });

   When("visualizo a tela {string}", (tela) => {
    criarContaUtils.visualizoAtela(tela);
   });

   When("indico tres habilidades no campo INDIQUE SUAS HABILIDADES", () => {
    criarContaUtils.indicarTresHabilidades();
   });

   When("preencho os campos na tela de ScoreCard", () => {
    criarContaUtils.preencherOsCamposDaTelaScoreBoard();
   });
  


  