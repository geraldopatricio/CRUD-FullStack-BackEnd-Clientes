FROM node:16 as development

WORKDIR /usr/src/app

COPY package*.json ./

RUN apt update

RUN yarn install --development=true

COPY . .

RUN yarn build

FROM node:16  as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install --production=true

COPY --from=development /usr/src/app/dist /usr/src/app/dist
CMD [ "yarn", "start:prod" ]
