FROM node:21-alpine3.18

WORKDIR /home/node/app

COPY package.json ./
RUN npm install

COPY . .

CMD [ "npm", "start" ]
