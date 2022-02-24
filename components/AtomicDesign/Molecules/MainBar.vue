<template>
  <nav class="flex justify-between align-center text-white p-3">
    <div class="text-2xl font-light">
      <span v-if="$route.path === '/' || $route.path === '/registro'"
        >MeetingsApp</span
      >
      <span v-if="$route.path === '/actividades'"
        ><i class="fas fa-tasks"></i> Actividades</span
      >
      <span v-if="$route.path === '/proyectos'"
        ><i class="fas fa-user-tie"></i> Proyectos</span
      >
      <span v-if="$route.path === '/encuentros'"
        ><i class="fas fa-handshake"></i> Encuentros</span
      >
      <span v-if="$route.path === '/contactos'"
        ><i class="fas fa-users"></i> Contactos</span
      >
    </div>
    <div>2</div>
  </nav>
</template>

<script>
export default {
  name: "MainBar",
  props: [],
};
</script>