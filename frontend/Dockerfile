FROM node:22.6.0-alpine

WORKDIR /usr/src/app

COPY finishfish .

RUN apk update \
&& apk add --no-cache npm=10.8.0-r0

RUN npm install

CMD ["npm", "run", "dev"]
