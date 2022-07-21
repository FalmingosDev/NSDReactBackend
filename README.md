# NSDReactBackend
Node Backend for React


npm init

npm i express

npm i sequelize

npm i mysql2

npm i --save express sequelize cors mysql2 nodemon  (--save for production level)


https://github.com/GaziAdib/Node-Express-Sequelize-React-FullStack-image-upload

https://medium.com/swlh/build-your-first-api-with-express-generator-sequelize-and-cli-2f7494cc517b


https://sequelize.org/docs/v6/other-topics/migrations/

API End Point:

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
