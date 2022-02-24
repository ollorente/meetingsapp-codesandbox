<template>
  <h1>Actividades</h1>
</template>

<script>
export default {
  name: "Tasks",
  head: {
    title: "Actividades © MeetingsApp",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Actividades",
      },
    ],
  },
  components: {},
  data() {
    return {
      tasks: [],
    };
  },
  created() {},
  methods: {},
  watch: {
    $route: [],
  },
};
</script>