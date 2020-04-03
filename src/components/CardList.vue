<template>
  <div class="overflow-x-scroll whitespace-no-wrap pb-8">
    <card
      v-for="(visite, index) in visites"
      :key="`visite-${index}`"
      :title="visite.title"
      :price="visite.price"
      :nbr="visite.nbr"
      :place="visite.place"
      :image="visite.image"
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
          place: 12,
          image:
            "https://st.depositphotos.com/2665689/4700/i/600/depositphotos_47005213-stock-photo-place-de-comedie-in-montpellier.jpg"
        },
        {
          title: "Ballade urbaine à travers les âges",
          price: 29,
          nbr: 42,
          place: 12,
          image:
            "https://st.depositphotos.com/2665689/4700/i/600/depositphotos_47005213-stock-photo-place-de-comedie-in-montpellier.jpg"
        },
        {
          title: "Ballade urbaine à travers les âges",
          price: 29,
          nbr: 42,
          place: 12,
          image:
            "https://st.depositphotos.com/2665689/4700/i/600/depositphotos_47005213-stock-photo-place-de-comedie-in-montpellier.jpg"
        },
        {
          title: "Ballade urbaine à travers les âges",
          price: 29,
          nbr: 42,
          place: 12,
          image:
            "https://st.depositphotos.com/2665689/4700/i/600/depositphotos_47005213-stock-photo-place-de-comedie-in-montpellier.jpg"
        }
      ]
    };
  },
  components: {
    card: CardComponent
  }
};
</script>
