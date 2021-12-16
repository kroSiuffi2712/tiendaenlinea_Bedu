const { Sequelize } = require('sequelize');

//models
const Product = require('./models/Product');
const Review = require('./models/Review');
const User = require('./models/User');
const Order = require('./models/Order');

//database connect
const sequelize = new Sequelize('ecommerce-api', 'root' , 'root' , {
    host: 'localhost',
    dialect: 'mariadb',
    logging: false,
})


//getting models
const models = [
  Product,
  Review, 
  User, 
  Order  
]


//registering models
for (let model of models) {
    model(sequelize);
  }

  //relations between models
  const {  products, reviews, users, orders   } = equelize.models;
  reviews.belongsTo(products);
  orders.belongsTo(users);
  orders.belongsTo(products);


module.exports = sequelize;