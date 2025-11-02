<template>
    <ContentSection anchor="teaching" title="Teaching">
        <OneLecture v-for="lecture in lectures" :key="lecture.title" v-bind="lecture" />
    </ContentSection>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

import ContentSection from '@/components/layout/ContentSection.vue';
import OneLecture from '@/components/teaching/OneLecture.vue';

import { useGetLecturesData } from '@/composables/getData';

const { data: lectures, getData } = useGetLecturesData();

onMounted(getData);
</script>
