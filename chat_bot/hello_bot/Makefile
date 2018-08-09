#!/usr/bin/env bash

########################################################################################################
# PROD
########################################################################################################

PROD_CONTAINER_NAME = hello_bot
PROD_IMAGE_NAME = hello_bot

########################################################################################################

build_prod:
	docker build --rm \
				 -t ${PROD_IMAGE_NAME} 
run_prod:
	docker run --name ${PROD_CONTAINER_NAME} \
		   -d  \
		   ${PROD_IMAGE_NAME}
stop_prod:
	docker container rm -f ${PROD_CONTAINER_NAME} 2>/dev/null || true

build_and_run_prod:  build_prod run_prod

