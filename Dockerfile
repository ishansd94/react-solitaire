FROM node:latest as build
COPY package.json /package.json
RUN yarn

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin
ENV NODE_ENV=production

WORKDIR /app
COPY . .
RUN yarn build

FROM nginx
COPY --from=build /app/build /usr/share/nginx/html/
EXPOSE 80