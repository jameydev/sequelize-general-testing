const express = require('express');
const colors = require('colors');
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');

const app = express();

app.use(express.json());

// app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

connectDB();