const mongoose = require('mongoose');
mongoose.connect(
  'mongodb+srv://ltuc:ltuc123456@hola.jglzb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const FlowersSchema = new mongoose.Schema({
  instructions: String,
  photo: String,
  name: { type: String, unique: true },
});

const FlowersModel = mongoose.model('Flower', FlowersSchema);

module.exports = { FlowersModel };
