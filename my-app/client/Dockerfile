# my-app/client/Dockerfile

FROM node:19-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]