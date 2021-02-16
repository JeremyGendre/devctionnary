# DEVCTIONNARY

### Setup

- be sure to have `npm` or `yarn` installed
- to properly apply the *git conventionnal commits*, use `npm install` command to install the commitizen commit helper
 
 
# WEB (front)

# API (back)

Make sure to have `composer` and `symfony-cli` installed, then :
- `composer install`
- duplicate the *.env* file into a *.env.local* file and replace the DATABASE_URL values with the corrects one (that matches with your local config) 
- `php bin/console doctrine:database:drop --if-exist`
- `php bin/console doctrine:database:create`
- `php bin/console doctrine:migrations:migrate`
- `symfony serve`
