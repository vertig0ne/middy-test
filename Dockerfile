FROM node:14.14.0-alpine3.12

COPY ./ /app
WORKDIR /app

RUN npm ci

EXPOSE 3000 3002
CMD ["npm", "start"]
