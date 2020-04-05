<template>
  <Layout>
    <!-- start hero section -->
    <section
      class="h-auto container-inner-large mx-auto flex flex-col sm:flex-row justify-around py-24"
    >
      <div class="font-bold w-full sm:w-3/5 text-center sm:text-left">
        <h1
          class="font-semibold text-gray-900 font-display text-4xl sm:text-5xl lg:text-6xl leading-none font-semibold"
        >Laissez vous guider</h1>
        <h2
          class="text-pink-500 text-xl lg:text-3xl lg:tracking-wide mt-3"
        >Et percez les secrets de la région Occitanie jusqu'à la Provence 🧭</h2>
        <div
          class="text-gray-700 mt-4 leading-relaxed lg:leading-loose font-light text-lg lg:text-xl"
        >
          Vous rêvez d’explorer le Sud, le Patrimoine historique, artistique et
          culturel vous intéresse ? Venez parcourir plus de 2000 ans d’Histoire
          !
        </div>
        <div class="mt-6 pb-3 lg:pt-4">
          <button
            v-if="$route.path === '/'"
            href="/#about"
            v-scroll-to="'#about'"
            class="mr-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <span>Plus d'info</span>
          </button>
          <a :href="formUrl" target="_blank">
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
          </a>
        </div>
      </div>
      <div class="flex-1">
        <g-image src="../../static/travel.png" alt="hero" />
      </div>
    </section>
    <!-- end hero section -->

    <!-- start visites -->
    <section class="bg-secondary border-t overflow-x-hidden" id="visites">
      <div class="container-inner-large mx-auto text-xl pt-24 pb-20">
        <div class="mb-12">
          <h2
            class="font-semibold text-gray-900 font-display text-3xl sm:text-5xl lg:text-5xl leading-none font-semibold"
          >Les destinations touristiques</h2>
          <p
            class="text-gray-600 text-xl lg:text-2xl"
          >Partez à la découverte du patrimoine culturel et historique.</p>
        </div>
        <div class="overflow-x-scroll whitespace-no-wrap pb-8">
          <card
            title="Nîmes et le Pont du Gard"
            price="39"
            nbr="12"
            place="20"
            :star="5"
            image="https://upload.wikimedia.org/wikipedia/commons/6/67/Arenes_de_Nimes_panorama.jpg"
          />
          <card
            title="Montpellier centre historique"
            price="29"
            nbr="44"
            place="20"
            :star="5"
            image="https://st.depositphotos.com/2665689/4700/i/600/depositphotos_47005213-stock-photo-place-de-comedie-in-montpellier.jpg"
          />
          <card
            title="Aigües-Mortes et la camargue"
            price="39"
            nbr="14"
            place="15"
            :star="3"
            image="https://c1.wallpaperflare.com/preview/12/908/45/ramparts-aigues-mortes-france-acute-dead.jpg"
          />
          <card
            title="Saint Guilhem le desert, pont du diable"
            price="45"
            nbr="9"
            place="15"
            :star="5"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Abbaye_st_guilhem_1.jpg/800px-Abbaye_st_guilhem_1.jpg"
          />
          <card
            title="Sète et le bassin de Thau"
            price="45"
            nbr="17"
            place="15"
            :star="4"
            image="https://live.staticflickr.com/5637/31165684325_6cacb69e69_b.jpg"
          />
          <card
            title="Arles et la Camargue"
            price="45"
            nbr="17"
            place="15"
            :star="4"
            image="https://upload.wikimedia.org/wikipedia/commons/2/23/Arles_Place_de_la_R%C3%A9publique.jpg"
          />
          <card
            title="Avignon et la cité des papes"
            price="45"
            nbr="17"
            place="15"
            :star="5"
            image="https://www.publicdomainpictures.net/pictures/220000/velka/the-popes-palace-in-avignon.jpg"
          />
          <card
            title="Les Baux et Saint Rémy"
            price="45"
            nbr="11"
            place="15"
            :star="4"
            image="https://upload.wikimedia.org/wikipedia/commons/f/f0/Les_Baux-de-Provence_Ch%C3%A2teau_des_Baux_by_Yuan_Hsueh.jpg"
          />
          <card
            title="Uzès et le Pont du Gard"
            price="45"
            nbr="14"
            place="15"
            :star="5"
            image="https://upload.wikimedia.org/wikipedia/commons/3/30/Pont_du_Gard%2C_Languedoc-Roussillon%2C_France_%283679125855%29.jpg"
          />
          <card
            title="Le canal du midi"
            price="45"
            nbr="8"
            place="15"
            :star="5"
            image="https://img-4.linternaute.com/xqTh4t0oXiTJFuyNNzbeLpPJNXY=/fit-in/620x/smart/5c284e199a27490484e73349a9cd23cc/ccmcms-linternaute/11577260.jpg"
          />
          <card
            title="Le pic Saint Loup et ses villages"
            price="29"
            nbr="31"
            place="20"
            :star="5"
            image="https://www.chateau-laroque.fr/wp-content/uploads/2016/06/laroquedupic1-600x300.jpg"
          />
          <card
            title="Carcassonne la cité médiévale"
            price="59"
            nbr="3"
            place="15"
            :star="4"
            image="https://upload.wikimedia.org/wikipedia/commons/3/34/La_Cit%C3%A9_de_Carcassonne_%2826422085310%29.jpg"
          />
        </div>
        <div
          class="pb-6 pt-2 text-gray-500 font-medium text-sm"
        >* Les prix et le nombre de places disponibles sont à titre indicatif.</div>
      </div>
    </section>
    <!-- end visites -->

    <!-- start partenaires -->
    <section class="bg-white border-t py-12">
      <div class="mx-auto flex flex-wrap items-center justify-between">
        <div
          class="flex container-inner-large flex-wrap max-w-4xl mx-auto items-center justify-between text-xl text-gray-500 font-bold opacity-75"
        >
          <a
            href="https://www.nimes-tourisme.com/fr/"
            target="_blank"
            class="w-1/3 p-4 md:w-auto flex items-center text-gray-500 opacity-50"
          >
            <g-image
              src="../../static/partenaires/logo-nimes.svg"
              alt="Office de tourisme Nîmes"
              class="h-16 w-16 mr-4 fill-current"
            ></g-image>
          </a>

          <a
            href="https://www.capvacances.fr/"
            target="_blank"
            class="w-1/3 p-4 md:w-auto flex items-center text-gray-500 opacity-50"
          >
            <g-image
              src="../../static/partenaires/logo-capvacances.svg"
              alt="Capvacances"
              class="h-24 w-24 mr-4 fill-current"
            ></g-image>
          </a>
          <a
            href="https://www.tourisme.fr/php/office.php?ID=2558"
            target="_blank"
            class="w-1/3 p-4 md:w-auto flex items-center text-gray-500 opacity-75"
          >
            <g-image
              src="../../static/partenaires/logo-pic-saint-loup.jpg"
              alt="Office de tourisme Grand Pic Saint Loup"
              class="h-16 w-16 mr-4 fill-current"
            ></g-image>
          </a>
          <a
            href="https://domaineguinand.com/"
            target="_blank"
            class="w-1/3 p-4 md:w-auto flex items-center text-gray-500 opacity-75"
          >
            <g-image
              src="../../static/partenaires/logo-guinand.jpg"
              alt="Domaine de guinand à Saint Christol"
              class="h-20 w-24 mr-4 fill-current"
            ></g-image>
          </a>
          <a
            href="https://lguide.fr/"
            target="_blank"
            class="w-1/3 p-4 md:w-auto flex items-center text-gray-200 opacity-50"
          >
            <g-image
              src="../../static/partenaires/logo-lguide.png"
              alt="L'guide, guide free-lance"
              class="h-16 w-16 mr-4 img-png"
            ></g-image>
          </a>
          <a
            href="https://sebecobike.fr/echobike/"
            target="_blank"
            class="w-1/3 p-4 md:w-auto flex items-center text-gray-500 opacity-50"
          >
            <g-image
              src="../../static/partenaires/logo-eco-bike.png"
              alt="Seb eco bike"
              class="h-12 w-16 mr-4 fill-current img-png"
            ></g-image>
          </a>
          <a
            href="http://www.bergeriefontbonne.fr/"
            target="_blank"
            class="w-1/3 p-4 md:w-auto flex items-center text-gray-500 opacity-50"
          >
            <g-image
              src="../../static/partenaires/logo-bergerie-de-fontbonne.svg"
              alt="Seb eco bike"
              class="h-24 w-24 mr-4 fill-current"
            ></g-image>
          </a>
          <a
            href="https://www.ancovart.fr/"
            target="_blank"
            class="w-1/3 p-4 md:w-auto flex items-center text-gray-500 opacity-50"
          >
            <g-image
              src="../../static/partenaires/logo-ancovart.png"
              alt="Ancovart"
              class="h-12 w-16 mr-4 fill-current img-png"
            ></g-image>
          </a>
          <a
            href="https://www.facebook.com/pages/category/Nonprofit-Organization/Les-Guides-du-Languedoc-1200443353391090/"
            target="_blank"
            class="w-1/3 p-4 md:w-auto flex items-center text-gray-500 opacity-50"
          >
            <g-image
              src="../../static/partenaires/logo-guide-du-languedoc.png"
              alt="Encovart"
              class="h-12 w-16 mr-4 fill-current img-png"
            ></g-image>
          </a>
        </div>
      </div>
    </section>
    <!-- end partenaires -->

    <!-- start about me -->
    <section
      class="container-inner mx-auto text-xl border-gray-200 border-b pt-10 pb-24 overflow-x-hidden"
      id="about"
    >
      <h2
        class="font-semibold text-gray-900 font-display text-3xl sm:text-5xl lg:text-5xl leading-none font-semibold"
      >Margareth Alcaide</h2>
      <p
        class="text-gray-600 text-xl lg:text-2xl"
      >Guide conférencière passionnée d'histoire et de culture 🇮🇹🇫🇷🇪🇸🏴󠁧󠁢󠁥󠁮󠁧󠁿🇺🇸</p>
      <div class="flex flex-col md:flex-row mt-12">
        <div class="font-bold w-full sm:w-3/5 sm:text-left mx-auto">
          <g-image
            src="../../static/marga.jpg"
            alt="margareth"
            class="mt-2 sm:mx-0 rounded-lg shadow-lg sm:mx-0 rounded-xl mb-8 lg:mb-0"
          />
        </div>
        <div class="text-lg sm:text-xl sm:ml-12 leading-relaxed">
          <p>
            Je propose des visites guidées en Occitanie et Provence pour tous
            les publics qu’il soient locaux ou internationaux. Je guide en
            français, espagnol, anglais et italien.
          </p>
          <p class="mt-2">
            La découverte de spécialités locales permet de tisser des liens
            humains.
          </p>
          <p class="mt-2">
            Pour être au cœur des lieux visités, rencontrer des acteurs locaux
            et percer quelques secrets j'aimerais vous faire connaître les
            traditions et les cultures.
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
      <div class="text-lg sm:text-xl leading-relaxed">
        <p>
          Avide d’anecdotes, de petites histoires , j’aime les raconter en
          éveillant la curiosité des différents publics que je guide et
          accompagne !
        </p>
        <p class="mt-2">
          Mes visites se veulent interactives, diversifiées et dynamiques.
          J'exerce mon métier avec passion et j'aime transmettre ma curiosité
          mes connaissances des territoires. La Nature reste essentielle dans la
          plupart des balades que je propose.
        </p>
      </div>
      <div class="responsive-container mt-8">
        <iframe
          class="responsive-iframe w-full h-full top-0 left-0 border-0"
          src="https://www.youtube.com/embed/x5DP_NC-srE"
          style="border: 0;"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>
    <!-- end about me -->

    <!-- start témoignage -->
    <section class="bg-secondary py-24 overflow-x-hidden" id="testimonial">
      <div class="container-inner-large mx-auto text-xl">
        <div class="text-center">
          <h2
            class="font-semibold text-gray-900 font-display text-3xl sm:text-5xl lg:text-5xl leading-none font-semibold"
          >Ce qu'ils en pensent</h2>
          <p
            class="text-gray-600 text-xl lg:text-2xl"
          >Merci à tous de me permettre de vous transmettre ma passion ♥️</p>
        </div>
        <div class="move flex flex-row items-center mt-4">
          <testimonial
            class="mt-8 mr-6"
            name="Manu Durand"
            text="“Merci pour cette magnifique journée très instructive et fort agréable !”"
            image="https://images.unsplash.com/photo-1553267751-1c148a7280a1?ixlib=rb-1.2.1&w=300&height=300&fit=facearea&facepad=2.3"
          />
          <testimonial
            class="mt-8 mr-6"
            name="Justine Orwell"
            text="“Très instructif on ne connaissait pas cette magnifique ville et merci pour
          cette fantastique visite”"
            image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&height=1650&q=80&fit=facearea&facepad=2.2"
          />
          <testimonial
            class="mt-8 mr-6"
            name="Francis Bernard"
            text="“Notre guide Margareth a mené une passionnante conférence sur le tableau des Ménines de Velazquez à la Gazette Café un grand merci à elle.”"
            image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&height=1650&q=80&fit=facearea&facepad=2.3"
          />
          <!-- &fit=crop&fit=facearea&facepad=2.5&w=144&h144 -->
        </div>
      </div>
    </section>
    <!-- end témoignage -->

    <!-- start cta -->
    <section
      class="bg-white container-inner flex flex-col mx-auto py-24 px-4 items-center lg:items-start justify-around"
    >
      <h2
        class="text-center text-3xl leading-9 font-extrabold tracking-tight text-pink-600 sm:text-4xl sm:leading-10"
      >Prêt à commencer l'aventure ?</h2>
      <div class="text-2xl text-gray-900 tracking-tight font-medium">06 63 82 15 07 📲</div>
      <div class="mt-6 flex lg:flex-shrink-0">
        <a :href="formUrl" target="_blank">
          <button
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          >Contactez moi 🤝</button>
        </a>
      </div>
    </section>
    <!-- end cta -->

    <!-- start blog -->
    <section class="bg-secondary overflow-x-hidden">
      <div class="container-inner-large mx-auto text-xl py-24">
        <div class="mb-12">
          <h2
            class="font-semibold text-gray-900 font-display text-3xl sm:text-5xl lg:text-5xl leading-none font-semibold"
          >Les derniers articles</h2>
          <p class="text-gray-600 text-xl lg:text-2xl">
            Suivez l'actualité pour en savoir un peu plus sur
            <span class="font-semibold">Margalaguia</span> 👀
          </p>
        </div>
        <!-- <div class="overflow-x-scroll whitespace-no-wrap pb-8">
          <post
            v-for="post in $page.posts.edges"
            :key="post.id"
            :title="post.node.title"
            :date="post.node.date"
            :link="post.node.path"
            :tag="post.node"
          />
        </div>-->
        <div class="text-gray-600">Pas d'article disponible pour le moment ✍️</div>
      </div>
    </section>
    <!-- end blog -->

    <!-- Pricing section  -->
    <pricing id="pricing" />
    <!-- End pricing section -->
  </Layout>
