FROM node:14

WORKDIR /app

COPY package.json .

RUN npm i
#Ensure you set the environment variable for mongodb instance as MONGODB_IP
COPY . .
ENTRYPOINT ["npm", "start"]