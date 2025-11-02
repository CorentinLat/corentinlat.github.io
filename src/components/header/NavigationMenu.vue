<template>
    <section class="navigation-menu-container">
        <ul id="myMenu">
            <li>
                <a href="#bio">
                    <span class="big-screen">Bio</span>
                    <VIcon class="small-screen" name="fa-user" scale="1.2" />
                </a>
            </li>
            <li>
                <a href="#publications">
                    <span class="big-screen">Publications</span>
                    <VIcon class="small-screen" name="fa-book-reader" scale="1.2" />
                </a>
            </li>
            <li>
                <a href="#teaching">
                    <span class="big-screen">Teaching</span>
                    <VIcon class="small-screen" name="fa-chalkboard-teacher" scale="1.2" />
                </a>
            </li>
            <li>
                <a href="#projects">
                    <span class="big-screen">Projects</span>
                    <VIcon class="small-screen" name="fa-laptop-code" scale="1.2" />
                </a>
            </li>
        </ul>
    </section>
</template>

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
            a {
                color: #f2f2f2;

                &:hover {
                    color: #a0a0a0;
                }
            }
        }

        .small-screen {
            display: none;
        }
    }
}

@media only screen and (max-width: 1024px) {
    .navigation-menu-container {
        #myMenu {
            .big-screen { display: none; }
            .small-screen { display: block; }
        }
    }
}
</style>
