<template>
  <div>
    <h2 class="pt-24 pb-24 -mb-0 text-center">Test technique Tipeee</h2>
    <!-- include Header2 with location and count props -->
    <Header2 :location="this.location" :count="this.count" />
    <div class="layout-maxed">
      <section class="grid sm:grid-cols-2 gap-16">
        <AddItem />
        <List />
      </section>
    </div>
  </div>
</template>

<script>
import AddItem from "@/components/list/addItem";
import List from "@/components/list/list";
import Header2 from "@/components/layout/header2";
import { mapState, mapActions } from "vuex";

export default {
  // set the location on mount
  async mounted() {
    await this.setLocation();
  },
  name: "IndexPage",
  components: { AddItem, List, Header2 },
  computed: { ...mapState(["location", "count"]) },
  methods: { ...mapActions(["setLocation"]) },
};
</script>

<style scoped>
h2 {
  background-image: linear-gradient(90deg, #86b3e4, #6f8fe7);
  color: white;
  margin-bottom: 0;
}

@media (max-width: 576px) {
  .layout-maxed {
    display: flex;
    flex-direction: column;
    margin: 0 1rem;
  }
}
</style>
