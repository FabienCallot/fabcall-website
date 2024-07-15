 #!/bin/bash
 if [[ $1 = "prod" || $1 = "dev" ]] && [[ $2 = "down" || $2 = "up" ]]; then
    cd ..
    filEnv="docker-compose.$1.yaml"
    downOrUp=$2
    echo "Running docker-compose -f docker-compose.yaml -f $filEnv $downOrUp"
    docker compose -f docker-compose.yaml -f $filEnv $downOrUp
else 
echo "Nedd to follow format ./deploy.sh"
fi