<template>
    <section :id="anchor" class="content-section">
        <h1 v-if="title" class="title">{{ title }}</h1>

        <section class="content-element">
            <slot />
        </section>
    </section>
</template>

<script setup lang="ts">
defineProps<{ anchor: string; title?: string }>();
</script>

<style lang="scss" scoped>
@mixin contentElementSize($contentElementWidth, $contentElementPadding) {
    width: calc($contentElementWidth - $contentElementPadding * 2);
    margin: 0 calc((100% - $contentElementWidth) / 2);
    padding: 10px $contentElementPadding;
}

.content-section {
    display: flex;
    flex-direction: column;
    margin: 20px;
    overflow: hidden;

    .title {
        width: 80%;
        margin: 0 auto 10px auto;
    }

    .content-element {
        @include contentElementSize(80%, 20px);
        display: flex;
        flex-direction: column;
        gap: 20px;

        border-radius: 15px;
    }
}

@media only screen and (max-width: 1024px) {
    .content-section {
        margin: 10px;

        .title {
            width: 100%;
            margin-bottom: 10px;
        }

        .content-element {
            @include contentElementSize(100%, 10px);
        }
    }
}
</style>
