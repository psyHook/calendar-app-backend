const { response } = require('express');
const { validationResult } = require('express-validator');

const createUser = (req, res = response) => {
  // req: lo que el usuario solicita
  // res: lo que nosotros le enviamos

  const { name, email, password } = req.body;

  // Manejo de errores ( Custom middleware )

  res.status(201).json({
    ok: true,
    msg: 'registro',
    name,
    email,
    password,
  });
};

const loginUser = (req, res = response) => {
  const { email, password } = req.body;

  // Manejo de errores ( Custom middleware )

  res.json({
    ok: true,
    msg: 'login',
    email,
    password,
  });
};

const revalidateToken = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'renew',
  });
};

module.exports = {
  createUser,
  loginUser,
  revalidateToken,
};
