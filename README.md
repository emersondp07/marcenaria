# App

Marcenaria style app.

## RFs (Requisitos funcionais)

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o perfil de um usuário logado;
- [] Deve ser possível o usuário solicitar um orçamento;
- [] Deve ser possível o usuário ver um orçamento;
- [] Deve ser possível o usuário fazer pagamento no pix;
- [] Deve ser possível o usuário fazer pagamento no crédito;
- [] Deve ser possível o usuário ver o status da compra;
- [] Deve ser possível o cliente falar com o usuário depois da compra;
- [] Deve ser possível o cliente registrar posts com imagem;
- [] Deve ser possível o cliente fazer o orçamento;
- [] Deve ser possível o cliente visualizar os orçamentos;
- [] Deve ser possível o cliente visualizar pagamentos;
- [] Deve ser possível o cliente visualizar métricas de venda;
- [] Deve ser possível cadastrar uma marcenaria;

## RNs (Regras de negócio)

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [] O usuário deve poder se cadastrar pelo gmail;
- [] O usuário deve poder efetuar o pagamento através de APIs externas de cartão;
- [] Os posts só pode ser feito por administradores;
- [] Os orçamentos só pode ser feito por administradores;
- [] Os pagementos só pode ser visualizado por administradores;
- [] As métricas mensais só pode ser visto por administradores;
- [] A marcenaria só pode ser cadastrada por administradores;

## RNFs (Requisitos não-funcionais)

- [x] A senha do usuário e cliente precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [x] O usuário deve ser identificado por um JWT (JSON Web Token);
