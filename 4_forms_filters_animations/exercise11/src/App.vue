<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <h3>Build a local Filter which reverses the Text it is applied on</h3>
                <div>{{ 'some hardcode' }}</div>
                <div>{{ 'some hardcode' | reverse }}</div>
                <div>{{ text }}</div>
                <div>{{ text | reverse }}</div>

                <hr>

                <!-- Exercise 2 -->
                <h3>Build a global Filter which counts the length of a word and it appends it </h3>
                <strong> Like this: "Test" => Gets Filtered to => "Test (4)" </strong>
                <div>{{ 'some hardcOde' | count-letters }}</div>
                <div>{{ text | count-letters }}</div>
                <div>{{ 'some hardcode' | reverse | count-letters }}</div>
                <div>{{ text | reverse | count-letters }}</div>

                <hr>

                <!-- Exercise 3 -->
                <h3>Do the same as in Exercises 1 & 2, now with Computed Properties</h3>
                <div>{{ reversedText }}</div>
                <div>{{ textWithLettersQty }}</div>

                <hr>

                <!-- Exercise 4 -->
                <h3>Share the Computed Property rebuilding Exercise 2 via a Mixin</h3>
                <div>{{ someMixinText }}</div>
                <div>{{ someMixinText | reverse | count-letters }}</div>
                <div>{{ reversedMixinText }}</div>
                <div>{{ mixinTextWithLettersQty }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import { textMixin } from './textMixin';

    export default {
        data() {
           return {
               text: 'some var'
           };
        },
        mixins: [
          textMixin
        ],
        filters: {
            reverse(value) {
                return value.split('').reverse().join('');
            }
        },
        computed: {
            reversedText() {
                return this.text.split('').reverse().join('');
            },
            textWithLettersQty() {
                return this.text + ' (' + this.text.length + ')';
            }
        }
    }
</script>

<style>
</style>
