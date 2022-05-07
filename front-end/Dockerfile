FROM node:alpine

WORKDIR '/front-end'

COPY package.json .

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "run", "start"]