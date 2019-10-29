<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button v-my-on:click.delayed="{callback: onClick, delay: 500}">click</button>
                <input v-my-on:keyup="onKeyUp" type="text">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'my-on': {
                bind(el, binding) {
                    let
                        callback = binding.value.callback || binding.value,
                        event    = binding.arg,
                        delay    = binding.value.delay || 1000,
                        delayedCallback
                    ;

                    if (!callback || typeof callback !== 'function') return;

                    if (binding.modifiers['delayed']) {
                        delayedCallback = function (evt) {
                            setTimeout(function () {
                                callback(evt);
                            }, delay);
                        };
                    }
                    el.addEventListener(event, delayedCallback || callback);
                }
            }
        },
        methods: {
            onClick(event) {
                console.log('clicked on', event.target);
            },
            onKeyUp(event) {
                console.log('typed', event.key);
            }
        }
    }
</script>

<style>
</style>
