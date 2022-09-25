<template>
    <li class="text-white">
      <img :src="require(`@/assets/img/icons/${skill.icon}`)" width="25" :alt="skill.skill" class="ml-20 col-span-1 shadow-2xl ">
        <span class="">
            {{skill.skill}}
        </span>
    </li>
</template>

<script>
export default {
  name: 'SkillSet',
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
