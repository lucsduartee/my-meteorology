# My Meteorology

**Acesse a aplicação em produção**: [https://my-meteorology-ebrr.vercel.app/](https://my-meteorology-ebrr.vercel.app/)

Este projeto é um Desafio técnico proposto para a vaga de desenvolvedor na Geopixel.

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=react,css,typescript,nextjs,cypress,docker,vercel" />
  </a>
</p>

Tecnologias utilizadas:

- **Docker**: Para criação e gerenciamento de contêineres.
- **Vercel**: Plataforma de implantação para aplicações frontend.
- **Next.js**: Framework React para construção de aplicações web.
- **React**: Biblioteca para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Cypress**: Framework de teste e2e automatizados.

 ## Tabela de Conteúdos

 - [Pré-requisitos](#pré-requisitos)
 - [Instalação](#instalação)
 - [Executando a Aplicação](#executando-a-aplicação)
 - [Parando a Aplicação](#parando-a-aplicação)
 - [Testes e2e](#testes-e2e)
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
    cd my-meteorology
    ```

 ## Executando a Aplicação

 ### Usando Docker Compose (Recomendado)

 1. Para subir o ambiente de desenvolvimento com Docker Compose, basta rodar o comando:
    ```bash
    docker compose up --build
    ```

    Isso irá:
    - Construir as imagens Docker definidas no arquivo `docker-compose.yml`.
    - Rodar o contêiner para o app Next.js.

 2. Após a construção e inicialização do contêiner, a aplicação estará disponível no navegador em:
    ```
    http://localhost:3000
    ```

 ### Executando Localmente (Não recomendado)

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

## Testes e2e
Para rodar os testes no Cypress é necessário primeiramente estar com a aplicação rodando seja pelo docker (fortemente recomendado) ou localmente.

Para abrir a interface gráfica do cypress use:

```
npm run cypress:open
```
Ou para roda apenas na CLI:

```
npm run cypress
```

## Estrutura do Projeto

 ```plaintext
.
├── cypress
│   ├── downloads
│   ├── e2e
│   │   └── spec.cy.ts
│   ├── fixtures
│   │   ├── hgBrasil.json
│   │   └── openWeather.json
│   └── support
│       ├── commands.ts
│       └── e2e.ts
├── cypress.config.ts
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
