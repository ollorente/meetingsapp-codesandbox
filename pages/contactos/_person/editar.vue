<template>
  <div class="">
    <header class="container mx-auto bg-blue-800 text-white sticky top-0">
      <InternalBar
        :menu="menu"
        v-if="!isMenu && $route.path !== '/' && $route.path !== '/registro'"
      />
    </header>

    <main class="container mx-auto p-3">
      <h1>Editar contacto {{ $route.params.person }}</h1>
    </main>
  </div>
</template>

<script>
import PersonDataService from "~/services/PersonDataService";
import InternalBar from "~/components/AtomicDesign/Molecules/InternalBar";

export default {
  name: "Person",
  head: {
    title: "Editar contacto © MeetingsApp",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Editar contacto",
      },
    ],
  },
  layout: "internal",
  components: {
    InternalBar,
  },
  data() {
    return {
      person: "",
      menu: {
        link: `/contactos/${this.$route.params.person}`,
        title: "Editar contacto",
      },
    };
  },
  created() {
    this.getPerson();
  },
  methods: {
    async getPerson() {
      await PersonDataService.get(this.$route.params.person)
        .then(async (response) => {
          const { data, error } = await response.data;

          if (error) {
            console.log(error);
          }

          this.person = data;
        })
        .catch((error) => console.log(error));
    },
  },
  watch: {
    $route: ["getPerson"],
  },
};
</script>