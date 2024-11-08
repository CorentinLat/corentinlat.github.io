<template>
    <section class="section">
        <article class="full-screen-section-component">
            <h1 v-if="title" class="title">{{ title }}</h1>

            <section class="scrollable-element">
                <slot />
            </section>
        </article>
    </section>
</template>

<script setup lang="ts">
defineProps<{ title?: string }>();
</script>

<style lang="scss" scoped>
.full-screen-section-component {
    display: flex;
    flex-direction: column;
    margin: 20px;
    overflow: hidden;

    .title {
        width: 80%;
        margin: 0 auto 20px auto;
    }

    .scrollable-element {
        $scrollableElementPadding: 20px;

        width: calc(80% - $scrollableElementPadding * 2);
        margin: 0 10%;
        padding: $scrollableElementPadding;
        overflow-y: scroll;

        display: flex;
        flex-direction: column;
        gap: 25px;

        border: 1px solid black;
        border-radius: 15px;
    }
}
</style>
