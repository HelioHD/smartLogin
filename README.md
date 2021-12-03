
# Projeto SmartExpenses

Aplicação Mobile para controle de finanças para maior facilidade de organização. Destinada para empresa e para pessoa física.

## Feito por 

Esse Projeto é um projeto Acadêmico realizado na faculdade UNICEUB na máteria de Projeto Integrador I e II :


#### Participantes

- Hélio Delfino Lopes de Alcântara (Back-End)
- Matheus Baptista (Front-End)



#### Professor Orientador

- Sergio Cozzetti Bertoldi de Souza
## Links Importantes

 - [Azure DevOps do Projeto](https://dev.azure.com/SmartExpensesProject/Smart%20Expenses)
 - [Repositorio Back-End](https://github.com/HelioHD/smart-api-projeto)
 - [Repositorio Back-End Login](https://github.com/HelioHD/smartLogin)
 - [Repositorio Front-End](https://github.com/manuteu/smart-expenses-app)


## Tecnologias e Ferramentas

**Front-End:** React-Native

**Back-End:** Node, Express, MySQL, JWT, Bcrypt, Heroku

**Organização:** Azure DevOps, Scrum 


# Api Login - NodeJs CRUD + Express + Mysql + Jwt + bcrypt

Api de Login criada para o projeto SmartExpenses 


## Como usar a API pelo Heroku


#### Login
 
```http
  POST  https://loginsmartex.herokuapp.com/users/login
```

| Json                     |
|:----------               |
| {                        |
| "email": "matheus@gmail.com",|
| "password": "1234568"    | 
| }                        |

#### Register 

```http
  POST  https://loginsmartex.herokuapp.com/users/register
```

| Json                     |
|:----------               |
| {                        |
| "nome": "matheus",       | 
| "email": "matheus@gmail.com",|
| "password": "1234568"    | 
| }                        |


## Rodando Localmente

Clone o Projeto ou Baixe

```bash
  git clone https://github.com/HelioHD/smartLogin.git
```

Vá para o diretorio do projeto 

```bash
  cd my-project
```

Instale as dependencias

```bash
  npm install
```

Inicie o Servidor

```bash
  npm start
```


Para reiniciar o Servidor

```bash
  rs
```




