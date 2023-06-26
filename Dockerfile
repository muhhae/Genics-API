FROM node:slim

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# COPY .env .env

EXPOSE 5000

CMD ["node", "index.js"]