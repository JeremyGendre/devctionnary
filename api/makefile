composer:
	composer install

db:
	php bin/console doctrine:database:drop --if-exists --force
	php bin/console doctrine:database:create
	php bin/console doctrine:migrations:migrate --no-interaction

dataset:
	php bin/console doctrine:fixtures:load --append

cache:
	php bin/console cache:clear

install: composer db cache

i : install

install-local: db cache

il: install-local

install-dataset: install dataset

id: install-dataset

install-local-dataset: install-local dataset

ild: install-local-dataset
