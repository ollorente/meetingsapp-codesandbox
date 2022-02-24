<template>
  <h1>Encuentros</h1>
</template>

<script>
export default {
  name: "Meetings",
  head: {
    title: "Encuentros © MeetingsApp",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Encuentros",
      },
    ],
  },
  components: {},
  data() {
    return {
      meetings: [],
    };
  },
  created() {},
  methods: {},
  watch: {
    $route: [],
  },
};
</script>