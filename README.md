# Sarathi:
This project includes a frontend (React) and a backend (Node.js with MongoDB) setup using Docker. The services are managed with Docker Compose for easy deployment and concurrent execution.

# Prerequisites
Before you start, make sure you have the following installed on your machine:

Docker
Docker Compose
Running the Project with Docker
1. Clone the Repository
First, clone the project repository to your local machine:

```bash
git clone https://github.com/your-username/Saarthi.git

cd Saarthi
```
2. Build and Run the Project with Docker Compose
To build and start the frontend, backend, and MongoDB containers, follow these steps:

```bash
docker-compose up --build
```
This command will:
Build the Docker images for both the frontend and backend.
Start the containers for the frontend, backend, and MongoDB database 

3. Access the Application
Once the containers are up and running, you can access the application using the following URLs:
```bash
Frontend: http://localhost:3000
Backend API: http://localhost:5000/api
```
4. Rebuilding and Restarting the Containers
If you make any changes to the code, you can rebuild and restart the containers with:

```bash
docker-compose down
docker-compose up --build
```
This will:

Stop and remove the existing containers.
Rebuild the Docker images with the latest changes.
Restart the services.
Running the Project Concurrently
If you want to run the project concurrently without rebuilding the images every time, use:

```bash
docker-compose up
```
This command will start the containers without rebuilding them. It’s faster and suitable for when no code changes have been made.

# To run kafka and zookeeper in docker : 

## Commands :
* Start Zookeper Container and expose PORT ```2181```.
```bash
docker run -p 2181:2181 zookeeper
```

* Start Kafka Container, expose PORT ```9092``` and setup ENV variables.
  
```bash
docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka
```

## Start Redis on Docker 

* Start Redis Container, expose PORT ```6379``` and Redis-stack on PORT ```8001```
```bash
 docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest
```
