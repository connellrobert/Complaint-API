FROM node:14

WORKDIR /app

COPY package.json .
RUN npm i
#Ensure you set the environment variable for mongodb instance as MONGODB_IP
ENV MONGODB_IP=172.17.0.4:27017
COPY . .
ENTRYPOINT ["npm", "start"]