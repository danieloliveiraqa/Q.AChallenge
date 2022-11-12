import LoginPage from "../pages/LoginPage";


class LoginUtils{
    
    campoEmail(username){
        LoginPage.usernameInput().type(username);
    }
    campoSenha(password){
        LoginPage.passwordInput().type(password);
    }
    botaoEntrar(){
        LoginPage.loginButton().click();
    }
    opcaoLogin(){
        cy.get('#onetrust-accept-btn-handler').click();
        LoginPage.opcaoLogin().click();
    }
    ClicarNoCard(){
        LoginPage.cardVagas().click();
    }
    buscarPorUmaEmpresa(){
        LoginPage.campoBuscarPorUmaEmpresa().type("PiedPiper")
        LoginPage.botaoBuscar().click();
    }
}

export default new LoginUtils();

