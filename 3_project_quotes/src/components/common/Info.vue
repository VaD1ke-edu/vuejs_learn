<template>
    <div class="info-wrapper bordered">
        <div class="info">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
    .info-wrapper {
        padding: 2rem;

        background-color: #48dbfb;
        color: #2450d7;
        text-align: center;
    }
</style>
