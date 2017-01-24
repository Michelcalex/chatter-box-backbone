module.exports = Backbone.View.extend ({
    initialize: function() {
        this.model.on('read', this.render, this);
        this.model.on('change', this.render, this);
        this.model.on('add', this.render, this);    
        // this.model.on('remove', this.render, this);
    },

    events: {
        'click #send': 'sendUserMessage',
        'click #delete': 'deleteMessage',
    },

    sendUserMessage: function() {
        console.log('message sent');
        const newUser = this.el.querySelector('#from').value;
        const newMessage = this.el.querySelector('#user-message').value;
        this.model.createNew(newUser, newMessage); 
    },

    

    render: function() {
        const template = document.querySelector('#chat-template').innerHTML;

        this.el.querySelector('#message-list').innerHTML = '';

        for(let i = 0; i < this.model.models.length; i++) {             //this.model is a collection. Every collection has a '.models' property. This saying how many things inside of the collection
            const m = this.model.models[i];

            const li = document.createElement('li');
            //li.textContent = m.get('name');
            li.innerHTML = Mustache.render(
                template, 
                {
                    from: m.get('from'),   //current model, grab the name. You don't have to say this, because you made a variable m above that does this. 
                    message: m.get('message'),
                }
            );
            
            const parent = this.el.querySelector('#message-list');
            parent.appendChild(li); 
        }
    },
});