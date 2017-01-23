const ChatterboxList = require('./models/chatterbox')
const ChatterboxView = require('./views/chatterbox');

window.addEventListener('load', function() {
    console.log('ready to rock');
    const list = new ChatterboxList();

    const view = new ChatterboxView({
        el: document.querySelector('body'), 
        model: list,
    });

    view.render();
});