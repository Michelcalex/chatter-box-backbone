module.exports = Backbone.View.extend ({
    initialize: function() {
        this.model.on('change', this.render, this);
        //this.model.on('add', this.render, this);    
        //this.model.on('remove', this.render, this);
    },

    events: function() {

    },

    render: function() {
        const template = document.querySelector('#chat-template').innerHTML;

        this.el.querySelector('#message-list').innerHTML = '';
        const li = document.createElement('li');
    
        const parent = this.el.querySelector('#message-list');
        parent.appendChild(li);
    },
});