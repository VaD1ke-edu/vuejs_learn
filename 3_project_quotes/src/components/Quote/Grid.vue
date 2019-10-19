<template>
    <div class="quote-grid">
        <div
            v-for="(quote, index) in quotes"
            class="quote-grid__item"
        >
            <app-quote-item
                    @click.native="deleteQuote(index)"
                    :quote="quote"
            ></app-quote-item>
        </div>
    </div>
</template>

<script>
    import quoteItem from './Item.vue';
    import { vueQuoteBus } from './bus';

    export default {
        props: {
            quotes: {
                type: Array,
                required: true
            }
        },

        components: {
            appQuoteItem: quoteItem
        },

        methods: {
            deleteQuote(index) {
                vueQuoteBus.$emit('delete_quote', index);
            }
        }
    }
</script>

<style>
    .quote-grid {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .quote-grid__item {
        width: 31.5%;
        margin-right: 1%;
        margin-bottom: 2rem;
    }
</style>
