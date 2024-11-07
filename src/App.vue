<template>
    <PageHeader />
    <PageMain />
</template>

<script setup lang="ts">
import PageHeader from '@/components/header/PageHeader.vue';
import PageMain from '@/components/main/PageMain.vue';
</script>

<style lang="scss" scoped>
header { height: $headerHeight; }
main { height: calc(100% - $headerHeight); }
</style>
