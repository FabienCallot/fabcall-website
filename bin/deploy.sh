#!/bin/bash

# Fonction pour afficher l'aide
function show_help {
    echo "Usage: ./bin/deploy.sh [env] [action] [--skip-pull]"
    echo ""
    echo "Arguments:"
    echo "  env           Environment (dev or prod)"
    echo "  action        Action to perform (up, down, stop)"
    echo "  --skip-pull   Optional: Skip pulling the latest image from Docker Hub"
    echo ""
    exit 1
}

# Vérifie les arguments
if [[ $# -lt 2 || $# -gt 3 ]]; then
    echo "Error: Invalid number of arguments."
    show_help
fi

# Définit l'environnement et l'action
env=$1
action=$2
skip_pull=$3

# Définit le chemin du fichier docker-compose basé sur l'environnement
script_dir=$(dirname "$0")
root_dir=$(cd "$script_dir/.."; pwd)
compose_file="$root_dir/docker-compose.$env.yaml"

# Vérifie si le fichier docker-compose spécifique existe
if [[ ! -f "$compose_file" ]]; then
    echo "Error: $compose_file does not exist."
    exit 1
fi

# Spécifier le nom de l'image (dev ou prod)
image_name="fabcallot/fab-call-website:$env"

if [[ "$action" == "stop" ]]; then
    # Arrête les conteneurs sans les supprimer
    echo "Stopping containers..."
    docker compose -f "$compose_file" stop
    if [[ $? -ne 0 ]]; then
        echo "Error: Docker compose stop failed."
        exit 1
    fi

elif [[ "$action" == "down" ]]; then
    # Arrête et supprime les conteneurs et volumes
    echo "Stopping and removing containers and volumes..."
    docker compose -f "$compose_file" down --volumes
    if [[ $? -ne 0 ]]; then
        echo "Error: Docker compose down failed."
        exit 1
    fi

else
    if [[ "$skip_pull" != "--skip-pull" ]]; then
        # Pull la dernière image depuis Docker Hub
        echo "Pulling the latest image from Docker Hub..."
        docker pull "$image_name"
        if [[ $? -ne 0 ]]; then
            echo "Error: Docker pull failed."
            exit 1
        fi
    else
        echo "Skipping docker pull as per user request."
    fi

    # Arrête et supprime les conteneurs et volumes
    echo "Stopping and removing containers and volumes..."
    docker compose -f "$compose_file" down --volumes
    if [[ $? -ne 0 ]]; then
        echo "Error: Docker compose down failed."
        exit 1
    fi

    # Construit les images localement
    echo "Building Docker images..."
    docker compose -f "$compose_file" build
    if [[ $? -ne 0 ]]; then
        echo "Error: Docker compose build failed."
        exit 1
    fi

    # Démarre les conteneurs
    echo "Starting Docker containers..."
    docker compose -f "$compose_file" up
    if [[ $? -ne 0 ]]; then
        echo "Error: Docker compose up failed."
        exit 1
    fi
fi
