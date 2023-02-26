FROM node:17-alpine3.12

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .

RUN npm run build

ENV NODE_ENV production

CMD [ "npm", "run", "start" ]