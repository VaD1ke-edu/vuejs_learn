<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li class="list-group-item" v-for="server in servers">
                <app-server :id="server.id" :status="server.status"></app-server>
            </li>
        </ul>
    </div>
</template>

<script>
    import Server from './Server.vue';

    export default {
        data: function () {
            return {
                servers: [
                    {id: 1, status: 'Normal'},
                    {id: 2, status: 'Critical'},
                    {id: 3, status: 'Good'},
                    {id: 4, status: 'Normal'},
                    {id: 5, status: 'Warning'}
                ]
            }
        },
        components: {
            'app-server': Server
        }
    };
</script>

<style>

</style>
