<template>
  <div
    class="w-80 md:w-max inline-block bg-white border rounded-lg overflow-hidden text-gray-900 cursor-pointer shadow-md mr-4"
  >
    <div class="h-64">
      <g-image :src="image" class="h-64 w-full max-w-sm object-cover" />
    </div>
    <div class="p-6">
      <g-link
        class="text-gray-800 hover:text-gray-700 overflow-hidden"
        :to="link"
      >
        <div class="flex items-baseline">
          <span
            v-if="tag"
            class="inline-block bg-pink-300 text-pink-700 text-xs px-2 rounded-full font-semibold uppercase mr-2"
            >{{ tag }}</span
          >
          <div
            class="text-gray-600 uppercase text-xs font-semibold tracking-wide"
          >
            {{ place }} places
          </div>
        </div>
        <h4 class="mt-2 font-semibold text-lg leading-tight hover:opacity-75">
          {{ title }}
        </h4>
        <div class="text-base" v-if="price">
          Journée entière &bull;
          {{ price }} €
          <span class="text-gray-600 text-sm">/ pers</span>
        </div>
        <div class="mt-3">
          <div class="flex items-center">
            <svg
              v-for="n in star"
              :key="n"
              viewBox="0 0 24 24"
              class="text-pink-600 h-4 w-4 fill-current"
            >
              <path
                d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"
              />
            </svg>
            <svg
              v-for="n in (5 - star)"
              :key="n"
              viewBox="0 0 24 24"
              class="text-gray-400 h-4 w-4 fill-current"
            >
              <path
                d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"
              />
            </svg>

            <span class="text-gray-600 text-sm ml-2"
              >(basée sur {{ nbr }} votes)</span
            >
          </div>
        </div>
      </g-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    title: String,
    price: String,
    nbr: String,
    place: String,
    image: String,
    tag: String,
    link: String,
    star: Number,
  },
  components: {},
};
</script>

<style>
/* .zoom img {
  transform-origin: 50% 50%;
  transition: transform 1s, filter 2s ease-in-out;
  filter: brightness(120%);
}

.zoom:hover img {
  filter: brightness(100%);
  transform: scale(1.35);
} */
</style>
