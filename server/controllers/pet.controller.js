const Pet = require('../models/pet')




module.exports = {

    allPets: (req,res) => {
        Pet.find()
            .then((allPets) => {
                // console.log(allAlbums)
                res.json(allPets)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    getOnePet: (req, res) => {
        Pet.findOne({_id: req.params.id})
            .then((onePet) => {
                res.json(onePet)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    createPet: (req, res) => {
        Pet.create(req.body)
            .then((newPet) => {
                res.json(newPet)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    updatePet: (req, res) => {
        // console.log('PARAMS*********', req.params)
        Pet.findOneAndUpdate( { _id: req.params.id } ,req.body, { new: true, runValidators: true } )
            .then(updatedPet => {
                res.json(updatedPet)
            })
            .catch((err) => {
                res.status(500).json(err)
            });
    },

    deletePet: (req,res) =>
        Pet.deleteOne({ _id: req.params.id })
            .then((response) => {
                res.json(response)
            })
            .catch((err) => {
                res.status(500).json(err)
            })

}