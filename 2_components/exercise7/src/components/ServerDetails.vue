<template>
    <div class="col-xs-12 col-sm-6">
        <p>{{ details }}</p>
    </div>
</template>

<script>
    import { vueBus } from '../main';

    export default {
        computed: {
            details: function () {
                if (vueBus.currentServer.id) {
                    return `Server #${vueBus.currentServer.id} is with status ${vueBus.currentServer.status}`;
                }
                return 'Server Details are currently not updated';
            }
        }
    };
</script>

<style>

</style>
