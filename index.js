const express = require('express');
const colors = require('colors');
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const { User } = require('./models/User');

const app = express();

app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const port = process.env.PORT || 5000;

app.listen(port, async () => {
    console.log(`Server running on port ${port}`.yellow.bold);

    const sequelize = await connectDB();
    
    await sequelize.sync({ force: true });
    
    User.sync();
    console.log('User table (re)created!'.green.bold);
    
    const jamey = User.build({ userName: 'jamey', userPassword: 'yolo420swag69' });
    
    await jamey.save();
});

