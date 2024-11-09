<template>
    <header>
        <ProfileInfo />
        <NavigationMenu />
    </header>
</template>

<script lang="ts" setup>
import ProfileInfo from '@/components/header/ProfileInfo.vue';
import NavigationMenu from '@/components/header/NavigationMenu.vue';
</script>

<style lang="scss" scoped>
header {
    position: fixed;
    top: 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    background: #333;
    color: #f2f2f2;
    text-align: center;
    z-index: 9;

    @include headerStyle;
}
</style>
