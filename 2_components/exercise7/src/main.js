import Vue from 'vue'
import App from './App.vue'

export const vueBus = new Vue({
    data: {
      currentServer: {}
    },
    created() {
        this.$on('current_server_updated', value => {
            this.currentServer = value;
        })
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
});
