<template>
    <section class="one-lecture-component">
        <h3 class="title">{{ title }}</h3>

        <h4 class="school">
            <VIcon name="fa-school" />
            {{ school }}
        </h4>

        <p class="level">
            <VIcon name="fa-chalkboard-teacher" />
            {{ level }}
        </p>

        <p class="lang">
            <VIcon name="md-language-round" />
            In {{ lang }}
        </p>

        <p class="date">
            <VIcon name="md-calendarmonth" />
            {{ date }}
        </p>

        <p class="resource" v-for="resource in resources" :key="resource">
            <VIcon name="md-link-round" />
            <a :href="resource" target="_blank">{{ resource }}</a>
        </p>
    </section>
</template>

<script setup lang="ts">
import type { Lecture } from '@/domain/Lecture';

defineProps<Lecture>();
</script>

<style scoped lang="scss">
.one-lecture-component {
    .lang, .level, .resource, .school, .date {
        display: flex;
        align-items: center;
        gap: 5px;
    }
}
</style>
