var mongoose = require('mongoose');

module.exports = mongoose.model('reviews', {
    text: {
        type: String,
        default: ''
    }
    
    
});