<template>
    <p>Double counter is: {{ doubleCounter }}</p>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
//        props: ['counter']
        computed: mapGetters(['doubleCounter'])
    }
</script>