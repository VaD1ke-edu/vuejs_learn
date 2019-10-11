new Vue({
    el: '#exercise',
    data: {
        effectClass: '',
        divClass: 'strong',
        userClass: '',
        userClass2: '',
        isShowingUserClass: false,
        userColor: '#000',
        curProgress: 1,
        maxProgress: 100,
        progressInterval: false
    },
    methods: {
        startEffect: function() {
            this.effectClass = 'highlight';
        },
        showUserClass: function(value) {
            this.isShowingUserClass = !!value;
        },
        runProgressBar: function() {
            const vm = this;
            vm.progressInterval = setInterval(function() {
                vm.curProgress++;
                if (vm.curProgress >= vm.maxProgress) {
                    clearInterval(vm.progressInterval);
                    vm.progressInterval = false;
                }
            }, 100);
        }
    }
});