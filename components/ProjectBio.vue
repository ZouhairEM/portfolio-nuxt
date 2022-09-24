<template>
    <div class="max-w-xs rounded-2xl text-white bg-secondary-300 p-5 shadow-xl">
        <p class="text-white py-5">{{ data.title }}</p>
        <img :src="require(`@/assets/img/${data.img}`)" alt="Pokemon project" class="rounded-2xl shadow-inner max">
        <p class="text-white py-5">{{ data.description }}</p>
        <div class="py-2">
            <a :href="data.repo" target="_blank"
                class="text-white bg-primary-300 hover:bg-secondary-300 p-2 px-3 rounded-lg border border-secondary-100 mr-2">Github</a>
            <a :href="data.live" target="_blank"
                class="text-white bg-primary-100 hover:bg-secondary-300 p-2 px-3 rounded-lg border border-primary-100">Live
                Demo</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProjectBio",
    props: {
        data: Object,
        required: true
    }
}
</script>