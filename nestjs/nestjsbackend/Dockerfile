FROM node:14-alpine as build

WORKDIR /build
COPY package.json .
COPY package-lock.json .
RUN npm ci

COPY tsconfig.json .
COPY tsconfig.build.json .
COPY src src
RUN npm run build


############################
FROM node:14-alpine as runtime

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci --production

COPY --from=build /build/dist .
COPY data data

CMD ["node", "main.js"]
