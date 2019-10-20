<template>
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
        <div>Name</div>
        <input
                type="text"
                id="firstname"
                placeholder="first name"
                :value="firstname"
                @input="nameChanged(true, $event)"
        />
        <input
                type="text"
                id="lastname"
                placeholder="last name"
                :value="lastname"
                @input="nameChanged(false, $event)"
        />
    </div>
</template>

<script>
    export default {
        props: ['value'],

        computed: {
            firstname() {
                return this.value.split(' ')[0];
            },
            lastname() {
                return this.value.split(' ')[1];
            }
        },

        methods: {
            nameChanged(isFirst, event) {
                let value     = event.target.value;
                let firstName = isFirst ? value : this.firstname;
                let lastName  = isFirst ? this.lastname : value;

                this.value = firstName + ' ' + lastName;
                this.$emit('input', this.value);
            }
        }
    }
</script>

<style>
</style>
