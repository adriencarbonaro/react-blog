#!make

.PHONY: start
start:
	yarn start

.PHONY: build
build:
	yarn build

.PHONY: clean
clean:
	rm -rf build/

.PHONY: deploy
deploy: build
	yarn firebase deploy

.PHONY: all
all: clean build
