const ChatterboxModel = require('./chatterbox');  

module.exports = Backbone.Collection.extend({
    
    model: ChatterboxModel, 

    createNew: function(userName) {
        console.log('creating new user');
        //Create a new model and set it's name
        //Add the new model to the collection
        const newChatterboxModel = new ChatterboxModel();
        newChatterboxModel.set('user', userName);
        this.add(newChatterboxModel);
    },
});