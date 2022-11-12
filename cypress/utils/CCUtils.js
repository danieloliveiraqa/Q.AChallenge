import criarContaPage from "../pages/criarContaPage";
var faker = require('faker-br');

class criarContaUtils {

    clicoNoBotao(botao) {
        if (botao == "Criar Conta") {
            criarContaPage.botaoCriarConta().click();
            cy.get('#onetrust-accept-btn-handler').click();
        }
        else if (botao == "Inscreva-se") {
            criarContaPage.botaoInscrevaSe().click();
        }
        else if (botao == "Proximo") {
            criarContaPage.botaoProximo().click();
        }
        else if(botao == "Responder agora"){
            criarContaPage.botaoResponderAgora().click();
        }
        else if(botao == "Enviar"){
            criarContaPage.botaoEnviar().click();
        }
        else if(botao == "Concluir"){
            criarContaPage.botaoConcluir().click();
        }
        else if(botao == "Entrar"){
            criarContaPage.botaoEntrar().click();
        }
    };

    InsiroNoCampoOValor(campo, valor) {
        if (campo == 'Nome Completo') {
            criarContaPage.campoNomeCompleto().type(valor)
        }
        else if (campo == 'Email') {
            criarContaPage.campoEmail().type(valor)
        }
        else if (campo == 'Senha') {
            criarContaPage.campoSenha().type(valor)
        }
        else if (campo == 'QUAL É O SEU WHATSAPP?*') {
            criarContaPage.campoWhatsapp().type(valor)
        }
        else if (campo == 'EM QUAL CIDADE VOCÊ RESIDE?*') {
            criarContaPage.campoCidade().type(valor)
        }
    }

    insiroNoCampo(campo) {
        if (campo == 'Email') {
            criarContaPage.campoEmail().type(faker.internet.email());
        }
    }

    assinarTermosCondicoes() {
        criarContaPage.raddionButtonTermosECondicoes().check({ force: true })
    }

    selecionoAopcaoNoCampo(opcao, campo) {
        if (campo == "QUAIS CARREIRAS VOCÊ ESTÁ BUSCANDO?") {
            if (opcao == "QA / Testes") {
                criarContaPage.opcaoQATester().click();
            }}
        else if (campo == "PREFÊRENCIA DE VAGAS") {
            if (opcao == "Remota") {
                criarContaPage.opcaoRemota().click();
                }
            }
        else if(campo == "QUAL A SUA EXPERIÊNCIA GERAL NA ÁREA TECH?" ){
            if(opcao == "2 - 3 anos"){
                criarContaPage.Opcao23anos().select("2 - 3 anos")
                } 
            }
        else if(campo == "COMO ESTA SEU MOMENTO PROFISSIONAL?*" ){
            if(opcao == "Estou empregado mas busco novos desafios"){
                criarContaPage.opcaoEstouEmpregado().select('Estou empregado mas busco novos desafios')
                } 
            }
        else if(campo == "COMUNIDADES" ){
            if(opcao == "Alura"){
                criarContaPage.opcaoAlura().click();
                } 
            }  
        else if(campo == "QUAL SUA RELAÇÃO COM A COMUNIDADE?" ){
            if(opcao == "Ex-Aluno"){
                criarContaPage.campoQualRelacaoComAComunidade().select("Ex-aluno")
                } 
            }
        else if(campo == "QUAIS CAUSAS SOCIAIS VOCÊ SE INTERESSA?*" ){
            if(opcao == "Saude"){
                criarContaPage.campoSaude().click();
                criarContaPage.opcaoSaude().click();
                } 
            }    
        else if(campo == "VOCÊ SE IDENTIFICA COM QUAL RAÇA/COR?*" ){
            if(opcao == "Pessoa Parda"){
                criarContaPage.campoRaca().select("Pessoa Parda")
                } 
            }
        else if(campo == "SUA IDENTIDADE DE GÊNERO*" ){
            if(opcao == "Homem"){
                criarContaPage.campoGenero().select("Homem")
                } 
            }
        else if(campo == "QUAL SUA ORIENTAÇÃO SEXUAL?*" ){
            if(opcao == "Heterossexual"){
                criarContaPage.campoOrientacaoSexual().select("Heterossexual")
            } 
        }
        else if(campo == "POSSUI ALGUM TIPO DE DEFICIÊNCIA? QUAL?*" ){
            if(opcao == "Nenhuma deficiencia"){
                criarContaPage.campoTipoDeficiencia().select("Nenhuma deficiência")
                } 
            }
        }

