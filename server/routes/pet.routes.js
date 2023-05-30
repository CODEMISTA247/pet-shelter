const PetController = require('../controllers/pet.controller')



module.exports = app => {
    app.get('/api/allPets', PetController.allPets)
    app.get('/api/onePet/:id', PetController.getOnePet)
    app.post('/api/postPet', PetController.createPet)
    app.put('/api/updatePet/:id', PetController.updatePet)
    app.delete('/api/deletePet/:id', PetController.deletePet)
}