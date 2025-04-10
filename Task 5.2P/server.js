const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const projectRoutes = require('./routes/projectRoutes');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

mongoose.connect('mongodb://localhost:27017/myprojectDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB!');
});

app.use('/', projectRoutes);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
