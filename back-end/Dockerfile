 FROM node:alpine

WORKDIR '/back-end'

COPY . .

RUN yarn install  --production


EXPOSE 4000

CMD ["yarn","run","build"]