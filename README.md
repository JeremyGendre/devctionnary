# DEVCTIONNARY

### Setup

**Requirements** :
- [yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable) / [npm](https://www.npmjs.com/get-npm) installed 
- [composer](https://getcomposer.org/download/) installed
- [PHP](https://www.php.net/manual/fr/install.php) >= 7.2.5 installed


- To properly apply the *git conventionnal commits*, use `npm install` command to install the commitizen commit helper
- Then, when you want to commit changes, instead of using `git commit`, use `git cz` and follow the instructions.
 
# WEB (front)

# API (back)

**optionally** :
- install the [make](http://gnuwin32.sourceforge.net/packages/make.htm) program in order to just have a single command to execute and setup the project.
- install the [symfony](https://symfony.com/download) client to make development easier and faster.

Then, duplicate the .env file and create a .env.local file that you can override in order to fill in the right information about the database and so on.

### Commands
- `yarn install / npm install`
- `composer install`
- `php bin/console doctrine:database:drop --if-exists --force`
- `php bin/console doctrine:database:create`
- `php bin/console doctrine:schema:update --force` or `php bin/console doctrine:migrations:migrate`
- `php bin/console cache:clear`
- `yarn encore dev` to make webpack encore watch and compile your js & css files
- `symfony serve` to start the php development server **OR** `php -S localhost:8000`

**OR** If you have *make* installed on your computer :
- `make install` 
then
- `symfony serve` to start the php development server
