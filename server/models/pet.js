const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({


    petName:{
        type: String,
        required: [true, 'Your Pet must have a name!!'],
        minLength: [3, 'Pet name must be at least 3 characters or more!!'],
        maxLength: [75, 'First off why the pet name so long? Try again!!']
    },

    petType:{
        type: String,
        required: [true, 'You must enter a Breed for your pet!!'],
        minLength: [3, 'Pet type must be at least 3 characters or more!!'],
        maxLength: [75, 'Pet type cannot exceed 75 characters!!' ]
    },

    petDescription:{
        type: String,
        minLength: [3, 'Pet description must be at least 3 characters or more!!'],
        maxLength: [75, 'Pet description must not exceed 75 characters!!']
    },

    skillOne:{
        type: String,
        minLength: [3, 'Skills must be at least three characters long!!'],
        maxLength: [75, 'Skills must not exceed 75 characters!!']
    }, 
    skillTwo:{
        type: String,
        minLength: [3, 'Skills must be at least three characters long!!'],
        maxLength: [75, 'Skills must not exceed 75 characters!!']
    }, 
    skillThree:{
        type: String,
        minLength: [3, 'Skills must be at least three characters long!!'],
        maxLength: [75, 'Skills must not exceed 75 characters!!']
    }, 
}, {timestamps:true})
const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;

