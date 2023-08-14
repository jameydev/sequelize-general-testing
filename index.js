const express = require('express');
const colors = require('colors');
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv').config();

const app = express();

app.use(express.json());

// app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

const connectDB = async () => {
    const sequelize = new Sequelize(process.env.MDB_URI, { dialect: 'mariadb' });
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.'.green);
    } catch (err) {
        console.error('Unable to connect to the database:'.red, err);
    }
};

connectDB();