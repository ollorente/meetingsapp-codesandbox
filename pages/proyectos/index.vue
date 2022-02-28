<template>
<div>
  <div class="w-full flex flex-row align-center mb-5">
      <form
        @submit.prevent="searchQuery"
        class="w-full flex border-2 border-blue-400 rounded-xl"
      >
        <input
          type="search"
          name="search"
          id="search"
          v-model="search"
          placeholder="Buscar proyecto..."
          class="w-full bg-transparent border-0 rounded-l-xl p-3"
        />
        <button type="submit" class="p-3"><i class="fas fa-search"></i></button>
      </form>

      <NuxtLink to="/proyectos/nuevo" class="p-2"
        ><span
          class="bg-blue-600 text-white text-xl opacity-100 hover:opacity-75 rounded-xl py-3 px-4 my-auto ml-1"
          ><i class="fas fa-user-plus"></i></span
      ></NuxtLink>
    </div>

    
  <h1>Proyectos</h1>
</div>
</template>

<script>
import ItemUser from "~/components/AtomicDesign/Molecules/ItemUser";

export default {
  name: "Projects",
  head: {
    title: "Proyectos © MeetingsApp",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Proyectos",
      },
    ],
  },
  components: {
    ItemUser,
  },
  data() {
    return {
      projects: [],
      count: 0,
      limit: 10,
      page: 0,
      search: null,
    };
  },
  created() {},
  methods: {},
  watch: {
    $route: [],
  },
};
</script>