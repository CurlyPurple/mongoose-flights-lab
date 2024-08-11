import { Flight } from "../models/flight.js";

async function newFlight(req,res) {
  res.render('flights/new', {
    title: 'Add Flight'
  })
}

async function create(req,res) {
  try {
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key]
    }
    const flight = await Flight.create(req.body)
    res.redirect('/flights')
  } catch (error) {
    console.log(error)
    res.redirect('/flights/new')
  }
}

async function index(req,res) {
  try {
    const flights = await Flight.find({})
    res.render('flights/index', {
      title: 'All Flights',
      flights
    })
  } catch (error) {
    console.log(error)
    res.redirect('/flights')
  }
}

async function show(req,res) {
  try {
    const flight = await Flight.findById(req.params.flightId)
    res.render('flights/show', {
      flight,
      title: 'Flight Details',
    })
  } catch (error) {
    console.log(error)
    res.redirect('/flights')
  }
}

async function deleteFlight(req,res) {
  try {
    await Flight.findByIdAndDelete(req.params.flightId)
    res.redirect('/flights')
  } catch (error) {
    console.log(error)
    res.redirect('/flights')
  }
}

async function edit(req,res) {
  try {
    const flight = await Flight.findById(req.params.flightId)
    res.render('flights/edit', {
      flight,
      title: 'Edit Flight Details'
    })
  } catch (error) {
    console.log(error)
    res.redirect('/flights')
  }
}

async function update(req,res) {
  try {
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key]
    }
    const flight = await Flight.findByIdAndUpdate(req.params.flightId, req.body, {new: true})
    res.redirect(`/flights/${flight._id}`)
  } catch (error) {
    console.log(error)
    res.redirect('/flights')
  }
}

export {
  newFlight as new,
  create,
  index,
  show,
  deleteFlight as delete,
  edit,
  update
}