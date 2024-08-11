import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

// GET /flights
router.get('/', flightsCtrl.index)

// GET /flights/new
router.get('/new', flightsCtrl.new)

// GET /:flightId
router.get('/:flightId', flightsCtrl.show)

// POST /flights
router.post('/', flightsCtrl.create)

// DELETE /flights/:flightId
router.delete('/:flightId', flightsCtrl.delete)

// GET /flights/:flightId/edit
router.get('/:flightId/edit', flightsCtrl.edit)

// PUT /flights/:flightId
router.put('/:flightId', flightsCtrl.update)

export { router }
