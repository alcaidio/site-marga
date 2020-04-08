<template>
  <div class="bg-white border rounded-lg text-gray-900 cursor-pointer shadow-md mr-4">
    <div class="p-6">
      <g-link class="text-gray-800 hover:text-gray-700" :to="link">
        <div class="flex items-baseline">
          <div class="text-gray-600 uppercase text-xs font-semibold tracking-wide">{{ date }}</div>
        </div>
        <h4 class="mt-2 font-semibold text-lg leading-tight hover:opacity-75">{{ title }}</h4>
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
    link: String,
    date: String
  }
};
</script>
