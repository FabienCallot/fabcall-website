deploy-dev:
	./bin/deploy.sh dev up

stop-dev: 
	./bin/deploy.sh dev stop

down-dev:
	./bin/deploy.sh dev down

deploy-local-dev:
	./bin/deploy.sh dev up --skip-pull


deploy-prod:
	./bin/deploy.sh prod up

stop-prod: 
	./bin/deploy.sh prod stop

down-prod:
	./bin/deploy.sh prod down

deploy-local-prod:
	./bin/deploy.sh prod up --skip-pull
