# build environment
FROM node:13.12.0-alpine as build
RUN apk add --update nodejs npm
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
RUN  npm install
RUN npm install react-scripts -g
COPY . ./
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
