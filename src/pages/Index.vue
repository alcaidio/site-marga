<template>
  <Layout>
    <div
      class="h-screen container-inner-large mx-auto flex flex-col sm:flex-row justify-around py-24"
    >
      <div class="font-bold w-full sm:w-3/5 text-center sm:text-left">
        <h1
          class="font-semibold text-gray-900 font-display text-4xl sm:text-5xl lg:text-6xl leading-none font-semibold"
        >Offrez vous une guide d'élite</h1>
        <h2
          class="text-pink-500 text-xl lg:text-3xl mt-3"
        >Et percez les secret de la région occitanie</h2>
        <div class="text-gray-700 mt-4 leading-relaxed font-light text-lg lg:text-xl">
          Nam luctus, ligula sit amet lacinia congue, quam odio rhoncus ipsum,
          at aliquam metus risus nec erat. Duis dignissim quis libero sit amet
          fermentum.
        </div>
        <div class="mt-6">
          <button
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <svg
              class="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Plus d'info</span>
          </button>
          <button
            class="ml-3 bg-pink-300 hover:bg-pink-400 hover:text-white text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <svg
              class="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Reserver maintenant</span>
          </button>
        </div>
      </div>
      <div class="flex-1">
        <g-image src="../../static/travel.png" alt="hero" />
      </div>
    </div>
    <!-- end hero -->

    <div class="overflow-x-hidden bg-background-secondary" id="blog">
      <div class="container-inner-large mx-auto text-xl py-24">
        <div class="mb-12">
          <h2
            class="font-semibold text-gray-900 font-display text-3xl sm:text-5xl lg:text-5xl leading-none font-semibold"
          >Les circuits touristiques</h2>
          <p
            class="text-gray-600 text-xl lg:text-2xl"
          >Lorem ipsum dolor sit lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div class="overflow-x-scroll whitespace-no-wrap pb-8">
          <card
            title="Ballade urbaine à travers les âges"
            price="29"
            nbr="42"
            place="12"
            image="https://st.depositphotos.com/2665689/4700/i/600/depositphotos_47005213-stock-photo-place-de-comedie-in-montpellier.jpg"
          />
          <card
            title="Ballade urbaine à travers les âges"
            price="29"
            nbr="42"
            place="12"
            image="https://st.depositphotos.com/2665689/4700/i/600/depositphotos_47005213-stock-photo-place-de-comedie-in-montpellier.jpg"
          />
          <card
            title="Ballade urbaine à travers les âges"
            price="29"
            nbr="42"
            place="12"
            image="https://st.depositphotos.com/2665689/4700/i/600/depositphotos_47005213-stock-photo-place-de-comedie-in-montpellier.jpg"
          />
          <card
            title="Ballade urbaine à travers les âges"
            price="29"
            nbr="42"
            place="12"
            image="https://st.depositphotos.com/2665689/4700/i/600/depositphotos_47005213-stock-photo-place-de-comedie-in-montpellier.jpg"
          />
        </div>
      </div>
    </div>

    <div
      class="overflow-x-hidden container-inner mx-auto text-xl border-gray-200 border-b py-24"
      id="about"
    >
      <h2
        class="font-semibold text-gray-900 font-display text-3xl sm:text-5xl lg:text-5xl leading-none font-semibold"
      >Margareth Alcaide</h2>
      <p
        class="text-gray-600 text-xl lg:text-2xl"
      >Guide touristique lorem ipsum dolor sit amet consectetur.</p>
      <div class="flex flex-row items-center mt-12">
        <div class="font-bold w-full sm:w-3/5 sm:text-left">
          <g-image
            src="../../static/marga.jpg"
            alt="avatar"
            class="w-48 mx-auto sm:mx-0 rounded-lg shadow-lg mx-auto sm:mx-0 rounded-xl mb-8 lg:mb-0 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
          />
        </div>
        <div class="text-lg sm:text-xl ml-12 leading-relaxed">
          <p class="mb-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quae
            architecto minus molestias iusto ducimus fuga quo quia libero
            dignissimos, fugiat modi assumenda debitis laboriosam.
          </p>
          <p class="mb-3">
            Eum quae architecto minus molestias iusto ducimus fuga quo quia
            libero, fugiat modi assumenda debitis laboriosam.
          </p>
          <p>
            Eum quae architecto minus molestias iusto ducimus fuga quo quia
            libero, fugiat modi assumenda debitis laboriosam.
          </p>
        </div>
      </div>
      <div class="flex justify-between items-center py-6">
        <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0">
          <g-image src="../../static/finish.png" alt="finish" />
        </div>
        <div class="w-1/2 px-8 hidden sm:flex justify-end">
          <g-image src="../../static/business.png" alt="business" />
        </div>
      </div>
      <p class="text-lg sm:text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas
        ultrices velit, et aliquam tellus rhoncus eu. Nullam vulputate mauris
        libero, eu ornare lacus pharetra et. Curabitur vel scelerisque elit.
        Fusce eget aliquet diam. Suspendisse potenti.
      </p>
      <div class="responsive-container mt-8">
        <iframe
          class="responsive-iframe w-full h-full top-0 left-0 border-0"
          src="https://www.youtube.com/embed/ZIgya1ADwas"
          style="border:0;"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <!-- end get-to-know me -->

    <div class="overflow-x-hidden bg-background-secondary py-24" id="testimonial">
      <div class="container-inner-large mx-auto text-xl">
        <div class="text-center">
          <h2
            class="font-semibold text-gray-900 font-display text-3xl sm:text-5xl lg:text-5xl leading-none font-semibold"
          >Ce qu'ils en pensent</h2>
          <p class="text-gray-600 text-xl lg:text-2xl">
            Duis dignissim quis libero sit amet fermentum, ligula sit amet lacinia
            congue.
          </p>
        </div>
        <div class="flex flex-col md:flex-row items-center mt-4">
          <testimonial
            class="mt-8 mr-6"
            name="Justin Jackson"
            text="“We’ve gone through several iterations of our pricing page recently, and every time we wanted to try a new idea I was able to find the perfect starting point in Tailwind UI.”"
            image="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          />
          <testimonial
            class="mt-8 mr-6"
            name="Justin Jackson"
            text="“We’ve gone through several iterations of our pricing page recently, and every time we wanted to try a new idea I was able to find the perfect starting point in Tailwind UI.”"
            image="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          />
          <testimonial
            class="mt-8 mr-6"
            name="Justin Jackson"
            text="“We’ve gone through several iterations of our pricing page recently, and every time we wanted to try a new idea I was able to find the perfect starting point in Tailwind UI.”"
            image="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          />
        </div>
      </div>
    </div>

    <!-- Pricing section  -->
    <pricing />
    <!-- End pricing section -->
  </Layout>
</template>

<script>
import CardComponent from "../components/CardComponent";
import TestimonialComponent from "../components/TestimonialComponent";
import PricingComponent from "../components/PricingComponent";
export default {
  metaInfo: {
    title: "Home"
  },
  components: {
    card: CardComponent,
    testimonial: TestimonialComponent,
    pricing: PricingComponent
  }
};
</script>
