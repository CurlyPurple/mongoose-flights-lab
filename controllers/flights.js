import { Flight } from "../models/flight.js";

async function newFlight(req,res) {
  res.render('flights/new', {
    title: 'Add Flight'
  })
}

async function create(req,res) {
  try {
    const flight = await Flight.create(req.body)
    res.redirect('/flights')
  } catch (error) {
    console.log(error)
    res.redirect('/flights/new')
  }
}

export {
  newFlight as new,
  create,
}