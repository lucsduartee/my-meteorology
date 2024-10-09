# Use uma imagem oficial do Node.js como base
FROM node:22.6.0-alpine

# Defina o diretório de trabalho
WORKDIR /app

# Copie o package.json e o package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos da aplicação
COPY . .

# Exponha a porta 3000 para rodar o Next.js
EXPOSE 3000

# Comando padrão para rodar no ambiente de desenvolvimento
CMD ["npm", "run", "dev"]
