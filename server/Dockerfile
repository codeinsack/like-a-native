FROM node:14

RUN mkdir /cache
WORKDIR /cache

COPY package.json ./
COPY package-lock.json ./
RUN npm install

RUN mkdir /app
WORKDIR /app