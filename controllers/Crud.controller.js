const { FlowersModel } = require('../models/mongo.models');
const axios = require('axios');

const creatCrud = async (req, res) => {
  let { instructions, photo, name } = req.body;
  let seed = new FlowersModel({
    instructions: instructions,
    photo: photo,
    name: name,
  });
  seed.save();
  res.send('created');
};

const getCrud = async (req, res) => {
  FlowersModel.find({}, (error, result) => {
    res.send(result);
  });
};

const deleteCrud = async (req, res) => {
  const id = req.params.id;
  FlowersModel.findOneAndDelete({ name: id }, (error, result) => {
    if (!result) {
      res.send('not found ');
    } else if (error) {
      res.send(error);
    } else {
      res.send('deleted');
    }
  });
};

const updateCrud = async (req, res) => {
  let { instructions } = req.body;
  const id = req.params.id;
  FlowersModel.findOneAndUpdate(
    { name: id },
    { instructions: instructions },
    (error, result) => {
      if (!result) {
        res.send('not found ');
      } else if (error) {
        res.send(error);
      } else {
        res.send('updated');
      }
    }
  );
};

module.exports = { creatCrud, getCrud, deleteCrud, updateCrud };
