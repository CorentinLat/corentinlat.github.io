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
@mixin scrollableElementSize($scrollableElementWidth, $scrollableElementPadding, $borderWidth) {
    width: calc($scrollableElementWidth - $scrollableElementPadding * 2 - $borderWidth * 2);
    margin: 0 calc((100% - $scrollableElementWidth) / 2);
    padding: $scrollableElementPadding;
    border: $borderWidth solid black;
}

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
        @include scrollableElementSize(80%, 20px, 1px);
        overflow-y: scroll;

        display: flex;
        flex-direction: column;
        gap: 25px;

        border-radius: 15px;
    }
}

@media only screen and (max-width: 1024px) {
    .full-screen-section-component {
        margin: 10px;

        .title {
            width: 100%;
            margin-bottom: 10px;
        }

        .scrollable-element {
            @include scrollableElementSize(100%, 10px, 1px);
        }
    }
}
</style>
