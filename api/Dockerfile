FROM node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --prefix ../ .

COPY . .

EXPOSE 8080

CMD npm start