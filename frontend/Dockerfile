FROM node:22.6.0-alpine

WORKDIR /usr/src/app

COPY app .

RUN npm install \
    # 必要な権限を node_modules に付与
    && chown -R node:node /usr/src/app

CMD ["npm", "run", "dev"]
