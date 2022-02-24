<template>
  <nav class="flex justify-between align-center text-white p-3">
    <div class="text-2xl font-light">
      <NuxtLink :to="menu.link">
        <i class="fas fa-arrow-left"></i> {{ menu.title }}
      </NuxtLink>
    </div>
    <div>2</div>
  </nav>
</template>

<script>
export default {
  name: "InternalBar",
  props: ["menu"],
};
</script>