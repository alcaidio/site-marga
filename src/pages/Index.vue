<template>
  <Layout>
    <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16">
      <div class="font-bold w-full sm:w-3/5 text-center sm:text-left">
        <h1
          class="font-semibold text-gray-900 font-display text-4xl sm:text-5xl lg:text-6xl leading-none font-semibold"
        >Percez les secret de la région Occitanie</h1>
        <div
          class="text-2xl text-pink-500 leading-tight tracking-tight"
        >Offrez-vous une guide d'élite</div>
        <div class="text-gray-700 mt-4 leading-relaxed font-light">
          Nam luctus, ligula sit amet lacinia congue, quam odio rhoncus ipsum,
          at aliquam metus risus nec erat. Duis dignissim quis libero sit amet
          fermentum.
        </div>
      </div>
      <div class="mt-8 sm:mt-0">
        <g-image src="../../static/travel.png" alt="hero" class="w-80 mx-auto sm:mx-0" />
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

    <div class="overflow-x-hidden" id="contact">
      <div class="contact-me bg-background-secondary pt-24">
        <div class="container-inner mx-auto text-xl pb-4 relative">
          <h2 class="font-semibold text-gray-900 text-2xl mb-6">Contactez-moi 🤝</h2>
          <div class="absolute right-0 top-0" style="transform: translate(100%) rotate(180deg)">
            <svg width="170px" height="170px">
              <use xlink:href="#dots-triangle" />
            </svg>
          </div>

          <p class="mb-12">
            Static sites cannot submit forms on their own. However, services
            like
            <a
              href="https://www.netlify.com/docs/form-handling"
            >Netlify Forms</a>
            or
            <a href="https://formspree.io">FormSpree</a> can help you do this
            without a backend.
          </p>

          <div class="text-lg sm:text-lg mb-16">
            <form action="#" class="mb-12">
              <div class="flex flex-wrap mb-6 -mx-4">
                <div class="w-full md:w-1/2 mb-6 md:mb-0 px-4">
                  <label class="block mb-2 text-copy-primary" for="name">Name</label>

                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Jon Snow"
                    class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-pink-600 mb-2 p-4"
                    required
                  />
                </div>

                <div class="w-full px-4 md:w-1/2">
                  <label class="block text-copy-primary mb-2" for="email">Email Address</label>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email@example.com"
                    class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-pink-600 mb-2 p-4"
                    required
                  />
                </div>
              </div>

              <div class="w-full mb-12">
                <label class="block text-copy-primary mb-2" for="message">Message</label>

                <textarea
                  id="message"
                  rows="5"
                  name="message"
                  class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-pink-600 mb-2 px-4 py-4"
                  placeholder="Enter your message here."
                  required
                ></textarea>
              </div>

              <div class="flex justify-end w-full">
                <input
                  type="submit"
                  value="Submit"
                  class="block bg-pink-500 hover:bg-pink-600 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- end contact-me -->
    </div>
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
