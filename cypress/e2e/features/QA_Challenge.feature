Feature: Testando as funcionalidades do site beta coodesh

@CT-01
  Scenario: Validar que a homepage esta carregando corretamente
    Given que um usuario acesse o site beta da coodesh
    Then ele visualiza que a home page carregou com sucesso

@CT-02
  Scenario: Validar se o login esta funcionando corretamente
  Given que um usuario acesse o site beta da coodesh
  When clico na opção "Login"
  When insiro no campo "Email" o valor "automation@automation.com"
  When insiro no campo "Senha" o valor "@Tester123"
  When clico no botao "Entrar"
  When visualizo a tela "Dashboard"

@CT-03
  Scenario: Validar criação de uma conta
   Given que um usuario acesse o site beta da coodesh
   When clico no botao "Criar Conta"
   When insiro no campo "Nome Completo" o valor "QA Tester"
   When insiro no campo "Email" um email aleatorio
   When insiro no campo "Senha" o valor "@Tester123"
   When clico para assinar os Termos e Condições
   When clico no botao "Inscreva-se"
   When visualizo a tela "Onboarding"
   When seleciono a opção "QA / Testes" no campo "QUAIS CARREIRAS VOCÊ ESTÁ BUSCANDO?"
   When indico tres habilidades no campo INDIQUE SUAS HABILIDADES
   When seleciono a opção "2 - 3 anos" no campo "QUAL A SUA EXPERIÊNCIA GERAL NA ÁREA TECH?"
   When seleciono a opção "Estou empregado mas busco novos desafios" no campo "COMO ESTA SEU MOMENTO PROFISSIONAL?*"
   When insiro no campo "QUAL É O SEU WHATSAPP?*" o valor "11999999999"
   When insiro no campo "EM QUAL CIDADE VOCÊ RESIDE?*" o valor "São Paulo"
   When seleciono a opção "Remota" no campo "PREFÊRENCIA DE VAGAS"
   When clico no botao "Proximo"
   When seleciono a opção "Alura" no campo "COMUNIDADES"
   When seleciono a opção "Ex-Aluno" no campo "QUAL SUA RELAÇÃO COM A COMUNIDADE?"
   When seleciono a opção "Saude" no campo "QUAIS CAUSAS SOCIAIS VOCÊ SE INTERESSA?*"
   When seleciono a opção "Pessoa Parda" no campo "VOCÊ SE IDENTIFICA COM QUAL RAÇA/COR?*"
   When seleciono a opção "Homem" no campo "SUA IDENTIDADE DE GÊNERO*"
   When seleciono a opção "Heterossexual" no campo "QUAL SUA ORIENTAÇÃO SEXUAL?*"
   When seleciono a opção "Nenhuma deficiencia" no campo "POSSUI ALGUM TIPO DE DEFICIÊNCIA? QUAL?*"
   When clico no botao "Proximo"
   When clico no botao "Responder agora"
   When preencho os campos na tela de ScoreCard
   When clico no botao "Enviar"
   When clico no botao "Concluir"
   Then visualizo a tela "Dashboard"

@CT-04
  Scenario: Validar a funcionalidade de buscar por uma empresa
  Given que um usuario acesse o site beta da coodesh
  When clico na opção "Login"
  When insiro no campo "Email" o valor "automation@automation.com"
  When insiro no campo "Senha" o valor "@Tester123"
  When clico no botao "Entrar"
  When visualizo a tela "Dashboard"
  When clico no card "Vagas"
  Then faço uma busca por uma empresa
