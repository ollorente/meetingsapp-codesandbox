<template>
  <div>
    <h1>Actividades</h1>
    <NuxtLink
      v-for="task in tasks"
      :key="task.id"
      :to="`/actividades/{$route.params.task}`"
      class="main__section__task"
      :class="task.isLock ? 'lock' : ''"
    >
      <span class="main__section__task__text">
        <i class="fas fa-clipboard-check"></i>
        <div class="main__section__task__body">
          <span class="main__section__task__title">{{ task.name }}</span>
          <span class="main__section__task__content">{{ task.name }}</span>
        </div>
      </span>
      <span class="main__section__task__icon">
        <i
          :class="task.isActive ? 'fas' : 'far text-gray'"
          class="fa-circle"
        ></i>
        <i
          class="fas"
          :class="task.isLock ? 'fa-lock text-gray' : 'fa-lock-open'"
        ></i>
      </span>
    </NuxtLink>
  </div>
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
      tasks: [
        {
          id: "",
          name: "",
          isActive: "",
          isLock: "",
        },
      ],
    };
  },
  created() {},
  methods: {},
  watch: {
    $route: [],
  },
};
</script>