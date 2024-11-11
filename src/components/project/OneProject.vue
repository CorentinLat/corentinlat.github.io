<template>
    <section class="one-project-component">
        <h3 class="title">{{ title }}</h3>

        <p class="description">{{ description }}</p>

        <p class="techno">
            <VIcon name="fa-laptop-code" />

            <b v-for="techno in technologies" :key="techno">{{ techno }}</b>
        </p>

        <p class="link" v-for="link in links" :key="link.url">
            <VIcon name="md-link-round" />
            {{ link.name }}
            <a :href="link.url" target="_blank">{{ link.url }}</a>
        </p>
    </section>
</template>

<script setup lang="ts">
import type { Project } from '@/domain/Project';

defineProps<Project>();
</script>

<style scoped lang="scss">
.one-project-component {
    .description {
        margin: 5px;
        white-space: pre-wrap;
        text-align: justify;
    }

    .link, .techno {
        display: flex;
        align-items: center;
        gap: 5px;
    }
}
</style>
