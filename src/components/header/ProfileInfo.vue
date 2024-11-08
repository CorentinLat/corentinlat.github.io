<template>
    <section class="profile-info-container">
        <section class="left-container">
            <section class="content">
                <img class="profile-picture" src="/img/me.jpeg" alt="Profile picture" />

                <article class="networks">
                    <a
                        href="https://scholar.google.com/citations?user=9WmHiqQAAAAJ"
                        target="_blank"
                    >
                        <VIcon name="ai-google-scholar-square" scale="2" />
                    </a>
                    <a
                        href="https://github.com/CorentinLat"
                        target="_blank"
                    >
                        <VIcon name="bi-github" scale="2" />
                    </a>
                    <a
                        href="https://scholar.google.com/citations?user=9WmHiqQAAAAJ"
                        target="_blank"
                    >
                        <VIcon name="bi-linkedin" scale="2" />
                    </a>
                </article>
            </section>
        </section>

        <section class="right-container">
            <article class="content">
                <h1>Corentin Latappy</h1>
                <p class="position">
                    Post-Doctoral Researcher @
                    <a href="https://se.labri.fr" target="_blank">Progress</a>
                    in
                    <a href="https://www.labri.fr" target="_blank">LaBRI</a>
                </p>


                <a class="location" href="https://maps.app.goo.gl/A2wMCdpyreTdKfcm9" target="_blank">
                    <VIcon name="hi-location-marker" />
                    LaBRI - Université de Bordeaux
                </a>
                <a class="email" href="mailto:corentin.latappy@labri.fr">
                    <VIcon name="md-email-outlined" />
                    corentin.latappy@labri.fr
                </a>
            </article>
        </section>
    </section>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.profile-info-container {
    height: 100%;
    width: 100%;

    display: flex;
    gap: 40px;

    .left-container, .right-container {
        width: 50%;
        display: flex;
        align-items: center;

        .content {
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }

    .left-container {
        justify-content: flex-end;

        .content {
            $profilePictureMarginY: 10px;
            $contentGap: 10px;
            $networksHeight: 38px;

            width: fit-content;
            gap: $contentGap;

            .profile-picture {
                height: calc(100% - #{$networksHeight + $contentGap + 2 * $profilePictureMarginY});
                margin: $profilePictureMarginY 0;
                border-radius: 50%;
            }

            .networks {
                height: $networksHeight;
                display: flex;
                gap: 20px;

                a {
                    color: #f2f2f2;

                    &:hover { color: #a0a0a0; }
                }
            }
        }
    }

    .right-container {
        justify-content: flex-start;

        .content {
            align-items: flex-start;

            .position { font-size: 1.4rem; }
            .location {
                color: unset;
                margin-top: 20px;
            }
            .email { margin-top: 5px; }
        }
    }
}
</style>
