# build environment
FROM node:alpine as build
# RUN apk add --update nodejs npm
WORKDIR /app
COPY package.json ./
RUN npm install
# RUN mkdir /app && mv ./node_modules ./app
COPY . .
# ENV PATH /app/node_modules/.bin:$PATH
# RUN npm install create-react-app
# RUN npx create-react-app front
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
