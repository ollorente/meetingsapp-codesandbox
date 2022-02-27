<template>
  <div class="">
    <header class="container mx-auto bg-blue-800 text-white sticky top-0">
      <InternalBar
        :menu="menu"
        v-if="!isMenu && $route.path !== '/' && $route.path !== '/registro'"
      />
    </header>

    <main class="container mx-auto p-3">
      <h1>Nuevo contacto</h1>
    </main>
  </div>
</template>

<script>
import PersonDataService from "~/services/PersonDataService";
import InternalBar from "~/components/AtomicDesign/Molecules/InternalBar";

export default {
  name: "Person",
  head: {
    title: "Nuevo contacto © MeetingsApp",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Nuevo contacto",
      },
    ],
  },
  layout: "internal",
  components: {
    InternalBar,
  },
  data() {
    return {
      person: {
        name: null,
        email: null,
        role: null,
      },
      menu: {
        link: `/contactos`,
        title: "Nuevo contacto",
      },
    };
  },
  methods: {
    async addPerson() {
      try {
        if (this.user.email === null || this.user.name === null) {
          return;
        }

        await PersonDataService.create(this.person)
          .then(async (response) => {
            const { data, error } = await response.data;

            if (error) {
              console.log(error);
            }

            await this.$router.push(`/contactos/${data._id}`);
          })
          .catch((error) => console.log(error));
      } catch (error) {}
    },
  },
};
</script>