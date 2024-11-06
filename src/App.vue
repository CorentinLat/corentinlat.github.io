<template>
    <ProfileInfo />
    <NavigationMenu />

    <full-page :options="options">
        <MyBio class="section" />
        <MyPublications class="section" />
        <MyTeachings class="section" />
        <MyPersonalProjects class="section" />
    </full-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import MyBio from '@/components/MyBio.vue';
import MyPersonalProjects from '@/components/MyPersonalProjects.vue';
import MyPublications from '@/components/MyPublications.vue';
import MyTeachings from '@/components/MyTeachings.vue';
import NavigationMenu from '@/components/NavigationMenu.vue';
import ProfileInfo from '@/components/ProfileInfo.vue';

const options = ref({
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
    menu: '#myMenu',
});
</script>

<style scoped></style>
