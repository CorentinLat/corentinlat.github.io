<template>
    <ContentSection anchor="publications" title="Publications">
        <OnePublication v-for="publication in publications" :key="publication.title" v-bind="publication" />
    </ContentSection>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

import ContentSection from '@/components/layout/ContentSection.vue';
import OnePublication from '@/components/publication/OnePublication.vue';

import { useGetPublicationsData } from '@/composables/getData';

const { data: publications, getData } = useGetPublicationsData();

onMounted(getData);
</script>
