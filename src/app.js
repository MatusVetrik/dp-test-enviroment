const express = require("express");
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const proceedTransaction = (card, price) => {
    // Transaction...
};

app.post('/checkout', (req, res) => {
  console.log('called')
  const data = req.body
  const price = data.price;
  const card = data.card;

  if (!price) {
    return res.status(400).send('Price not provided');
  }
  if (!card) {
    return res.status(400).send('Card not provided');
  }

  proceedTransaction(card, price);

  res.send("Payment Request Succeed")
});