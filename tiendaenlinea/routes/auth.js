const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const jwt = require('jsonwebtoken');

// login
router.post('/login',  async (req, res) => {
  const { body } = req;
  const user = await sequelize.models.users.findOne({

   where: {
     email: body.email
      }
 })

if (!user) {
  return res.status(401).json({ message: 'Unauthorized' });
}

if (!user.validPassword(body.password )){
   return res.status(401).json({ message: 'Invalid credentials' });
}

// create token jsonwebtoken
const token = jwt.sign({ userId: user.id },  process.env.JWT_SECRETKEY,   {
  expiresIn: process.env.JWT_EXPIRESIN,
})

return res.json({
  message: 'Authenticated sucessfully',
  token,
})

  });

  // signup
  router.post('/signup',   async  (req, res) => {
    const { body } = req;
    
    let user = await sequelize.models.users.findOne({
      where: { 
        email: body.email 
    }
      
    });

    if (user) {
      return res.status(400).json({ message: "this email is already registered" });
    }
  
  //create a user
  user = await sequelize.models.users.create({
    name: body.name,
    lastname: body.lastname,
    email: body.email,
    type: 'client',
    password: body.password,
  })

  await user.save();

  return res.json({ message: 'Your account was created successfully ===>> here'});

  });
  

module.exports = router;