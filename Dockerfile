FROM node:alpine

ARG BOT_TOKEN
ENV BOT_TOKEN=${BOT_TOKEN}

WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production


COPY ["index.js", "./"]
CMD ["node", "index.js"]