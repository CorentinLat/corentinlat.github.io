<template>
    <section class="navigation-menu-container">
        <ul id="myMenu">
            <li data-menuanchor="bio" class="active">
                <a href="#bio">Bio</a>
            </li>
            <li data-menuanchor="publications">
                <a href="#publications">Publications</a>
            </li>
            <li data-menuanchor="teaching">
                <a href="#teaching">Teaching</a>
            </li>
            <li data-menuanchor="personalProjects">
                <a href="#personalProjects">Personal Projects</a>
            </li>
        </ul>
    </section>
</template>

<script lang="ts">
</script>

<style lang="scss" scoped>
.navigation-menu-container {
    display: flex;
    align-items: flex-end;

    #myMenu {
        margin: 0;
        padding: 0;

        display: flex;
        gap: 40px;

        font-weight: bold;
        list-style-type: none;

        li {
            &.active {
                a {
                    text-decoration: underline;
                }
            }

            a {
                color: #f2f2f2;

                &:hover { color: #a0a0a0; }
            }
        }
    }
}
</style>
