FROM node:11
WORKDIR /usr/src
COPY . /usr/src
RUN npm run build

FROM nginx:latest
WORKDIR /usr/src
COPY --from=0 /usr/src/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
