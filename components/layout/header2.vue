<template>
  <div class="header1-wrapper pt-12 pb-12 flex justify-end">
    <!-- display count only if on list page -->
    <h3 class="counter" v-if="this.location === '/'">
      Nombre de pages: <span>{{ this.count }}</span>
    </h3>
    <NuxtLink
      to="/"
      class="text-center"
      :class="this.location === '/' ? 'active' : ''"
      >Pages</NuxtLink
    >
    <NuxtLink
      to="/about"
      class="text-center"
      :class="this.location === '/about' ? 'active' : ''"
      >About</NuxtLink
    >
  </div>
</template>
<script>
export default {
  props: ["location", "count"],
};
</script>

<style scoped>
a,
h3 {
  text-decoration: none;
  font-weight: 600;
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 10px;
  margin-bottom: 0;
  margin-right: 20px;
  transition: all 0.1s ease-in-out;
}
a:hover {
  transform: scale(1.05);
}

a:active {
  transform: scale(1);
}
a.active {
  box-shadow: 0 0 2px 1px white;
}

.header1-wrapper {
  background-image: linear-gradient(90deg, #d54757, #e9595b);
  margin-bottom: 1.5rem;
}

.counter {
  font-style: italic;
  font-weight: 400;
}

.counter span {
  font-weight: 600;
  font-style: normal;
}
</style>
