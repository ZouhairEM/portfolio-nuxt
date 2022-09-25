<template>
    <div>
        <h1 class="font-bold text-8xl text-white">
            Zouhair <br />
        </h1>
        <h2 class="font-bold text-7xl my-5 text-white">
            El-Mariami
        </h2>
        <h3 class="font-medium text-2xl text-white my-5">
            A <span class="text-grey">frontend developer</span> with {{ currentYear - 2017 }} years of experience. <br />
        </h3>
    </div>
</template>

<script>
export default {
  name: 'BioBlock',
  props: {
    currentYear: {
      type: Number,
      default: () => {
        return Number
      }
    }
  }
}
</script>
