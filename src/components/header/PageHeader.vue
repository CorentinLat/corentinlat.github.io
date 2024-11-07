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
$gap: 20px;
$navMenuHeight: 30px;

header {
    position: fixed;
    top: 0;
    height: 25vh;
    width: 100%;
    padding: 15px 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $gap;

    background: #333;
    color: #f2f2f2;
    text-align: center;
    z-index: 9;

    .profile-info-container { height: calc(100% - $gap - $navMenuHeight); }
    .navigation-menu-container { height: $navMenuHeight; }
}
</style>
