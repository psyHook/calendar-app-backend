const { response } = require('express');
const { validationResult } = require('express-validator');

const createUser = (req, res = response) => {
  // req: lo que el usuario solicita
  // res: lo que nosotros le enviamos

  // console.log(req)

  const { name, email, password } = req.body;

  // Manejo de errores
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.json({
      ok: false,
      errors: errors.mapped(),
    });
  }

  res.status(201).json({
    ok: true,
    msg: 'registro',
    name,
    email,
    password,
  });
};

const loginUser = (req, res = response) => {

    // Manejo de errores
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
      return res.json({
        ok: false,
        errors: errors.mapped(),
      });
    }
    
  const { email, password } = req.body;

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
