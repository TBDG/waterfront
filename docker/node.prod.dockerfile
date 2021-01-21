ARG SERVER_PORT

FROM node:14-alpine as builder
WORKDIR /app
COPY ./ /app
RUN npm install
WORKDIR /app/public
RUN npm install
WORKDIR /app/server
RUN npm install --only-prod
WORKDIR /app
RUN npm run build:prod

EXPOSE $SERVER_PORT
USER node
CMD ["npm", "run", "start:prod"]
