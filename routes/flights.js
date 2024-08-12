import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

// GET /flights
router.get('/', flightsCtrl.index)

// GET /flights/new
router.get('/new', flightsCtrl.new)

// GET /:flightId
router.get('/:flightId', flightsCtrl.show)

// GET /flights/:flightId/edit
router.get('/:flightId/edit', flightsCtrl.edit)

// POST /flights
router.post('/', flightsCtrl.create)

// POST /:flightId/tickets
router.post('/:flightId/tickets', flightsCtrl.createTickets)

// DELETE /flights/:flightId
router.delete('/:flightId', flightsCtrl.delete)

// PUT /flights/:flightId
router.put('/:flightId', flightsCtrl.update)

export { router }
