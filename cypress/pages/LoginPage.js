class Login{

    usernameInput() {
        return cy.get('#userName')
    }  
    passwordInput() {
        return cy.get('#password')
    }  
    opcaoLogin(){
        return cy.get(':nth-child(4) > .nav-link') 
    }
    cardVagas(){
        return cy.get(':nth-child(3) > .p-3')
    }
    campoBuscarPorUmaEmpresa(){
        return cy.get('.col-lg-7 > .input-group > .form-control')
    }
    botaoBuscar(){
        return cy.get('.align-self-lg-end > .btn-block')
    }
}

export default new Login();