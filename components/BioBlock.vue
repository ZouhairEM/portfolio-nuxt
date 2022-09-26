<template>
    <div>
        <h5 class="text-sm text-lightBlue">Hi, my name is</h5>
        <h1 class="font-bold text-8xl text-white">
            Zouhair
        </h1>
        <h2 class="font-bold text-7xl text-white">
          El-Mariami
        </h2>
        <h3 class="font-medium text-2xl text-white my-5">
            <span class="opacity-80">
              A
            </span>
            <span class="text-lightBlue">frontend developer</span>
            <span class="opacity-80">
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
