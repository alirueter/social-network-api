const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));

// tell mongoose which databases to connect to
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/secret-sundaes', {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// log mongo queries being execute
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));