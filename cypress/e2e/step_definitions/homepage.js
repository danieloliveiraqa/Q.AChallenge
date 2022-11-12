import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  
  import homepageUtils from "../../utils/homepageUtils";
  
  Given("que um usuario acesse o site beta da coodesh", () => {
    cy.visit("https://beta.coodesh.com/")
  })
  
  Then("ele visualiza que a home page carregou com sucesso", () => {
   homepageUtils.visualizoaPagina();
  });
  
  