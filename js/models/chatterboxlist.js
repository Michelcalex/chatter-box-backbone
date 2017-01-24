const ChatterboxModel = require('./chatterbox');  

module.exports = Backbone.Collection.extend({
    
    model: ChatterboxModel, 

    initialize: function() {
        this.fetch();
    },

    createNew: function(userName, userMessage) {
        console.log('creating new user');
        //Create a new model and set it's name
        //Add the new model to the collection
        const newChatterbox = new ChatterboxModel();
        newChatterbox.updateUser(userName);
        newChatterbox.updateMessage(userMessage);
        this.add(newChatterbox);
        newChatterbox.save();
    },
    
});