FROM node:19-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

ENV REACT_APP_DB_HOST=mysql
ENV REACT_APP_DB_USER=root
ENV REACT_APP_DB_PASSWORD=root
ENV REACT_APP_DB_NAME=mydatabase
ENV REACT_APP_API_KEY=c0194e4c16154255b057622b5eaf57cd
ENV REACT_APP_JWT_SECRET = nnoTEe7V14rPjG02axwGXTZZlT0Tqhco

COPY . .

CMD ["node", "ServerApp.js"]