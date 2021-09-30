const { httpError } = require('../helpers/handleError');
const userModel = require('../models/users');
const getItems = async (req, res) => {
  try {
    const lisAll = await userModel.find({});
    res.send({ data: lisAll });
  } catch (error) {
    httpError(res, error);
  }
};
const getItem = (req, res) => {};

const createItem = async (req, res) => {
  try {
    const { name, age, email } = req.body;
    const resDetail = await userModel.create({
      name,
      age,
      email,
    });
    res.send({ data: resDetail });
  } catch (error) {
    httpError(res, error);
  }
};
const putItem = (req, res) => {};
const deleteItem = (req, res) => {};

module.exports = { getItem, getItems, createItem, putItem, deleteItem };
