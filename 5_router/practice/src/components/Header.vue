<template>
    <div>
        <div @click="toHome"><- to home</div>
        <ul class="nav nav-pills">
            <router-link tag="li" to="/" active-class="active" exact>Home</router-link>
            <router-link tag="li" to="/user" active-class="active">User</router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        methods: {
            toHome() {
                this.$router.push({path: '/', hash: '#from_header'});
            }
        }
    }
</script>
