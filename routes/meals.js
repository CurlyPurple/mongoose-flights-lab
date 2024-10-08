import { Router } from 'express'
import * as mealsCtrl from '../controllers/meals.js'

const router = Router()

// GET /meals/new
router.get('/new', mealsCtrl.new)

router.post('/', mealsCtrl.create)

export { router }