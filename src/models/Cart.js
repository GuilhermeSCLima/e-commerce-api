const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'product',
    required: true
  }],
  username: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  address: {
    street: {
      type: String,
      required: true
    },
    number: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    }
  },
  payment: {
    card: {
      number: {
        type: String
      },
      cvv: {
        type: String
      }
    }
  }
})

module.exports = mongoose.model('Cart', Schema)
