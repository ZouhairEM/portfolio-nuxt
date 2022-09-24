<template>
    <div id="app" class="relative screen h-screen">
        <NavBar />
        <div class="container mx-auto">
            <Nuxt />
        </div>
    </div>
</template>

<script>
export default {
  name: 'Default'
}
</script>

<style>
body {
    margin: 0;
    padding: 0;
    background: #011627;
}

#app {
    min-width: 320px;
}
</style>
