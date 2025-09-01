# Stage 1: Build React app
FROM node:18 AS build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Nginx will serve via docker-compose volume, so no COPY of nginx.conf needed
FROM nginx:alpine
# React build will be mounted via docker-compose
