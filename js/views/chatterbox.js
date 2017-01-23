module.exports = Backbone.View.extend ({
    initialize: function() {
        this.model.on('change', this.render, this);
        //this.model.on('add', this.render, this);    
        //this.model.on('remove', this.render, this);
    },

    events:  {

    },

    render: {

    },
});