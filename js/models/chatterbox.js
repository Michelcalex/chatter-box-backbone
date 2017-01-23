module.exports = Backbone.Model.extend( {
    defaults: {
        user: 'unknown user',
        message: 'message goes here',
        id: 0,
    },

    updateUser(userName) {
        //Important: I am passing in the string, NOT accessing the DOM here. 
        this.set('user', userName); 
    }
}); 