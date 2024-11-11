<template>
    <FullScreenSection title="Teaching">
        <OneLecture v-for="lecture in lectures" :key="lecture.title" v-bind="lecture" />
    </FullScreenSection>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

import FullScreenSection from '@/components/layout/FullScreenSection.vue';
import OneLecture from '@/components/teaching/OneLecture.vue';

import { useGetLecturesData } from '@/composables/getData';

const { data: lectures, getData } = useGetLecturesData();

onMounted(getData);
</script>
