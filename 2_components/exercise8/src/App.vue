<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="changeComponent('appBlue')">Load Blue Template</button>
                <button class="btn btn-success" @click="changeComponent('appGreen')">Load Green Template</button>
                <button class="btn btn-danger" @click="changeComponent('appRed')">Load Red Template</button>
                <hr>
                <component :is="currentComponent">
                    <p>Some text</p>
                </component>
                <app-blue><p>Some text</p></app-blue>
                <app-green><p>Some text</p></app-green>
                <app-red><p>Some text</p></app-red>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function () {
            return {
                currentComponent: 'appBlue'
            };
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        methods: {
            changeComponent(name) {
                this.currentComponent = name;
            }
        }
    }
</script>

<style>
</style>