    visualizoAtela(tela) {
        if (tela == "Onboarding") {
            cy.wait(1000)
            cy.get('.py-2 > .d-flex > .ml-2').should('be.visible')
        }
        if (tela == "Dashboard") {
            cy.wait(1000)
            cy.xpath("//a[.='Dashboard']").should('be.visible')
        }
    }

    indicarTresHabilidades() {
        criarContaPage.opcaoBDD().click();
        criarContaPage.opcaoCucumber().click();
        criarContaPage.opcaoGherkin().click();
    }

    preencherOsCamposDaTelaScoreBoard() {
        // Scrum
        criarContaPage.scrum().click({ multiple: true, force: true });
        criarContaPage.scrum().type("{rightarrow}{rightarrow}");  
        // Analise e Modelagem
        criarContaPage.AnaliseEModedelagem().click({ multiple: true, force: true });
        criarContaPage.AnaliseEModedelagem().type("{rightarrow}{rightarrow}");  
        // Estrutura de Dados
        criarContaPage.EstruturaDeDados().click({ multiple: true, force: true });
        criarContaPage.EstruturaDeDados().type("{rightarrow}{rightarrow}");  
        // UML
        criarContaPage.UML().click({ multiple: true, force: true });
        criarContaPage.UML().type("{rightarrow}{rightarrow}");  
        // GIT
        criarContaPage.GIT().click({ multiple: true, force: true });
        criarContaPage.GIT().type("{rightarrow}{rightarrow}");  
        // Comunicacao Tecnica
        criarContaPage.comunicaoTecnica().click({ multiple: true, force: true });
        criarContaPage.comunicaoTecnica().type("{rightarrow}{rightarrow}");  
        // Gestao de Tempo
        criarContaPage.gestaoDeTempo().click({ multiple: true, force: true });
        criarContaPage.gestaoDeTempo().type("{rightarrow}{rightarrow}");  
        // Logica
        criarContaPage.Logica().click({ multiple: true, force: true });
        criarContaPage.Logica().type("{rightarrow}{rightarrow}");  
        // Testes exploratorios
        criarContaPage.TesteExploratorios().click({ multiple: true, force: true });
        criarContaPage.TesteExploratorios().type("{rightarrow}{rightarrow}");  
        // Casos de Uso
        criarContaPage.CasoDeUso().click({ multiple: true, force: true });
        criarContaPage.CasoDeUso().type("{rightarrow}{rightarrow}");
        // Clicar em proximo 
        criarContaPage.botaoProximo().click();  
        // Behaviour Driven Development
        criarContaPage.BDD().click({ multiple: true, force: true });
        criarContaPage.BDD().type("{rightarrow}{rightarrow}");  
        // Test Driven Development
        criarContaPage.TDD().click({ multiple: true, force: true });
        criarContaPage.TDD().type("{rightarrow}{rightarrow}");  
        // Unit Tests
        criarContaPage.UnitTest().click({ multiple: true, force: true });
        criarContaPage.UnitTest().type("{rightarrow}{rightarrow}");
        // Test Coverage
        criarContaPage.TestCov().click({ multiple: true, force: true });
        criarContaPage.TestCov().type("{rightarrow}{rightarrow}");
        // Automação de Testes
        criarContaPage.AutomacaoTeste().click({ multiple: true, force: true });
        criarContaPage.AutomacaoTeste().type("{rightarrow}{rightarrow}");
        // Planejamento de Testes
        criarContaPage.PlanejamentoTestes().click({ multiple: true, force: true });
        criarContaPage.PlanejamentoTestes().type("{rightarrow}{rightarrow}");
        // Análise de requisitos
        criarContaPage.AnaliseRequesitos().click({ multiple: true, force: true });
        criarContaPage.AnaliseRequesitos().type("{rightarrow}{rightarrow}");
        // BDD
        criarContaPage.BDD2().click({ multiple: true, force: true });
        criarContaPage.BDD2().type("{rightarrow}{rightarrow}");
        // DDD (Domain Driven Design)
        criarContaPage.DDD().click({ multiple: true, force: true });
        criarContaPage.DDD().type("{rightarrow}{rightarrow}");
        // TDD
        criarContaPage.TDD2().click({ multiple: true, force: true });
        criarContaPage.TDD2().type("{rightarrow}{rightarrow}");
    }

}

export default new criarContaUtils();

