// const express = require("express");
// const path = require('path');

// const app = express();

// // Define the route handler for the "/hello" endpoint
// app.get('/hello', (req, res) => {
//   const greeting = { message: 'Hello, world!' };
//   res.json(greeting);
// });



// const port = process.env.PORT || 8080;

// app.listen(port, () => {
//  console.log(`Server is up on port ${port}.`);
// });

const express = require("express");
const path = require('path');

const recipesRouter = require('./routers/recipes');

const app = express();

app.use((req, res, next) => {
  const { method, path } = req;
  console.log(
  `New request to: ${method} ${path} at ${new Date().toISOString()}`
  );
  next();
});

app.use('/api/v1/recipes', recipesRouter);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is up on port ${port}.`);
});