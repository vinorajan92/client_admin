FROM node:10-alpine
WORKDIR /app
COPY package.json ./package.json
RUN npm install
COPY . ./
RUN npm run build