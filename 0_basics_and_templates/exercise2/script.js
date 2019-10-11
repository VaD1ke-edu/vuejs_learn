new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        showAlert: function() {
            alert('alert');
        },
        inputKey: function(evt) {
            this.value = evt.target.value;
        }
    }
});