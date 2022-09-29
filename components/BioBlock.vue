<template>
    <div>
        <h5 class="text-sm text-lightBlue">Hi, my name is</h5>
        <h1 class="font-bold text-6xl sm:text-8xl text-white">
            Zouhair
        </h1>
        <h2 class="font-bold text-5xl sm:text-7xl text-white">
          El-Mariami
        </h2>
        <h3 class="font-medium text-2xl text-white my-10 sm:my-5">
            <span>
              A
            </span>
            <span class="text-lightBlue">frontend developer</span>
            <span class="block sm:inline">
              with {{ currentYear - 2017 }} years of experience.
            </span>
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
