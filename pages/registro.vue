<template>
  <h1>Registro</h1>
</template>

<script>
export default {
  name: "Logup",
  head: {
    title: "Registro © MeetingsApp",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Registro",
      },
    ],
  },
  components: {},
  data() {
    return {
      user: {
        email: null,
        name: null,
        password: null,
        password_confirm: null,
        username: null,
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