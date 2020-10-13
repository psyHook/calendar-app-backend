const { response } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const createUser = async (req, res = response) => {
  // req: lo que el usuario solicita
  // res: lo que nosotros le enviamos
  // Manejo de errores ( Los maneja el Custom middleware )

  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        ok: false,
        msg: 'Un usuario existe con ese correo.',
      });
    }

    user = new User(req.body);
    
    // Encriptar contraseña
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync( password, salt );

    // Grabacion en la base de datos
    await user.save();

    res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name
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
