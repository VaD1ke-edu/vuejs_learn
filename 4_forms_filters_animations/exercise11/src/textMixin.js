export const textMixin = {
    data() {
        return {
            someMixinText: 'some mixin text',
            text: 'some mixin var', // will be overwritten in component
        }
    },
    computed: {
        reversedMixinText() {
            return this.someMixinText.split('').reverse().join('');
        },
        mixinTextWithLettersQty() {
            return this.someMixinText + ' (' + this.someMixinText.length + ')';
        }
    }
};
