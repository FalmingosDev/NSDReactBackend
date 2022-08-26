# NSDReactBackend
Node Backend for React

nodemon npm start

npm init

npm i express

npm i sequelize

npm i mysql2

npm i --save express sequelize cors mysql2 nodemon  (--save for production level)


# https://github.com/GaziAdib/Node-Express-Sequelize-React-FullStack-image-upload

# https://medium.com/swlh/build-your-first-api-with-express-generator-sequelize-and-cli-2f7494cc517b


# Sequelize CLI ->  https://sequelize.org/docs/v6/other-topics/migrations/

# Creating the first Model (and Migration)
    npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
    npx sequelize-cli db:migrate

# Undoing Migrations
    npx sequelize-cli db:migrate:undo
    npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js

# Migrations Commands
    Commands:
        sequelize db:migrate                        Run pending migrations
        sequelize db:migrate:schema:timestamps:add  Update migration table to have timestamps
        sequelize db:migrate:status                 List the status of all migrations
        sequelize db:migrate:undo                   Reverts a migration
        sequelize db:migrate:undo:all               Revert all migrations ran
        sequelize db:seed                           Run specified seeder
        sequelize db:seed:undo                      Deletes data from the database
        sequelize db:seed:all                       Run every seeder
        sequelize db:seed:undo:all                  Deletes data from the database
        sequelize db:create                         Create database specified by configuration
        sequelize db:drop                           Drop database specified by configuration
        sequelize init                              Initializes project
        sequelize init:config                       Initializes configuration
        sequelize init:migrations                   Initializes migrations
        sequelize init:models                       Initializes models
        sequelize init:seeders                      Initializes seeders
        sequelize migration:generate                Generates a new migration file
        sequelize migration:create                  Generates a new migration file
        sequelize model:generate                    Generates a model and its migration
        sequelize model:create                      Generates a model and its migration
        sequelize seed:generate                     Generates a new seed file
        sequelize seed:create                       Generates a new seed file

# Creating the first Seed
    npx sequelize-cli seed:generate --name demo-user

# Running Seeds
    npx sequelize-cli db:seed:all

# Undoing Seeds

# JWT in Express -> 
        1) https://www.geeksforgeeks.org/how-to-implement-jwt-authentication-in-express-js-app/
        2) https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/


# Creating Middleware:

            npm install dotenv (if not installed)
            npm install jsonwebtoken

            mkdir middleware
            type nul > middleware/auth.js   (For creating new file)


# To Generate A SERECT KEY use the bellow command in cmd

    node -e console.log(require('crypto').randomBytes(64).toString('hex'))


# API End Point:

Method: POST
End Point: http://localhost:8080/api/products/addProduct
End Point: http://localhost:8080/api/products/1

Data -> Body-> raw/JSON

{
    "title": "iphone 12",
    "price": "3452.5",
    "description": "iphone is awesome",
    "published": "true"
}


# NODEMON
npm install -g nodemon
# or if using yarn
yarn global add nodemon

*---------------- In package.json ---------------*
"scripts": {
    "serve": "nodemon server.js"
  },
