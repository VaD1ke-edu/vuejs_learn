<template>
    <div class="healthbar-wrapper">
        <h2 class="healthbar-title" v-if="title">{{title}}</h2>
        <div class="healthbar bordered">
            <div class="healthbar__progress bordered"
                 :style="{'width': progressPercent + '%'}">
                {{ qty }} / {{ maxQty }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            items: {
                type: Array,
                default: []
            },
            maxQty: {
                type: Number,
                required: true
            },
            bus: {
                type: Object,
                required: true
            },
            title: {
                type: String
            }
        },

        computed: {
            qty: function () {
                return this.items.length;
            },
            progressPercent: function () {
                return this.qty / this.maxQty * 100;
            }
        },

        watch: {
            qty(value) {
                if (this.qty >= this.maxQty) {
                    this.bus.$emit('progressbar_is_full');
                }
            }
        }
    }
</script>

<style>
    .healthbar {
        height: 40px;
        margin: auto;

        background-color: #eee;
        transition: width 500ms;
    }
    .healthbar__progress {
        display: flex;
        align-items: center;
        justify-content: center;

        height: inherit;
        margin: 0;

        background-color: #2e86de;
        color: white;
        text-align: center;
        vertical-align: middle;
    }
</style>
