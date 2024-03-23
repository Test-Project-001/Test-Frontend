FROM node:20-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

WORKDIR /app

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]