</template>

<script>
import CardComponent from "../components/CardComponent";
import TestimonialComponent from "../components/TestimonialComponent";
import PricingComponent from "../components/PricingComponent";
// import PostComponent from "../components/PostComponent";
export default {
  metaInfo: {
    title: "Accueil"
  },
  components: {
    card: CardComponent,
    testimonial: TestimonialComponent,
    pricing: PricingComponent
    // post: PostComponent
  },
  data() {
    return {
      formUrl: "https://forms.gle/c6gSXU5ravgj5GRZ6"
    };
  }
};
</script>

<page-query>
query Posts ($page: Int) {
  posts: allPost (sortBy: "date", order: DESC, perPage: 5, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date (format: "MMMM D, Y")
        summary
        timeToRead
        path
      }
    }
  }
}
</page-query>

<style>
@media (max-width: 640px) {
  .move {
    animation: 10s linear infinite alternate translate;
  }
}

@keyframes translate {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-200vw, 0);
  }
}

.img-png {
  @apply opacity-75;
  -webkit-filter: grayscale(1);
  filter: grayscale(1);
}

.img-png:hover {
  @apply opacity-75;
  -webkit-filter: grayscale(0);
  filter: grayscale(0);
}

.bg-secondary {
  background: #f7fafc;
}
</style>
