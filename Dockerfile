FROM node:10-alpine
WORKDIR /app
COPY package.json ./package.json
RUN npm install --only=prod
COPY . ./
CMD ["npm", "run", "build"]