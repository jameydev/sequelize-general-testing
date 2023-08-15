const hbs = require('handlebars');

hbs.registerHelper('year', () => {
    return new Date().getFullYear();
});