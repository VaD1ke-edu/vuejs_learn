<template>
    <div>
        <p>Please select a User</p>
        <hr>
        <ul class="list-group">
            <li class="list-group-item" v-for="index in 5" @click="toUserDetail(index)">
                User {{index}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        methods: {
            toUserDetail(index) {
                console.log(index);
                this.$router.push({path: `/user/${index}`});
            }
        }
    };
</script>
