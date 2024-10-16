## Docker commands

### 1. Pushing Images with Docker Compose


```bash
docker compose -f docker-compose.dev.yaml build  # Builds the images defined in docker-compose.dev.yaml
docker push fabcallot/fab-call-website:dev       # Manually push the built image on docker hub
```

### 2. Pulling Images
To pull all images defined in a `docker-compose.yaml` file, use the following command:

```bash
docker compose -f docker-compose.dev.yaml pull
```

This command downloads all required images for the services defined in your Docker Compose configuration file.

### 3. Starting Services (Up)
To start all the services defined in the `docker-compose.dev.yaml` file, run:

```bash
docker compose -f docker-compose.dev.yaml up
```

- **Useful Options**:
  - **`-d`** : Runs the containers in detached mode, allowing you to use the terminal for other tasks.

  ```bash
  docker compose -f docker-compose.dev.yaml up -d
  ```

### 4. Stopping Services
To stop the containers without removing them, use:

```bash
docker compose -f docker-compose.dev.yaml stop
```

This pauses the containers, allowing you to restart them later with `docker compose up`.

### 5. Removing Containers and Networks (Down)
To stop and remove containers, networks, volumes, and images created by `docker compose up`, use:

```bash
docker compose -f docker-compose.dev.yaml down
```

- **Useful Options**:
  - **`--volumes`** : Removes associated volumes.
  - **`--rmi all`** : Removes images built by `docker compose`.

  ```bash
  docker compose -f docker-compose.dev.yaml down --volumes --rmi all
  ```

### Summary of Docker Compose Commands

| Command                                      | Description                                                             |
|----------------------------------------------|-------------------------------------------------------------------------|
| `docker compose -f <file>.yaml pull`         | Pulls the images defined in the Docker Compose file                     |
| `docker compose -f <file>.yaml up`           | Starts the services defined in the Docker Compose file                  |
| `docker compose -f <file>.yaml up -d`        | Starts the services in detached mode                                    |
| `docker compose -f <file>.yaml stop`         | Stops the containers without removing them                              |
| `docker compose -f <file>.yaml down`         | Stops and removes the containers, networks, and images                  |
| `docker compose -f <file>.yaml down --volumes --rmi all` | Also removes associated volumes and built images |
