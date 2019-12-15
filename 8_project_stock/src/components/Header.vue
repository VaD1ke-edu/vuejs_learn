<template>
    <header class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <router-link to="/" class="home-link my-0 mr-md-auto font-weight-normal" tag="h5">Home</router-link>
        <nav class="my-2 my-md-0 mr-md-3">
            <router-link to="/portfolio"><a class="p-2 text-dark">Portfolio</a></router-link>
            <router-link to="/stock"><a class="p-2 text-dark">Stock</a></router-link>
        </nav>
        <a class="btn btn-outline-primary" href="#">Sign up</a>
    </header>
</template>

<script>
    export default {

    }
</script>

<style>
.home-link {
    cursor: pointer;
}
</style>
