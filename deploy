#!/bin/bash

# Fonction pour afficher l'aide
function show_help {
    echo "Usage: ./deploy.sh [env]"
    echo ""
    echo "Arguments:"
    echo "  env           Environment (dev or prod)"
    echo ""
    exit 1
}

# Vérifier si un argument est fourni
if [[ $# -ne 1 ]]; then
    echo "Error: Exactly one argument is required."
    show_help
fi

# Définir l'environnement
env=$1

# Vérifier que l'environnement est valide
if [[ "$env" != "dev" && "$env" != "prod" ]]; then
    echo "Error: Invalid environment '$env'. Must be 'dev' or 'prod'."
    show_help
fi

# Définir le fichier de compose basé sur l'environnement
compose_file="docker-compose.$env.yaml"

# Vérifier si le fichier docker-compose spécifique existe
if [[ ! -f "$compose_file" ]]; then
    echo "Error: $compose_file does not exist."
    exit 1
fi

# Arrêter et supprimer les conteneurs et volumes
echo "Stopping and removing containers and volumes..."
docker compose -f "$compose_file" down --volumes
if [[ $? -ne 0 ]]; then
    echo "Error: Docker compose down failed."
    exit 1
fi

# Construire les images
echo "Building Docker images..."
docker compose -f "$compose_file" build
if [[ $? -ne 0 ]]; then
    echo "Error: Docker compose build failed."
    exit 1
fi

# Démarrer les conteneurs
echo "Starting Docker containers..."
docker compose -f "$compose_file" up
if [[ $? -ne 0 ]]; then
    echo "Error: Docker compose up failed."
    exit 1
fi
