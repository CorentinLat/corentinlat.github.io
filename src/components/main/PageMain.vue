<template>
    <main>
        <full-page :options="options">
            <MyBio />
            <MyPublications />
            <MyTeachings />
            <MyProjects />
        </full-page>
    </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import MyBio from '@/components/main/MyBio.vue';
import MyProjects from '@/components/main/MyProjects.vue';
import MyPublications from '@/components/main/MyPublications.vue';
import MyTeachings from '@/components/main/MyTeachings.vue';

const options = ref({
    anchors: ['bio', 'publications', 'teaching', 'projects'],
    menu: '#myMenu',
    normalScrollElements: '.scrollable-element',
    scrollOverflowMacStyle: true,
});
</script>

<style lang="scss" scoped>
main {
    @include pageMainHeight;

    .section {
        @include fullPageSectionPaddingTop;
    }
}
</style>
