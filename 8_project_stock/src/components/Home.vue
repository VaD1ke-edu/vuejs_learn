<template>
    <div>
        <h1>Trade or View your Portfolio</h1>
        <p>You may Save&Load your date</p>
        <p>Click on "End Day" to begin a new Day!</p>
        <hr>
        <p><strong>Your Funds: {{ fundsTotal | showThousands }}</strong></p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: mapGetters(['fundsTotal'])
    }
</script>

<style>

</style>
