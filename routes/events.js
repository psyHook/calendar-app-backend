/*
    Event Router
    /api/events
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validateFields');
const { isDate } = require('../helpers/isDate');

const { validateJWT } = require('../middlewares/validate-jwt');
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require('../controllers/events');

const router = Router();

// Todas tienen que pasar la validaciond el jwt
router.use(validateJWT);

// Obtener eventos
router.get('/', getEvents);

// Crear nuevo evento
router.post(
  '/',
  [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatoria').custom(isDate),
    check('end', 'Fecha de finalización es obligatoria').custom(isDate),
    validateFields,
  ],
  createEvent
);

// Actualizar evento
router.put('/:id', updateEvent);

// Borrar evento
router.delete('/:id', deleteEvent);

module.exports = router;
