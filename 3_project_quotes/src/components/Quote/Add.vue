<template>
    <div class="quote-add-form">
        <h2>Add quote</h2>
        <textarea placeholder="quote" v-model="content" class="quote-add-form__field"></textarea>
        <input type="text" placeholder="author" v-model="author" class="quote-add-form__field">
        <button @click="addNew" class="quote-add-form__field quote-add-form__field_button">Add quote</button>
    </div>
</template>

<script>
    import { vueQuoteBus } from './bus';

    export default {
        beforeCreate() {
            this._getResetData = function () {
                return {
                    content: '',
                    author: ''
                };
            };
        },

        data() {
            return this._getResetData();
        },

        methods: {
            addNew: function () {
                if (!this.content || !this.author) return;

                vueQuoteBus.$emit('add_new_quote', {'content': this.content, 'author': this.author});
                const resetData = this._getResetData();
                for (let field in resetData) {
                    this.$data[field] = resetData[field];
                }
            }
        }
    }
</script>

<style>
    .quote-add-form {
        display: flex;
        flex-direction: column;
    }
    .quote-add-form__field {
        margin: .5rem 0;
    }
    .quote-add-form__field_button {
        width: 30%;
        margin: 0 auto;

        text-align: center;
    }
</style>
