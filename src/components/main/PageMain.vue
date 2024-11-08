<template>
    <main>
        <full-page :options="options">
            <MyBio />
            <MyPublications />
            <MyTeachings />
            <MyPersonalProjects />
        </full-page>
    </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import MyBio from '@/components/main/MyBio.vue';
import MyPersonalProjects from '@/components/main/MyPersonalProjects.vue';
import MyPublications from '@/components/main/MyPublications.vue';
import MyTeachings from '@/components/main/MyTeachings.vue';

const options = ref({
    anchors: ['bio', 'publications', 'teaching', 'personalProjects'],
    menu: '#myMenu',
    normalScrollElements: '.scrollable-element',
    scrollOverflowMacStyle: true,
});
</script>

<style lang="scss" scoped>
.section {
    padding-top: calc($headerHeight + $headerPadding * 2);
}
</style>
