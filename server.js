// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
const fs = require('fs')
const express = require('express');
const apiRoutes = require('./apiRoutes');
const htmlRoutes = require('./htmlRoutes');
const app = express();

const PORT = process.env.PORT || 3002;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public")); 
app.use('/api',apiRoutes)
app.use('/',htmlRoutes)



// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});