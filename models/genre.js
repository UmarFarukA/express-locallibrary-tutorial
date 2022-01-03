const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const genreSchema = new Schema({
    name : {
        type : String,
        minlength: 3,
        maxlength : 100,
        required: [true, 'Provide a genre name'],
        trim : true
    }
});

genreSchema
    .virtual('url')
    .get(function (){
        return '/catalog/genre/' + this._id;
    });


module.exports = mongoose.model('Genre', genreSchema);