<template>
    <FullScreenSection title="Publications">
        <OnePublication v-for="publication in publications" :key="publication.title" v-bind="publication" />
    </FullScreenSection>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

import FullScreenSection from '@/components/layout/FullScreenSection.vue';
import OnePublication from '@/components/publication/OnePublication.vue';

import { useGetPublicationsData } from '@/composables/getData';

const { data: publications, getData } = useGetPublicationsData();

onMounted(getData);
</script>
