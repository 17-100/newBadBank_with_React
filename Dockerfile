FROM node:slim

MAINTAINER oezge <sebisteri@outlook.com>

WORKDIR /app

COPY server.js /app/server.js
COPY package.json /app/package.json
RUN npm install