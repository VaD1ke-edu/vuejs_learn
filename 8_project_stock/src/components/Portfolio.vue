<template>
    <div class="card-deck mb-3 text-center">
        <template v-for="item in items">
            <app-stock-card :title="item.title" classPostfix="portfolio" btnText="Sell"></app-stock-card>
        </template>
    </div>
</template>

<script>
    import StockCard from './stock/Card.vue';
    import {mapActions, mapGetters} from 'vuex';

    export default {
        components: {
            'app-stock-card': StockCard
        },
        computed: mapGetters('portfolio', ['items'])
    }
</script>


