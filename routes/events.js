/*
    Event Router
    /api/events
*/

const { Router } = require('express');
const { validateJWT } = require('../middlewares/validate-jwt');
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require('../controllers/events');

const router = Router();

// Todas tienen que pasar la validaciond el jwt
router.use( validateJWT );

// Obtener eventos
router.get('/', getEvents);

// Crear nuevo evento
router.post('/', createEvent);

// Actualizar evento
router.put('/:id', updateEvent);

// Borrar evento
router.delete('/:id', deleteEvent);

module.exports = router;
