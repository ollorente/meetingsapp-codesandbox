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
      <h1>Perfil</h1>
    </main>
  </div>
</template>

<script>
import InternalBar from "~/components/AtomicDesign/Molecules/InternalBar";

export default {
  name: "Profile",
  head: {
    title: "Perfil © MeetingsApp",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Perfil",
      },
    ],
  },
  layout: "internal",
  components: {
    InternalBar,
  },
  data() {
    return {
      profile: "",
      menu: {
        link: `/actividades`,
        title: "Perfil",
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