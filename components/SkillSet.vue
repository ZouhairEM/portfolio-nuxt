<template>
    <li class="text-white shadow-inner">
      <img :src="require(`@/assets/img/icons/${skill.icon}`)" width="30" :alt="skill.skill" class="ml-20 col-span-1 shadow-2xl opacity-80">
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
