<template>
    <div>
        <h3>Server #{{id}}</h3>
        <p>Status is {{status}}</p>
        <button @click="selectServer()">Select</button>
    </div>
</template>

<script>
    import { vueBus } from '../main';

    export default {
        props: {
            id: {
                type: Number,
                required: true,
            },
            status: {
                type: String,
                'default': 'Normal'
            }
        },
        methods: {
            selectServer: function () {
                var data = { 'id': this.id, 'status': this.status};
                vueBus.$emit('current_server_updated', data);
            }
        }
    };
</script>

<style>

</style>
