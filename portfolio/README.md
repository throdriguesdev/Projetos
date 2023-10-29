Sistema de Gerenciamento de Pedidos para Hamburgueria
Uma aplicação para gerenciar os pedidos de uma hamburgueria local, fornecendo um meio eficaz de registrar, rastrear e gerar cupons sem valor fiscal para os pedidos.

TECNOLOGIAS
Backend:
Principal: Java com Spring Boot
Descrição: Framework para criação de aplicativos web com Java.
Alternativas: Quarkus, Micronaut
Banco de Dados:
Desenvolvimento: H2 (banco de dados em memória)
Produção: PostgreSQL, MySQL
Alternativas: MariaDB, SQLite
Frontend:
Engine de Templates: Thymeleaf

Descrição: Permite criar páginas web dinâmicas usando HTML, CSS e lógica Java.
Alternativas: FreeMarker, JSP
Estilização: HTML, CSS

Lógica do Cliente: JavaScript

Alternativas: TypeScript
PASSO A PASSO
CONFIGURAÇÃO INICIAL

Utilize o Spring Initializr para configurar o projeto.
Inclua as dependências: Web, Thymeleaf, JPA, H2.
DESENVOLVIMENTO DO BACKEND

Crie entidades (Pedido, Produto, Cliente).
Configure os repositórios e serviços.
FRONTEND

Utilize Thymeleaf para as páginas de interface.
Estilize com HTML e CSS.
AUTENTICAÇÃO

Implemente o Spring Security.
Configure a página de login e proteção de rotas.
TESTES E Q/A

Escreva e execute testes unitários e de integração.
Realize testes manuais para garantir a qualidade.
HOSPEDAGEM EM CONTAINER FREE

Principal: Heroku (integrado ao PostgreSQL).
Alternativa: GitHub Pages (apenas frontend se separado).
VERSÃO MOBILE (OPCIONAL)

Principal: React Native ou Flutter
Descrição: Adaptar a interface para dispositivos móveis após ter a versão para PC funcional.
Alternativas: Xamarin, Apache Cordova
SUGESTÕES ADICIONAIS
Para gráficos e análise de dados, considere a utilização de bibliotecas como Chart.js ou D3.js.
Para o envio de cupons por e-mail, serviços como SendGrid ou JavaMailSender podem ser úteis.
Se decidir expandir para a emissão de notas fiscais, avalie a possibilidade de integração com softwares fiscais específicos para o seu país.
