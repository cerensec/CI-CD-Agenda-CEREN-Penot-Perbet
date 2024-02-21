const express = require('express');
const routes = require('./routes/main');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});