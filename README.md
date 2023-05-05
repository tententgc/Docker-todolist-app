# Dockerized Todo List App with Kubernetes

This repository contains the source code for a simple, yet efficient Todo List application. The application is built using the latest web technologies and is designed to be easily deployed using Docker and orchestrated with Kubernetes. With this setup, you can easily scale the application to handle more traffic and ensure high availability.

## Features

- User-friendly and responsive Todo List interface
- Supports CRUD operations for tasks
- Backend server with RESTful API
- Dockerized application for easy deployment
- Kubernetes configuration for scalable deployment

## Prerequisites

Before you begin, ensure you have the following tools installed on your system:

- Docker
- Kubernetes (or a managed Kubernetes service like Google Kubernetes Engine, Amazon EKS, or Azure AKS)
- kubectl
- Helm (optional)

## Getting Started

Follow these steps to get the Todo List application up and running:

1. Clone the repository:

```bash
git clone https://github.com/tententgc/Dockerized-Todo-List-App-with-Kubernetes.git
cd Dockerized-Todo-List-App-with-Kubernetes
```

2. Build the Docker images for the frontend and backend services:

```bash
docker build -t todo-frontend:latest ./frontend
docker build -t todo-backend:latest ./backend
```

3. Push the Docker images to a container registry (e.g., Docker Hub, Google Container Registry, or Amazon Elastic Container Registry):

```bash
docker tag todo-frontend:latest <your_registry>/todo-frontend:latest
docker tag todo-backend:latest <your_registry>/todo-backend:latest

docker push <your_registry>/todo-frontend:latest
docker push <your_registry>/todo-backend:latest
```

4. Update the Kubernetes configuration files (in the `k8s` folder) with the correct image names:

```yaml
# frontend-deployment.yaml
...
spec:
  containers:
  - name: frontend
    image: <your_registry>/todo-frontend:latest
...
```

```yaml
# backend-deployment.yaml
...
spec:
  containers:
  - name: backend
    image: <your_registry>/todo-backend:latest
...
```

5. Deploy the application to your Kubernetes cluster:

```bash
kubectl apply -f k8s/
```

6. Wait for the deployments to complete and the services to become available:

```bash
kubectl get deployments,pods,services --watch
```

7. Once the services are available, access the frontend service using the provided IP address or hostname:

```bash
kubectl get service todo-frontend
```

## Contributing

Feel free to open issues, suggest improvements, or submit pull requests. We appreciate any help to make this project better!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
