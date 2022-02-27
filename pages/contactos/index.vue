<template>
  <div>
    <form
      @submit.prevent="searchQuery"
      class="flex border-2 border-blue-400 rounded-xl mb-5"
    >
      <input
        type="search"
        name="search"
        id="search"
        v-model="search"
        placeholder="Buscar contacto..."
        class="w-full bg-transparent rounded-l-xl p-3"
      />
      <button type="submit" class="p-3"><i class="fas fa-search"></i></button>
    </form>

    <ItemUser v-for="(user, index) in people" :key="index" :user="user" />
  </div>
</template>

<script>
import PersonDataService from "~/services/PersonDataService";
import ItemUser from "~/components/AtomicDesign/Molecules/ItemUser";

export default {
  name: "People",
  head: {
    title: "Contactos © MeetingsApp",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Contactos",
      },
    ],
  },
  components: {
    ItemUser,
  },
  data() {
    return {
      people: [],
      count: 0,
      limit: 10,
      page: 1,
      search: null,
    };
  },
  created() {
    this.getPeople();
  },
  methods: {
    async getPeople() {
      try {
        await PersonDataService.list(this.limit, this.page)
          .then(async (response) => {
            const { count, data, error } = await response.data;

            if (error) {
              console.log(error);
            }

            this.people = await data;
            this.count = await count;
          })
          .catch((error) => console.log(error));
      } catch (error) {
        console.log(error);
      }
    },
    async searchQuery() {
      console.log("Buscar...");
      this.search = null;
    },
  },
  watch: {
    $route: ["getPeople"],
  },
};
</script>