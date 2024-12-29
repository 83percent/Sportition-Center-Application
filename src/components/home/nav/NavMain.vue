<script setup>

</script>

<template>
    <nav>
        <div class="logo-container">
            <h1>SPORTITION</h1>
        </div>
        <div class="nav-container">
            <i class="material-icons">menu</i>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
nav {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    padding: 0.85rem 1rem;
    width: 100%;
    z-index: 99;
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.8) 50%);

    > .logo-container {
        flex-grow: 1;
        padding-left: 0.3rem;
        > h1 {
            color: var(--color-main-red);
            font-size: 1.4rem;
            font-weight: 700;
        }
    }
    > .nav-container {
        padding-top: 0.3rem;
        > i {
            font-size: 1.8rem;
        }
    }
}
</style>

