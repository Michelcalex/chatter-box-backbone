const ChatterboxList = require('./models/chatterboxlist');
const ChatterboxView = require('./views/chatterbox');
const ChatterboxModel = require('./models/chatterbox');

Backbone.sync = function(method, model) {           //this model parameter is always the one we are saving
    if(method === 'create' || method === 'update') {
        const request = new XMLHttpRequest();
        request.open('POST', 'http://api.queencityiron.com/chats');
        request.addEventListener('load', function() {
           model.trigger('change');
        })

        let message = {
            from: model.get('from'),
            message: model.get('message'),
        };

        request.send(JSON.stringify(message));

    }

    //Somewhere in our code we're trying to get info from the server. 
    if(method === 'read') {
        const request = new XMLHttpRequest();
        request.open('GET', 'http://api.queencityiron.com/chats');
        request.addEventListener('load', function() {
            const response = JSON.parse(request.responseText);

            for(let i = 0; i < response.chats.length; i++) {
                let chat = response.chats[i];
                msg = new ChatterboxModel();
                msg.set('from', response.chats[i].from);
                msg.set('message', response.chats[i].message);
                //model.add(msg)
                model.trigger('change');

                //NOTE: I would create an 'id' property in your chatmodel
                //msg = new ChatModel() for example ----------make a new ChatModel for each of response.chats
                //msg.set('from', response.chats[i].from);
                //model.add(msg) ------[that ChatModel from above].   ---we are trying to add each model from our collection
            }
            //lets say response is event info
            // model.set('name', response.name);
            // model.set('attendees', response.attendees);
            // model.set('when', response.when);
            
        });
        request.send();
    }
};

window.addEventListener('load', function() {
    console.log('ready to rock');
    const list = new ChatterboxList();

    const view = new ChatterboxView({
        el: document.querySelector('body'), 
        model: list,
    });

    view.render();
});