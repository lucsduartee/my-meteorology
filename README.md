# Easy Weather

**Aplicação em produção**: [https://my-meteorology-ebrr.vercel.app/](https://my-meteorology-ebrr.vercel.app/)

Este projeto Desafio técnico proposto para a vaga de desenvolvedor na Geopixel.

<img src="https://simpleicons.org/icons/docker.svg" alt="Docker" width="40" height="40" style="filter: brightness(0) invert(1);"/>
<img src="https://simpleicons.org/icons/vercel.svg" alt="Vercel" width="40" height="40" style="filter: brightness(0) invert(1);"/>
<img src="https://simpleicons.org/icons/nextdotjs.svg" alt="Next.js" width="40" height="40" style="filter: brightness(0) invert(1);"/>
<img src="https://simpleicons.org/icons/react.svg" alt="React" width="40" height="40" style="filter: brightness(0) invert(1);"/>
<img src="https://simpleicons.org/icons/typescript.svg" alt="TypeScript" width="40" height="40" style="filter: brightness(0) invert(1);"/>

Tecnologias utilizadas:

- **Docker**: Para criação e gerenciamento de contêineres.
- **Vercel**: Plataforma de implantação para aplicações frontend.
- **Next.js**: Framework React para construção de aplicações web.
- **React**: Biblioteca para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.


 ## Tabela de Conteúdos

 - [Pré-requisitos](#pré-requisitos)
 - [Instalação](#instalação)
 - [Executando a Aplicação](#executando-a-aplicação)
 - [Parando a Aplicação](#parando-a-aplicação)
 - [Comandos Úteis](#comandos-úteis)
 - [Estrutura do Projeto](#estrutura-do-projeto)
---

 ## Pré-requisitos

 Certifique-se de que você tem as seguintes ferramentas instaladas:

 - [Docker](https://www.docker.com/get-started)
 - [Docker Compose](https://docs.docker.com/compose/install/)
 - [Node.js](https://nodejs.org/) (opcional, caso queira rodar localmente sem Docker)
 - [Git](https://git-scm.com/)

 ## Instalação

 1. Clone este repositório para sua máquina local:
    ```bash
    git clone https://github.com/lucsduartee/my-meteorology.git
    cd seu-repositorio
    ```

 ## Executando a Aplicação

 ### Usando Docker Compose

 1. Para subir o ambiente de desenvolvimento com Docker Compose, basta rodar o comando:
    ```bash
    docker compose up --build
    ```

    Isso irá:
    - Construir as imagens Docker definidas no arquivo `docker-compose.yml`.
    - Rodar os contêineres para o app Next.js e quaisquer serviços associados (banco de dados, etc.).

 2. Após a construção e inicialização dos contêineres, a aplicação estará disponível no navegador em:
    ```
    http://localhost:3000
    ```

 ### Executando Localmente (Sem Docker)

 Caso prefira rodar a aplicação sem Docker:

 1. Instale as dependências:
    ```bash
    npm install
    ```

 2. Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

    O servidor estará disponível em `http://localhost:3000`.

###  Parando a Aplicação

 Para parar os contêineres Docker, utilize o comando:

 ```bash
 docker compose down
 ```

 Este comando irá encerrar todos os contêineres associados à aplicação.

## Estrutura do Projeto

 ```plaintext
.
├── docker-compose.yml
├── Dockerfile
├── next.config.mjs
├── next-env.d.ts
├── package.json
├── package-lock.json
├── public
│   └── favicon.ico
├── README.md
├── src
│   ├── components
│   │   ├── CitiesSelect
│   │   ├── CitySearch
│   │   ├── CityWeatherCard
│   │   ├── CityWeatherCarousel
│   │   ├── Header
│   │   ├── MyMap
│   │   └── WeatherInformation
│   ├── contexts
│   │   ├── CityProvider.tsx
│   │   └── GlobalProvider.tsx
│   ├── pages
│   │   ├── api
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   ├── fonts
│   │   └── index.tsx
│   └── styles
│       ├── globals.css
│       └── Home.module.css
└── tsconfig.json
 ```