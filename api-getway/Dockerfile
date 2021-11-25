FROM node:16.10.0-stretch

WORKDIR /usr/app

COPY . ./

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start:dev"]