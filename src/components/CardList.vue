<template>
  <div class="overflow-x-scroll whitespace-no-wrap pb-8">
    <card
      v-for="(visite, index) in visites"
      :key="`visite-${index}`"
      :title="visite.title"
      :price="visite.price"
      :nbr="visite.nbr"
      :place="visite.place"
    />
  </div>
</template>

<script>
import CardComponent from "./CardComponent";

export default {
  data() {
    return {
      visites: [
        {
          title: "Ballade urbaine à travers les âges",
          price: 29,
          nbr: 42,
          place: 12
        },
        {
          title: "Ballade urbaine à travers les âges",
          price: 29,
          nbr: 42,
          place: 12
        },
        {
          title: "Ballade urbaine à travers les âges",
          price: 29,
          nbr: 42,
          place: 12
        },
        {
          title: "Ballade urbaine à travers les âges",
          price: 29,
          nbr: 42,
          place: 12
        }
      ]
    };
  },
  components: {
    card: CardComponent
  }
};
</script>
