<template>
    <div :class="{'card': true, 'mb-4': true, 'shadow-sm': true, ['stock-card_' + classPostfix]: true}">
        <div class="card-header">
            <h4 class="my-0 font-weight-normal">{{ title }}</h4>
        </div>
        <div class="card-body">
            <h1 class="card-title pricing-card-title">$29 <small class="text-muted">/ mo</small></h1>
            <div>
                <input type="number" placeholder="Quantity" v-model="qty"/>
                <button type="button" class="btn btn-primary">{{btnText}}</button>
                <div>{{quantity}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        state: {
            qty: 0
        },
        props: {
            title: {
                type: String,
                required: true
            },
            classPostfix: {
                type: String,
                required: false
            },
            btnText: {
                type: String,
                default: 'Buy'
            }
        },
        computed: {
            quantity: () => {
                return this.qty;
            }
        }
    };
</script>

<style>
    .stock-card_portfolio .card-header {
        background-color: #82c2de;
    }
    .stock-card_portfolio .btn-primary {
        background-color: #de667b;
    }
    .stock-card_stock .card-header {
        background-color: #6cde9f;
    }
    .stock-card_stock .btn-primary {
        background-color: #34de95;
    }
</style>
