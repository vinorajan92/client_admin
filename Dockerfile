# stage1 as builder
FROM node:10-alpine as builder

WORKDIR /usr/src/app
# copy the package.json to install dependencies
COPY package*.json ./

# Install the dependencies
RUN npm install

COPY . .

# Build the project and copy the files
RUN npm run build


FROM nginx:alpine

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stage 1
COPY --from=builder /build /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]