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

## Makefile Documentation

### Makefile Structure

This `Makefile` supports commands for both **development** (`dev`) and **production** (`prod`) environments. By specifying an environment using `ENV`, you can easily switch the execution context. For example, to use the development environment, you can run a command like `make build ENV=dev`.

### Environment Variables

- **ENV**: Sets the deployment environment, either `dev` or `prod`.
  - If **ENV** is not specified, `prod` will be the default environment.

### Commands

The `Makefile` provides a set of commands to streamline Docker operations. Each command accepts the environment variable **ENV** to specify which environment to target.

#### 1. `build`
Builds the Docker image for the specified environment.

**Usage:**
```bash
make build ENV=dev  # or ENV=prod
```

This command will:
- Build the Docker image based on the specified environment file (`Dockerfile.dev` or `Dockerfile.prod`).
- Use `docker compose -f docker-compose.$(ENV).yaml build` to ensure the correct configuration is used.

#### 2. `pull`
Pulls the Docker image for the specified environment. It will only pull for the `prod` environment since development images are typically built locally.

**Usage:**
```bash
make pull ENV=prod
```

This command will:
- Pull the image from Docker Hub if `ENV=prod`.
- Skip pulling for the `dev` environment to prevent unnecessary pulls.

#### 3. `up`
Starts the services in the specified environment using `docker compose up`.

**Usage:**
```bash
make up ENV=dev
```

This command will:
- Start all containers for the specified environment in the foreground, allowing logs to be displayed in the terminal.

#### 4. `stop`
Stops the running containers for the specified environment.

**Usage:**
```bash
make stop ENV=dev
```

This command will:
- Stop all containers specified in the `docker-compose.$(ENV).yaml` file.

#### 5. `down`
Stops and removes containers, networks, and volumes for the specified environment.

**Usage:**
```bash
make down ENV=prod
```

This command will:
- Use `docker compose down` with `--volumes` to fully clean up the environment.

### Example Usage

Here's an example workflow using the `Makefile` to set up a development environment:

```bash
# Build the dev environment
make build ENV=dev

# Start the dev environment
make up ENV=dev

# Stop the dev containers
make stop ENV=dev

# Tear down the environment, removing containers and volumes
make down ENV=dev
```

For production, you could simply replace `ENV=dev` with `ENV=prod` in each command.
