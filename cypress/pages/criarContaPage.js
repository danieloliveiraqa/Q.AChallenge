class criarContaPage{

    botaoCriarConta() {
        return cy.get('.nav-link > .transition-3d-hover')
    }  
    botaoEntrar(){
        return cy.get('div.col-12 > .transition-3d-hover')
    }
    campoNomeCompleto() {
        return cy.get('#displayName')
    }  
    campoEmail() {
        return cy.get('#email')
    }  
    campoSenha() {
        return cy.get('#password')
    }  
    raddionButtonTermosECondicoes() {
        return cy.xpath("//input[@id='privacy.gpdr']")
    }  
    botaoInscrevaSe() {
        return cy.get('.align-items-center > .transition-3d-hover')
    }  
    opcaoQATester() {
        return cy.get(':nth-child(7) > .custom-control > .checkbox-outline__label > .d-block')
    }
    opcaoBDD() {
        return cy.get('.col-md-12 > .form-text > div > :nth-child(1)')
    }  
    opcaoCucumber() {
        return cy.get('.col-md-12 > .form-text > div > :nth-child(2)')
    }  
    opcaoGherkin() {
        return cy.get('.form-text > div > :nth-child(4)')
    }  
    Opcao23anos() {
        return cy.get('#years_experience')
    }  
    opcaoEstouEmpregado() {
        return cy.xpath("//select[@id='preferences.job_search']")
    }  
    opcaoRemota() {
        return cy.xpath("//label[.='Remota']")
    }  
    opcaoAlura() {
        return cy.get('.mt-3.col > .col-12 > :nth-child(3) > :nth-child(1)')
    }  
    campoQualRelacaoComAComunidade() {
        return cy.xpath("//select[@id='communities-0-relation']")
    }  
    campoSaude() {
        return cy.get('.col-lg-12 > .react-select > .css-yk16xz-control > .css-13tza3w')
    }  
    opcaoSaude() {
        return cy.xpath("//*[.='Saúde']")
    }  
    campoRaca() {
        return cy.xpath("//select[@id='race']")
    }  
    campoGenero() {
        return cy.xpath("//select[@id='gender']")
    }  
    campoOrientacaoSexual() {
        return cy.xpath("//select[@id='sexual_orientation']")
    }  
    campoTipoDeficiencia() {
        return cy.xpath("//select[@id='disabilities.type']")
    }  
    campoWhatsapp(){
        return cy.get('.react-tel-input > .form-control')
    }
    campoCidade(){
        return cy.xpath("//input[@id='address.city']")
    }
    botaoProximo(){
        return cy.xpath("//button[.='Próximo']")
    }
    botaoResponderAgora(){
        return cy.xpath("//a[.='Responder agora']")
    }
    botaoEnviar(){
        return cy.xpath("//button[.='Enviar']")
    }
    scrum(){
        return cy.get(':nth-child(1) > td > .rc-slider')
    }
    AnaliseEModedelagem(){
        return cy.get(':nth-child(2) > td > .rc-slider > .rc-slider-rail')
    }
    EstruturaDeDados(){
        return cy.get(':nth-child(3) > td > .rc-slider > .rc-slider-rail')
    }
    UML(){
        return cy.get(':nth-child(4) > td > .rc-slider')
    }
    GIT(){
        return cy.get(':nth-child(5) > td > .rc-slider')
    }
    comunicaoTecnica(){
        return cy.get(':nth-child(6) > td > .rc-slider')
    }
    gestaoDeTempo(){
        return cy.get(':nth-child(7) > td > .rc-slider')
    }
    Logica(){
        return cy.get(':nth-child(8) > td > .rc-slider')
    }
    TesteExploratorios(){
        return cy.get(':nth-child(9) > td > .rc-slider')
    }
    CasoDeUso(){
        return cy.get(':nth-child(10) > td > .rc-slider > .rc-slider-rail')
    }
    BDD(){
        return cy.get(':nth-child(1) > td > .rc-slider')
    }
    TDD(){
        return cy.get(':nth-child(2) > td > .rc-slider')
    }
    UnitTest(){
        return cy.get(':nth-child(3) > td > .rc-slider')
    }
    TestCov(){
        return cy.get(':nth-child(4) > td > .rc-slider')
    }
    AutomacaoTeste(){
        return cy.get(':nth-child(5) > td > .rc-slider')
    }
    PlanejamentoTestes(){
        return cy.get(':nth-child(6) > td > .rc-slider')
    }
    AnaliseRequesitos(){
        return cy.get(':nth-child(7) > td > .rc-slider')
    }
    BDD2(){
        return cy.get(':nth-child(8) > td > .rc-slider')
    }
    DDD(){
        return cy.get(':nth-child(9) > td > .rc-slider')
    }
    TDD2(){
        return cy.get(':nth-child(10) > td > .rc-slider')
    }
    botaoConcluir(){
        return cy.xpath("//a[.='Concluir']")
    }
}

export default new criarContaPage();