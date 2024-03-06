const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const sauceRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');






const stripe = require("stripe")('sk_test_51OSK1BCg4zAeNBqIBNhGwmeVnW6jgETDOsgRgTq3rKIfWhnBsX7xxi4PCm0BQi9Oi7bWELH1bKairJtYaQjapOaz00jPIbKu75');





  mongoose.connect('mongodb+srv://4points:Momopermisapoints@4pointspermis.dzs0kou.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();


app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});





//Utilisé pour parser le corps des réponses en JSON
app.use(bodyParser.json());





app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);









app.post("/create-payment-intent", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "EUR",
      amount: 1999,
      automatic_payment_methods: { enabled: true },
    });

    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});
























module.exports = app;