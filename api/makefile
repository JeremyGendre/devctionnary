composer:
	composer install

yarn:
	yarn install

db:
	php bin/console doctrine:database:drop --if-exists --force
	php bin/console doctrine:database:create
	php bin/console doctrine:migrations:migrate --no-interaction

cache:
	php bin/console cache:clear

asset:
	yarn encore dev

install: composer yarn db cache asset

i : install

install-local: db cache asset

il: install-local

install-dataset: install dataset

id: install-dataset

install-local-dataset: install-local dataset

ild: install-local-dataset
