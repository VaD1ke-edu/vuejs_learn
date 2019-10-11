new Vue({
    el: '#app',
    data: {
        name: 'Laslo',
        age: 23
    },
    methods: {
        updateName: function(evt) {
            this.name = evt.target.value;
        }
    }
});
