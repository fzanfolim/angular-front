FROM node:12.14.1-alpine3.10 AS build

ENV CONTAINER_PATH /application
WORKDIR $CONTAINER_PATH

COPY ./ /application
RUN apk add g++ make python
RUN rm -R node_modules || true
RUN rm -R dist || true
RUN rm package-lock.json || true
RUN npm install
RUN npm run build


# Set nginx base image
FROM nginx:alpine


MAINTAINER Felipe Zanfolim

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

ENV CONTAINER_PATH /application
WORKDIR $CONTAINER_PATH

COPY --from=build /application/dist/first-project /application
# COPY ./site/dist /application
