<template>
    <li class="flex text-grey">
        <img :src="require(`@/assets/img/icons/${skill.icon}`)" :alt="skill.skill" class="mr-4">
        <span>
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
