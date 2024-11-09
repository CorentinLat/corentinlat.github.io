<template>
    <section class="one-publication-component">
        <article class="type">
            <VIcon v-if="type === 'book'" name="md-librarybooks-outlined" />
            <VIcon v-else-if="type === 'journal'" name="md-newspaper-round" />
            <VIcon v-else-if="type === 'thesis'" name="md-school-round" />
            <VIcon v-else name="md-article-outlined" />
        </article>

        <section class="publication">
            <h3>{{ title }}</h3>
            <h4>{{ authors }}</h4>
            <p>
                In <i>{{ conference }}</i
                >, {{ year }}.
            </p>
            <p v-if="other">{{ other }}</p>

            <article class="resources">
                <a v-if="preprint" class="resource" :href="preprint" target="_blank">Preprint</a>
                <a v-if="zenodo" class="resource" :href="zenodo" target="_blank">Zenodo</a>
                <a v-if="companion" class="resource" :href="companion" target="_blank">Companion App</a>
                <a v-if="presentation" class="resource" :href="`/res/presentation/${presentation}`" target="_blank">Slides</a>
            </article>
        </section>
    </section>
</template>

<script setup lang="ts">
import type { Publication } from '@/domain/Publication';

defineProps<Publication>();
</script>

<style scoped lang="scss">
.one-publication-component {
    display: flex;
    gap: 8px;

    .type {
        display: flex;
        align-items: center;
        height: 29px;
    }

    .publication {
        display: flex;
        flex-direction: column;
        gap: 5px;

        .resources {
            display: flex;
            gap: 8px;

            .resource {
                padding: 2px 4px;
                font-size: 0.7em;
                border: 1px solid black;
                border-radius: 4px;
            }
        }
    }
}
</style>
