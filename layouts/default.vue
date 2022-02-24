<template>
  <div class="font-sans">
    <Top />

    <main class="container mx-auto p-3">
      <nuxt />
    </main>
  </div>
</template>

<script>
import Top from "~/components/AtomicDesign/Organisms/Top";

export default {
  components: {
    Top,
  },
};
</script>

<style type="text/tailwindcss">
@layer utilities {
  .content-auto {
    content-visibility: auto;
  }
}
</style>