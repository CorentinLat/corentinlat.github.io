<template>
    <h1>Corentin Latappy</h1>

    <full-page :options="options">
        <div class="section">First</div>
        <div class="section">Second</div>
        <div class="section">Third</div>
    </full-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const options = ref({

});
</script>

<style scoped>
</style>
