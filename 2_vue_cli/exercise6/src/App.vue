<template>
    <div class="container">
        <header></header>
        <hr>
        <div class="row">
            <server-list></server-list>
            <server-details></server-details>
        </div>
        <hr>
        <footer></footer>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';
    import ServerList from './components/ServerList.vue';
    import ServerDetails from './components/ServerDetails.vue';

    export default {
      'components': {
          'header': Header,
          'footer': Footer,
          'server-list': ServerList,
          'server-details': ServerDetails
      }
    };
</script>

<style>

</style>
