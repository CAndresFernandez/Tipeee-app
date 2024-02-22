<template>
  <div>
    <h2 class="text-center">Liste de pages</h2>
    <div class="grid sm:grid-cols-2 gap-16">
      <Item v-for="item in items" :key="item.slug" :item="item" />
    </div>
  </div>
</template>

<script>
import Item from "@/components/list/item";
import { mapState, mapActions } from "vuex";

export default {
  // on mount, fetch all of the items from the database
  async mounted() {
    await this.getItems();
  },
  components: { Item },
  // use the items array from the store
  computed: { ...mapState(["items"]) },
  methods: {
    // make the getItems mutation available to use on mount
    ...mapActions(["getItems"]),
  },
};
</script>
<style scoped></style>
