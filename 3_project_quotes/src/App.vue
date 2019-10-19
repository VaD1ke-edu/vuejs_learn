<template>
    <div class="container">
        <app-progress-bar
                :items="quotes"
                :bus="quoteBus"
                :maxQty="maxQuotes"
                title="Quotes Added"
        ></app-progress-bar>

        <hr>

        <div class="quote-form-container">
            <app-quote-add
                    v-if="canAddQuotes"
            ></app-quote-add>
        </div>

        <app-quote-grid
                :quotes="quotes"
        ></app-quote-grid>

        <hr>

        <app-info>
            <strong>Info:</strong> click on a quote to delete it
        </app-info>
    </div>
</template>

<script>
    import quoteGrid from './components/Quote/Grid.vue';
    import quoteAdd from './components/Quote/Add.vue';
    import progressBar from './components/common/Progressbar.vue';
    import info from './components/common/Info.vue';

    import { vueQuoteBus } from './components/Quote/bus';

    export default {
        data() {
            return {
                quoteBus: vueQuoteBus,
                maxQuotes: 10
            };
        },
        components: {
            appQuoteGrid: quoteGrid,
            appQuoteAdd: quoteAdd,
            appProgressBar: progressBar,
            appInfo: info,
        },
        computed: {
            quotes: () => vueQuoteBus.quotes,
            canAddQuotes: () => !vueQuoteBus.isFull,
        }
    }
</script>

<style>
    .bordered {
        border-radius: 5px;
    }
    .quote-form-container {
        width: 30%;
        margin: 0 auto 3rem auto;
    }
</style>
