<template>
    <div class="quote-item">
        <p class="quote-item__content">{{quote.content}}</p>
        <p class="quote-item__author">{{quote.author}}</p>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            quote: {
                type: Object
            }
        }
    }
</script>

<style scoped>
    .quote-item {
        padding: 1rem;

        border-radius: 10px;
        box-shadow: 0 0 6px rgba(0,0,0,.12);
    }
    .quote-item:hover {
        box-shadow: 0 0 6px rgba(0,0,0,.2);
        cursor: pointer;
    }
    .quote-item__content {
        margin: 0;

        font-family: cursive;
        font-size: 2rem;
    }
    .quote-item__author {
        margin: 0;
        
        font-size: 1rem;
        text-align: right;
    }
</style>
