<template>
    <FullScreenSection>
        <article class="my-bio-content">
            <p>
                I am a Post-Doctoral Researcher in the <a href="https://se.labri.fr" target="_blank">Progress</a> team at the <a href="https://www.labri.fr" target="_blank">LaBRI</a> (Bordeaux, France).
            </p>

            <p>
                I obtained my MSc. in Computer Science at the <a href="https://www.u-bordeaux.fr" target="_blank">University of Bordeaux</a>, where I ended with an internship at <a href="https://packmind.com" target="_blank">Packmind</a> to follow my quest to become developer.
                However, I had the opportunity to pursue in the same company by realizing an industrial thesis in collaboration with the <a href="https://www.labri.fr" target="_blank">LaBRI</a>.
            </p>

            <p>
                Three years later, I obtained my PhD, still at the <a href="https://www.u-bordeaux.fr" target="_blank">University of Bordeaux</a>, and I finally chose to chase an unexpected new quest as researcher.
                But, my passion for tools development remains a side one.
            </p>
        </article>

        <article>
            <p>My main research topics are:</p>
            <ul>
                <li>
                    Software quality
                    <ul>
                        <li>Coding practices and their documentation</li>
                        <li>Static Analysis Tools, Linters</li>
                    </ul>
                </li>
                <li>Software evolution</li>
            </ul>
        </article>
    </FullScreenSection>
</template>

<script setup lang="ts">
import FullScreenSection from '@/components/layout/FullScreenSection.vue';
</script>

<style scoped>
.my-bio-content {
    p {
        margin: 10px 0;
    }
}
</style>
