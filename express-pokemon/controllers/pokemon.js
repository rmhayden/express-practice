
const Pokemon = require('../models/pokemon');

module.exports = {
    index,
    getOne
  };


function index(req, res) {
    // res.send('hitting todos index')
    // console.log(res.locals)
    const contextObject = {
        title: 'All Pokemon',
        pokemon: Pokemon.getAll()
    }
    res.render('pokemon/index', contextObject)
}

function getOne(req, res) {

    const id = req.params.id

    const contextObject = {
        title: 'Pokedex - View Pokemon',
        pokemon: Pokemon.getOne(id)
    }

    res.render('pokemon/show', contextObject)

}

