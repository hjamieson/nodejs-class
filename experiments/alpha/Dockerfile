FROM node:14

WORKDIR /usr/src/app

# install app dependencies
# a wildcard is used to copy both packahe.json and packahe-lock.json
COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]