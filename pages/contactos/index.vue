<template>
  <h1>Contactos</h1>
</template>

<script>
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
  components: {},
  data() {
    return {
      people: [],
    };
  },
  created() {},
  methods: {},
  watch: {
    $route: [],
  },
};
</script>