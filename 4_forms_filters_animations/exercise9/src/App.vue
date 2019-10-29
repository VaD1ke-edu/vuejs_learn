<template>
    <div class="container">
        <form v-if="!isSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->

                    <div class="row">
                        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                            <app-full-name v-model="user.name"></app-full-name>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                            <label for="email">Email</label><br>
                            <input
                                    type="email"
                                    id="email"
                                    v-model="user.email"
                            />
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                            <label for="password">Password</label>
                            <input
                                    type="password"
                                    id="password"
                                    class="form-control"
                                    v-model="user.password"
                            >
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                            <div>Store data?</div>
                            <label for="storeData">
                                <input
                                        type="radio"
                                        id="storeData"
                                        value="Yes"
                                        v-model="isStoringData"> Yes
                            </label>
                            <label for="notStoreData">
                                <input
                                        type="radio"
                                        id="notStoreData"
                                        value="No"
                                        v-model="isStoringData"> No
                            </label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                            <button
                                    class="btn btn-primary"
                                    @click.prevent="submit">Submit!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{user.name}}</p>
                        <p>Mail: {{user.email}}</p>
                        <p>Password: {{user.password}}</p>
                        <p>Store in Database?: {{isStoringData}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './components/form/Fullname.vue';

    export default {
        data() {
            return {
                isStoringData: 'No',
                isSubmitted: false,
                user: {
                    email: '',
                    password: '',
                    name: 'Laslo Laslovskey'
                }
            }
        },

        methods: {
            submit() {
                this.isSubmitted = true;
            }
        },

        components: {
            appFullName: FullName
        }
    }
</script>

<style>
</style>
