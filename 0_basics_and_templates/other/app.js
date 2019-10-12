new Vue({
    el: '#app',
    data: {
        name: 'Laslo',
        age: 23,
        helloString: 'Hello!!!',
        link: "https://google.com/",
        linkHtml: "<a href='https://vk.com/'>vk</a>"
    },
    methods: {
        updateName: function(evt) {
            this.name = evt.target.value;
        },
        sayHello: function() {
            return this.helloString;
        },
        onKeyUp: function(evt) {
            console.log(evt.key);
        }
    }
});
