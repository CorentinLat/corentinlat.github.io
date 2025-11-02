<template>
    <main>
        <MyBio />
        <hr>
        <MyPublications />
        <hr>
        <MyTeachings />
        <hr>
        <MyProjects />
    </main>
</template>

<script lang="ts" setup>
import MyBio from '@/components/main/MyBio.vue';
import MyProjects from '@/components/main/MyProjects.vue';
import MyPublications from '@/components/main/MyPublications.vue';
import MyTeachings from '@/components/main/MyTeachings.vue';
</script>

<style lang="scss" scoped>
main {
    overflow: auto;
}

hr {
    border-width: 0.5px;
    margin-left: 10%;
    margin-right: 10%;

    @media only screen and (max-width: 1024px) {
        margin-left: 20px;
        margin-right: 20px;
    }
}
</style>
