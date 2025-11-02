<template>
    <ContentSection anchor="bio">
        <article class="my-bio-content">
            <p>
                I am a Research Engineer in the <a href="https://www.rhoban.com/" target="_blank">Rhoban</a> team at
                the <a href="https://www.labri.fr" target="_blank">LaBRI</a> (Bordeaux, France).
            </p>

            <p>
                I obtained my MSc. in Computer Science at the <a href="https://www.u-bordeaux.fr" target="_blank">University of Bordeaux</a>, where I ended with an internship at <a href="https://packmind.com" target="_blank">Packmind</a> to follow my quest to become a software developer.
                However, I had the opportunity to pursue in the same company by realizing an industrial thesis in collaboration with the <a href="https://www.labri.fr" target="_blank">LaBRI</a>.
                Three years later, I obtained my PhD, still at the <a href="https://www.u-bordeaux.fr" target="_blank">University of Bordeaux</a>
            </p>

            <p>
                I finally chose to chase an unexpected new quest in the research field, first as a Post-Doctoral Researcher and now as a Research Engineer.
                But, my passion for tools development remains a side one.
            </p>
        </article>
    </ContentSection>
</template>

<script setup lang="ts">
import ContentSection from '@/components/layout/ContentSection.vue';
</script>

<style scoped>
.my-bio-content {
    p {
        margin: 10px 0;
        text-align: justify;
    }
}
</style>
