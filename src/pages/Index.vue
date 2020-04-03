<template>
  <Layout>
    <div
      class="h-auto container-inner-large mx-auto flex flex-col sm:flex-row justify-around py-24"
    >
      <div class="font-bold w-full sm:w-3/5 text-center sm:text-left">
        <h1
          class="font-semibold text-gray-900 font-display text-4xl sm:text-5xl lg:text-6xl leading-none font-semibold"
        >
          Laissez vous guider
        </h1>
        <h2 class="text-pink-500 text-xl lg:text-3xl mt-3">
          Et percez les secrets de la région Occitanie jusqu'à la Provence
        </h2>
        <div
          class="text-gray-700 mt-4 leading-relaxed font-light text-lg lg:text-xl"
        >
          Visitez des .
        </div>
        <div class="mt-6 pb-3">
          <button
            v-if="$route.path === '/'"
            href="/#about"
            v-scroll-to="'#about'"
            class="mr-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <span>Plus d'info</span>
          </button>
          <button
            class="bg-pink-200 hover:bg-pink-400 hover:text-white text-pink-500 font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <span>Reserver maintenant</span>
            <svg
              class="fill-current w-4 h-4 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M1 3.995C1 2.893 1.893 2 2.995 2h14.01C18.107 2 19 2.893 19 3.995v14.01A1.995 1.995 0 0117.005 20H2.995A1.995 1.995 0 011 18.005V3.995zM3 6h14v12H3V6zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"
                fill-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="flex-1">
        <g-image src="../../static/travel.png" alt="hero" />
      </div>
    </div>
    <!-- end hero -->

    <div class="overflow-x-hidden bg-background-secondary" id="visites">
      <div class="container-inner-large mx-auto text-xl pt-24 pb-12">
        <div class="mb-12">
          <h2
            class="font-semibold text-gray-900 font-display text-3xl sm:text-5xl lg:text-5xl leading-none font-semibold"
          >
            Les circuits touristiques
          </h2>
          <p class="text-gray-600 text-xl lg:text-2xl">
            Partez à la découverte du patrimoine culturel et historique.
          </p>
        </div>
        <div class="overflow-x-scroll whitespace-no-wrap pb-8">
          <card
            title="Nîmes et le Pont du Gard"
            price="39"
            nbr="12"
            place="20"
            image="https://upload.wikimedia.org/wikipedia/commons/6/67/Arenes_de_Nimes_panorama.jpg"
          />
          <card
            title="Montpellier historique et contemporaine"
            price="29"
            nbr="44"
            place="20"
            image="https://st.depositphotos.com/2665689/4700/i/600/depositphotos_47005213-stock-photo-place-de-comedie-in-montpellier.jpg"
          />
          <card
            title="Aigues-Mortes et la petite Camargue"
            price="39"
            nbr="14"
            place="15"
            image="https://c1.wallpaperflare.com/preview/12/908/45/ramparts-aigues-mortes-france-acute-dead.jpg"
          />
          <card
            title="Saint Guilhem le desert, pont du diable"
            price="45"
            nbr="9"
            place="15"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Abbaye_st_guilhem_1.jpg/800px-Abbaye_st_guilhem_1.jpg"
          />
          <card
            title="Sète et le bassin de Thau"
            price="45"
            nbr="17"
            place="15"
            image="https://live.staticflickr.com/5637/31165684325_6cacb69e69_b.jpg"
          />
          <card
            title="Arles et la Camargue"
            price="45"
            nbr="17"
            place="15"
            image="https://upload.wikimedia.org/wikipedia/commons/2/23/Arles_Place_de_la_R%C3%A9publique.jpg"
          />
          <card
            title="Avignon et la cité des papes"
            price="45"
            nbr="17"
            place="15"
            image="https://www.publicdomainpictures.net/pictures/220000/velka/the-popes-palace-in-avignon.jpg"
          />
          <card
            title="Les Baux et Saint Rémy"
            price="45"
            nbr="11"
            place="15"
            image="https://upload.wikimedia.org/wikipedia/commons/f/f0/Les_Baux-de-Provence_Ch%C3%A2teau_des_Baux_by_Yuan_Hsueh.jpg"
          />
          <card
            title="Uzès et le Pont du Gard"
            price="45"
            nbr="14"
            place="15"
            image="https://upload.wikimedia.org/wikipedia/commons/3/30/Pont_du_Gard%2C_Languedoc-Roussillon%2C_France_%283679125855%29.jpg"
          />
          <card
            title="Le canal du midi"
            price="45"
            nbr="8"
            place="15"
            image="https://img-4.linternaute.com/xqTh4t0oXiTJFuyNNzbeLpPJNXY=/fit-in/620x/smart/5c284e199a27490484e73349a9cd23cc/ccmcms-linternaute/11577260.jpg"
          />
          <card
            title="Le pic Saint Loup et ses villages"
            price="29"
            nbr="31"
            place="20"
            image="https://www.chateau-laroque.fr/wp-content/uploads/2016/06/laroquedupic1-600x300.jpg"
          />
          <card
            title="Carcassone la cité médiévale"
            price="59"
            nbr="3"
            place="15"
            image="https://upload.wikimedia.org/wikipedia/commons/3/34/La_Cit%C3%A9_de_Carcassonne_%2826422085310%29.jpg"
          />
        </div>
        <div class="pb-6 pt-2 text-gray-500 font-medium text-sm">
          * Les prix et le nombre de places disponibles sont à titre indicatif.
        </div>
      </div>
    </div>

    <section class="bg-white border-b py-12">
      <div
        class="container mx-auto flex flex-wrap items-center justify-between"
      >
        <div
          class="flex flex-1 flex-wrap max-w-4xl mx-auto items-center justify-between text-xl text-gray-500 font-bold opacity-75"
        >
          <span class="w-1/2 p-4 md:w-auto flex items-center"
            ><svg
              class="h-10 w-10 mr-4 fill-current text-gray-500 opacity-75"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M7 0H6L0 3v6l4-1v12h12V8l4 1V3l-6-3h-1a3 3 0 0 1-6 0z" />
            </svg>
            TeeShirtz</span
          >

          <span class="w-1/2 p-4 md:w-auto flex items-center"
            ><svg
              class="h-10 w-10 mr-4 fill-current text-gray-500 opacity-75"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M15.75 8l-3.74-3.75a3.99 3.99 0 0 1 6.82-3.08A4 4 0 0 1 15.75 8zM1.85 15.3l9.2-9.19 2.83 2.83-9.2 9.2-2.82-2.84zm-1.4 2.83l2.11-2.12 1.42 1.42-2.12 2.12-1.42-1.42zM10 15l2-2v7h-2v-5z"
              />
            </svg>
            Mic.Check</span
          >

          <span class="w-1/2 p-4 md:w-auto flex items-center"
            ><svg
              class="h-10 w-10 mr-4 fill-current text-gray-500 opacity-75"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 12a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-3a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm4 2.75V20l-4-4-4 4v-8.25a6.97 6.97 0 0 0 8 0z"
              />
            </svg>
            BadgeLife.io</span
          >

          <span class="w-1/2 p-4 md:w-auto flex items-center"
            ><svg
              class="h-10 w-10 mr-4 fill-current text-gray-500 opacity-75"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M15.3 14.89l2.77 2.77a1 1 0 0 1 0 1.41 1 1 0 0 1-1.41 0l-2.59-2.58A5.99 5.99 0 0 1 11 18V9.04a1 1 0 0 0-2 0V18a5.98 5.98 0 0 1-3.07-1.51l-2.59 2.58a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41l2.77-2.77A5.95 5.95 0 0 1 4.07 13H1a1 1 0 1 1 0-2h3V8.41L.93 5.34a1 1 0 0 1 0-1.41 1 1 0 0 1 1.41 0l2.1 2.1h11.12l2.1-2.1a1 1 0 0 1 1.41 0 1 1 0 0 1 0 1.41L16 8.41V11h3a1 1 0 1 1 0 2h-3.07c-.1.67-.32 1.31-.63 1.89zM15 5H5a5 5 0 1 1 10 0z"
              />
            </svg>
            Bugz 4 Life</span
          >
        </div>
      </div>
    </section>

    <div
      class="overflow-x-hidden container-inner mx-auto text-xl border-gray-200 border-b py-24"
      id="about"
    >
      <h2
        class="font-semibold text-gray-900 font-display text-3xl sm:text-5xl lg:text-5xl leading-none font-semibold"
      >
        Margareth Alcaide
      </h2>
      <p class="text-gray-600 text-xl lg:text-2xl">
        Guide touristique lorem ipsum dolor sit amet consectetur.
      </p>
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
          style="border: 0;"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <!-- end get-to-know me -->

    <div
      class="overflow-x-hidden bg-background-secondary py-24"
      id="testimonial"
    >
      <div class="container-inner-large mx-auto text-xl">
        <div class="text-center">
          <h2
            class="font-semibold text-gray-900 font-display text-3xl sm:text-5xl lg:text-5xl leading-none font-semibold"
          >
            Ce qu'ils en pensent
          </h2>
          <p class="text-gray-600 text-xl lg:text-2xl">
            Duis dignissim quis libero sit amet fermentum, ligula sit amet
            lacinia congue.
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

    <div class="bg-gray-50">
      <div
        class="container-inner max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
      >
        <h2
          class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
        >
          Prêt pour l'aventure ?
          <br />
          <span class="text-pink-600">07 67 50 30 66.</span>
        </h2>
        <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
          <div class="inline-flex rounded-md shadow">
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              Réserver
            </a>
          </div>
          <div class="ml-3 inline-flex rounded-md shadow">
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-pink-600 bg-white hover:bg-pink-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              Contacter
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="overflow-x-hidden bg-background-secondary" id="visites">
      <div class="container-inner-large mx-auto text-xl py-24">
        <div class="mb-12">
          <h2
            class="font-semibold text-gray-900 font-display text-3xl sm:text-5xl lg:text-5xl leading-none font-semibold"
          >
            Les derniers articles
          </h2>
          <p class="text-gray-600 text-xl lg:text-2xl">
            Suivez l'actualité, les astuces et blababbalalbl.
          </p>
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
    title: "Home",
  },
  components: {
    card: CardComponent,
    testimonial: TestimonialComponent,
    pricing: PricingComponent,
  },
};
</script>
