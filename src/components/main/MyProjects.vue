<template>
    <FullScreenSection title="Projects">
        <h2>Personal Projects</h2>

        <section class="projects">
            <OneProject v-for="project in projects" :key="project.title" v-bind="project" />
        </section>
    </FullScreenSection>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

import FullScreenSection from '@/components/layout/FullScreenSection.vue';
import OneProject from '@/components/project/OneProject.vue';

import { useGetProjectsData } from '@/composables/getData';

const { data: projects, getData } = useGetProjectsData();

onMounted(getData);
</script>

<style lang="scss" scoped>
.projects {
    display: flex;
    flex-direction: column;
    gap: 15px;
}
</style>
