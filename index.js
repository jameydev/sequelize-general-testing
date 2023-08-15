const express = require('express');
const { engine } = require('express-handlebars');
const colors = require('colors');
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const { User } = require('./models/User');

const app = express();
app.use(express.json());

const router = express.Router();

app.use(express.static('public'));

app.set('views', 'views');
app.set('view engine', 'hbs');
app.engine('hbs', engine({
    extname: 'hbs',
    helpers: require('./helpers.js'),
    partialsDir: 'partials',
    layoutsDir: 'views/layouts',
    defaultLayout: 'main'
}));

app.get('/', async (req, res) => {
    const users = await User.findAll();
    res.render('index.hbs', {
        title: 'Home',
        stylesheets: ['index/main.css'],
        scripts: ['index/index.js'],
        users: users
    });
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

