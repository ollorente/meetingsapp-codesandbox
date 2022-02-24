<template>
  <h1>Login</h1>
</template>

<script>
export default {
  name: "Login",
  head: {
    title: "Login © MeetingsApp",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Login",
      },
    ],
  },
  components: {},
  data() {
    return {
      user: {
        email: null,
        password: null,
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