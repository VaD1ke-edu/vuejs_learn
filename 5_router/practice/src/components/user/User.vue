<template>
    <div>
        <h1>The User Page</h1>
        <router-view></router-view>
    </div>
</template>

<script>
    export default  {
        beforeEnter: (to, from, next) => {
            console.log('user before enter');
//            next();
        }
    }
</script>