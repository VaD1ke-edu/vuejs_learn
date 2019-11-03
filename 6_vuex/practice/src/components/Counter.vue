<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
        <div>{{ $store.state.counter }}</div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        methods: {
            ...mapActions(['increment']),
            decrement() {
                this.$store.state.counter--;
            }
        }
    }
</script>