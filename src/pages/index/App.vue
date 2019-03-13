<template>
    <HelloWorld />
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import HelloWorld from './components/HelloWorld.vue';

    @Component({
        components: {
            HelloWorld
        }
    })

    export default class App extends Vue { }
</script>
