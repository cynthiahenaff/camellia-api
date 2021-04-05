include .env
export $(shell sed 's/=.*//' .env)

docker:
	docker-compose \
		-f docker-compose.yml \
		up \
		-d --build

docker-logs:
	docker-compose \
		-f docker-compose.yml \
		logs -f --tail=0

api:
	yarn install 
	yarn run start

dev: docker api
