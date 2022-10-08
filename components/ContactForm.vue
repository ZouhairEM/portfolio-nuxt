<template>
        <form action="POST" data-netlify="true">
            <div class="flex flex-col gap-2 justify-between">
                <div class="flex flex-col gap-2 sm:flex-row">
                    <input type="text" name="name" placeholder="Your name"
                        class="text-black p-2 rounded shadow opacity-80 bg-primary-300 border border-lightBlue active:border-lightBlue focus:border-lightBlue outline:border-lightBlue">
                    <input type="text" name="email" placeholder="Your email"
                        class="text-black p-2 rounded shadow opacity-80 bg-primary-300 border border-lightBlue active:border-lightBlue focus:border-lightBlue outline:border-lightBlue">
                </div>
                <textarea id="message" name="message" placeholder="Your message"
                    class="text-black rounded shadow opacity-80 p-2 bg-primary-300 border border-lightBlue active:border-lightBlue focus:border-lightBlue outline:border-lightBlue w-full">
                </textarea>
            </div>
        </form>
</template>

<script>
export default {
  name: 'ContactForm'
}
</script>
