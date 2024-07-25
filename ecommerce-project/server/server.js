const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware e rotas
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
