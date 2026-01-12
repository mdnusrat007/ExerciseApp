# ExerciseApp
This is exercise tracking website,which keeps track of your daily workouts and have edit and delete functionality for your workouts with login and signup.

🐳 Exercise App – Dockerized MERN Stack

This project is a Dockerized MERN stack application consisting of:

Frontend – React

Backend – Node.js + Express

Database – MongoDB

Orchestration – Docker Compose

The application runs using multiple containers that communicate over a Docker bridge network.

📦 Project Architecture
ExerciseApp/
│
├── front_end/          # React frontend
│   └── Dockerfile
│
├── server/             # Node + Express backend
│   └── Dockerfile
│
├── docker-compose.yml  # Orchestration file
├── .env                # Environment variables (not committed)
└── README.md

🧱 Services Overview
Service	Description	Port
front_end	React UI	3000
server	Node.js API	4000
mongodb	MongoDB database	27017
🔁 Application Workflow

Frontend (React) runs on port 3000

Backend (Express) runs on port 4000

Frontend communicates with Backend using API URL

Backend connects to MongoDB using internal Docker network

MongoDB data persists using Docker volumes

All services are connected via a custom Docker bridge network.

🐳 Docker Images Used
Custom Images (built locally or pulled from Docker Hub)

exerciseapp-front_end → React app

exerciseapp-server → Node backend

Official Image

mongo:latest → MongoDB database

📄 docker-compose.yml Explanation
version: '3.8'

services:
  front_end:
    build: ./front_end
    ports:
      - "3000:3000"
    depends_on:
      - server
    environment:
      REACT_APP_API_URL: ${REACT_APP_API_URL}
    networks:
      - exercise-network

🔹 Frontend

Built from ./front_end/Dockerfile

Exposes port 3000

Depends on backend service

Uses environment variables

Live reload enabled using develop.watch

  server:
    build: ./server
    ports:
      - "4000:4000"
    depends_on:
      - mongodb
    environment:
      MONGO_URI: ${MONGO_URI}
      JWT_SECRET: ${JWT_SECRET}
    networks:
      - exercise-network

🔹 Backend

Built from ./server/Dockerfile

Exposes port 4000

Connects to MongoDB using service name

Uses environment variables for secrets

  mongodb:
    image: mongo:latest
    ports:
      - "27017:27017"
    volumes:
      - gym_data:/data/db
    environment:
      MONGO_INITDB_ROOT_USERNAME: ${MONGO_INITDB_ROOT_USERNAME}
      MONGO_INITDB_ROOT_PASSWORD: ${MONGO_INITDB_ROOT_PASSWORD}

🔹 MongoDB

Uses official MongoDB image

Persists data using Docker volume

Credentials provided via environment variables

💾 Volumes & Network
volumes:
  gym_data:
    driver: local

networks:
  exercise-network:
    driver: bridge


Volumes ensure MongoDB data persists across container restarts

Bridge network allows services to communicate securely

🔐 Environment Variables (.env)

Create a .env file in the root directory:

REACT_APP_API_URL=http://localhost:4000
MONGO_URI=mongodb://mongodb:27017/exercise
JWT_SECRET=your_jwt_secret
MONGO_INITDB_ROOT_USERNAME=admin
MONGO_INITDB_ROOT_PASSWORD=password


⚠️ .env file is ignored using .gitignore

▶️ How to Run the Application
1️⃣ Clone the repository
git clone https://github.com/your-username/exercise-app.git
cd ExerciseApp

2️⃣ Build and start containers
docker compose up --build

3️⃣ Run in detached mode (optional)
docker compose up -d

🌐 Access the Application

Frontend → http://localhost:3000

Backend API → http://localhost:4000

MongoDB → localhost:27017

⏹ Stop Containers
docker compose down


To remove volumes as well:

docker compose down -v

🚀 Docker Hub (images pushing)

Images can be pushed to Docker Hub using:

docker tag image_name username/image_name:latest
docker push username/image_name:latest

✅ Technologies Used

React

Node.js

Express

MongoDB

Docker

Docker Compose