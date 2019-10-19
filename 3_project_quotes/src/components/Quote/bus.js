import Vue from 'vue';

export const vueQuoteBus = new Vue({
    data: {
        quotes: [
            {
                content: 'My super quote',
                author: 'Laslo',
            },
            {
                content: 'Не всегда просит прощения тот, кто виноват. Просит прощения тот, кто дорожит отношениями.',
                author: 'Эрих Мария Ремарк',
            },
            {
                content: 'Настоящий друг — это человек, который выскажет тебе в глаза все, что о тебе думает, а всем скажет, что ты — замечательный человек.',
                author: 'Омар Хайям',
            },
            {
                content: 'Не всегда просит прощения тот, кто виноват. Просит прощения тот, кто дорожит отношениями.',
                author: 'Эрих Мария Ремарк',
            }
        ],
        isFull: false
    },
    created() {
        this.$on('add_new_quote', value => {
            if (!this.isFull) {
                this.quotes.unshift(value);
            }
        });
        this.$on('delete_quote', index => {
            this.quotes.splice(index, 1);
            this.isFull = false;
        });
        this.$on('progressbar_is_full', () => {
            this.isFull = true;
        });
    }
});