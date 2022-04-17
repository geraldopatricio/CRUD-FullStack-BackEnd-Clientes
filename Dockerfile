FROM node:16 as development

WORKDIR /usr/src/app

COPY package*.json ./

RUN apt update

RUN npm install --development=true

COPY . .

RUN npm run start:dev

FROM node:16  as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production=true

COPY --from=development /usr/src/app/dist /usr/src/app/dist
CMD [ "npm", "start:prod" ]
