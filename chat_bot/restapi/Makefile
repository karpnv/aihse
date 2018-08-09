#!/usr/bin/env bash

########################################################################################################
# PROD
########################################################################################################

PROD_CONTAINER_NAME = restapi
PROD_IMAGE_NAME = restapi

########################################################################################################

build_prod:
	docker-compose build
run_prod:
	docker-compose up -d
stop_prod:
	docker-compose stop	

build_and_run_prod:  build_prod run_prod

