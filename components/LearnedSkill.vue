<template>
    <li class="grid grid-cols-5 text-white shadow-inner">
        <img :src="'http://localhost:1337'" width="30" :alt="skill" class="ml-auto col-span-2 shadow-2xl opacity-80">
        <span class="grid-cols-5"> {{ skill }}</span>
    </li>
</template>

<script>
export default {
  name: 'LearnedSkill',
  props: {
    skill: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>
