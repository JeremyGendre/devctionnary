# DEVCTIONNARY

[![GitHub Super-Linter](https://github.com/JeremyGendre/devctionnary/workflows/phplint/badge.svg)](https://github.com/marketplace/actions/super-linter)
[![GitHub Super-Linter](https://github.com/JeremyGendre/devctionnary/workflows/jslint/badge.svg)](https://github.com/marketplace/actions/super-linter)

### Setup

**Requirements** :
- [yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable) / [npm](https://www.npmjs.com/get-npm) installed 
- [composer](https://getcomposer.org/download/) installed
- [PHP](https://www.php.net/manual/fr/install.php) >= 7.2.5 installed


- To properly apply the *git conventionnal commits*, use `npm install` command to install the commitizen commit helper
- Then, when you want to commit changes, instead of using `git commit`, use `git cz` and follow the instructions.
 
# WEB (front)

Move into the */web/devctionnary-front* directory and run `npm install`.
Then run `ng serve` to run the development server and browse through the application.

## DevctionnaryFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# API (back)

**optionally** :
- install the [make](http://gnuwin32.sourceforge.net/packages/make.htm) program in order to just have a single command to execute and setup the project.
- install the [symfony](https://symfony.com/download) client to make development easier and faster.

Then, duplicate the .env file and create a .env.local file that you can override in order to fill in the right information about the database and so on.

### Commands

Move to the */api* directory and run :

- `composer install`
- `php bin/console doctrine:database:drop --if-exists --force`
- `php bin/console doctrine:database:create`
- `php bin/console doctrine:schema:update --force` or `php bin/console doctrine:migrations:migrate`
- `php bin/console cache:clear`
- Optionnaly, run `php bin/console doctrine:fixtures:load --append` 
- `symfony serve` to start the php development server **OR** `php -S localhost:8000`

Now, in order to properly use the authentication service, you'll need to generate a ssl key pair.
After `composer install`, you need to do `php bin/console lexik:jwt:generate-keypair`

If that doesn't work, check [this tutorial](https://developers.yubico.com/PIV/Guides/Generating_keys_using_OpenSSL.html).
**/!\\** Before using the commands to generate the keys, make sure to be in this directory : /api/config/jwt. Or specify it directly into the command line.

**OR** If you have *make* installed on your computer :
- `make install` or `make install-dataset`. Then :
- `symfony serve` to start the php development server
