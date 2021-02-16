composer:
	composer install

db:
	php bin/console doctrine:database:drop --if-exists --force
	php bin/console doctrine:database:create
	php bin/console doctrine:migrations:migrate --no-interaction

cache:
	php bin/console cache:clear

install: composer db cache

i : install

install-local: db cache

il: install-local

