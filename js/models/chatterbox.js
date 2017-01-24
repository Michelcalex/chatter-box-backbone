module.exports = Backbone.Model.extend( {
    defaults: {
        from: 'unknown user',
        message: 'message goes here',
        id: null,
        added: null,
    },

    updateUser(userName) {
        //Important: I am passing in the string, NOT accessing the DOM here. 
        this.set('from', userName); 
    },

    updateMessage(userMessage) {
        this.set('message', userMessage);
    },

    updateId(messageId) {
        this.set('id', messageId)
    },
}); 