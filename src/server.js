import app from "./app.js";

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API listening on port ${port}`);
  console.log('Server entry point');
});

