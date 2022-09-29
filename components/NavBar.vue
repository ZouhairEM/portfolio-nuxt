<template>
    <nav class="text-lightBlue p-2 border-t border-lines border-lightBlue">
        <div class="block sm:hidden absolute">
            <button @click="closed = !closed" class="flex items-center px-3 rounded">
                <svg v-if="closed" height="48" width="48" fill="white">
                    <path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z" />
                </svg>
                <svg v-else height="48" width="48" fill="white">
                    <path
                        d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" />
                </svg>
            </button>
        </div>
        <ul
            class="flex container flex-col sm:flex-row h-screen sm:h-auto text-center items-center justify-center sm:flex" :class="{'hidden': closed }">
            <NuxtLink to="#about">
                <li class="cursor-pointer mr-0 sm:mr-10 p-2 text-lightBlue hover:text-white">
                    About
                </li>
            </NuxtLink>
            <NuxtLink to="#skills">
                <li class="cursor-pointer mr-0 sm:mr-10 p-2 text-lightBlue hover:text-white">
                    Skills
                </li>
            </NuxtLink>
            <NuxtLink to="#work" class="mr-0 sm:mr-auto">
                <li class="cursor-pointer p-2 text-lightBlue hover:text-white">
                    Work
                </li>
            </NuxtLink>
            <div v-for="(item, i) in resume.data" :key="i">
                <a :href="'http://localhost:1337' + item.attributes.cv.data.attributes.url" target="_blank">
                    <li
                        class="cursor-pointer px-2 py-1 m-1 bg-white rounded shadow text-primary-300 font-bold hover:bg-primary-300 hover:text-white">
                        Resume
                    </li>
                </a>
            </div>
        </ul>
    </nav>
</template>

<script>
import axios from 'axios'
export default {
  name: 'NavBar',
  data () {
    return {
      closed: true,
      resume: {}
    }
  },
  async mounted () {
    const resumeRes = await axios.get('http://localhost:1337/api/cvs?populate=*')
    this.resume = resumeRes.data
  }
}
</script>
