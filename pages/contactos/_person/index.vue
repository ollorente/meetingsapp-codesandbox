<template>
  <div class="font-sans">
    <header class="container mx-auto bg-blue-800 text-white">
      <InternalBar
        :menu="menu"
        v-if="
          !isMenu &&
          $route.path !== '/' &&
          $route.path !== '/login' &&
          $route.path !== '/registro'
        "
      />
    </header>

    <main class="container mx-auto p-3">
      <h1>Contacto</h1>
    </main>
  </div>
</template>

<script>
import InternalBar from "~/components/AtomicDesign/Molecules/InternalBar";

export default {
  name: "Person",
  head: {
    title: "Contacto © MeetingsApp",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Contacto",
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
        link: `/contactos`,
        title: "Contacto",
      },
    };
  },
  created() {},
  methods: {},
  watch: {
    $route: [],
  },
};
</script>