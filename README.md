# Complaint API
## Description
An express application using mongoose for Mongodb persistence. The purpose of this service is to be a standalone API and be an example of such an application. Also, it is meant to be apart of a larger MSA cluster.
## WIP
- [X] Containerization
- [ ] Clean up unused endpoints
## Onboarding
### Environment Setup
docker (if running in containers)
node & npm (if running locally)
MongoDB (to connect the application to)
### Running with Docker
1. run `docker build -t some_name .` in the root directory for the container to be built.
2. run `docker run -e MONGODB_IP=<some_mongo_db_ip_address_and_port_number> -p <port_you_want_to_run>:3000 some_name`
### Running locally
1. run `npm install` in the root directory to install dependencies.
2. have a running instance of a mongodb server and gather the ip address and port number.
3. run  `MONGODB_IP=<ip_and_port_number_of_db> npm start`.