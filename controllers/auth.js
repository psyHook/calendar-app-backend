const { response } = require('express');
const User = require('../models/User');

const createUser = async (req, res = response) => {
  // req: lo que el usuario solicita
  // res: lo que nosotros le enviamos

  // Manejo de errores ( Los maneja el Custom middleware )

  // const { name, email, password } = req.body;

  try {

    const user = new User(req.body);

    await user.save();

    res.status(201).json({
      ok: true,
      msg: 'registro',
    });

  } catch (error) {

    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el Administrador.',
    });

  }
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
