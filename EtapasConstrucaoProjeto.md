# Etapas da construção do Projeto

- [ ] Instalação das bibliotecas.

  - [ ] De produção

    ```bash
    npm i express connect-flash bcryptjs express-handlebars express-session method-override mongoose passport passport-local
    ```

  - [ ] De desenvolvimento

    ```bash
    npm i -D dotenv nodemon npm-check-updates
    ```

- [ ] Criar os diretórios e arquivos iniciais.

  - [ ] Diretórios

  ```bash
  mkdir -p src/{config/,controllers/,helpers/,models/,public/,routes/,views}
  ```

  - [ ] Arquivos

  ```bash
  touch src/{index.js,server.js,database.js}
  ```

  - [ ] Adicionar diretórios sem arquivos ao repositório git

  ```bash
  touch src/{config/.gitkeep,controllers/.gitkeep,helpers/.gitkeep,models/.gitkeep,public/.gitkeep,routes/.gitkeep,views/.gitkeep}
  ```

- [ ] Criando o servidor

  - [ ] Configuração do app no index.js

  - [ ] Configuração do server no server.js

    - [ ] Inicialização do app

    - [ ] Configuração de variáveis e paths do app

    - [ ] Configuração do Middlewares

    `app.use(express.urlencoded({ extended: true }));`
    faz o parsing do conteúdo da requisições, "true"  permite o aninhamento de objetos, que é praticamente como o JSON trabalha.

    - [ ] Configuração de uma rota simples inicial.

    - [ ] Configuração do path dos arquivos estáticos para o diretório public.
