<template>
    <form>
        <div class="flex justify-between">
            <label for="name" class="text-white">Name:
                <input type="text" for="name"
                    class="px-2 py-1 mt-2 block rounded shadow opacity-80 bg-primary-300 border border-lightBlue active:border-lightBlue focus:border-lightBlue outline:border-lightBlue">
            </label>
            <label for="name" class="text-white">Email:
                <input type="text" for="name"
                    class="px-2 py-1 mt-2 block rounded shadow opacity-80 bg-primary-300 border border-lightBlue active:border-lightBlue focus:border-lightBlue outline:border-lightBlue">
            </label>
        </div>
        <label for="message" class="text-white">Message:
            <textarea id="message" name
                class="mt-2 block rounded shadow opacity-80 p-2 bg-primary-300 border border-lightBlue active:border-lightBlue focus:border-lightBlue outline:border-lightBlue"
                rows="4" cols="50">
            </textarea>
        </label>
        <div>
            <a href="#" target="_blank"
                class="rounded-lg border border-tertiary-300 bg-primary-300 p-2 px-3 text-white hover:bg-lightBlue">
                Send
            </a>
        </div>
    </form>
</template>

<script>
export default {
  name: 'ContactForm'
}
</script>
