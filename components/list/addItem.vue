<template>
  <!-- prevent refresh on submit and call the submitForm function below which takes the input fields as input -->
  <form v-on:submit.prevent="submitForm(fields)">
    <h3>Ajouter une page</h3>
    <div>
      <label>Nom :</label>
      <input
        class="mb-16"
        id="name"
        v-model="fields.name"
        type="text"
        required
      />
    </div>
    <div>
      <label>Slug :</label>
      <input
        class="mb-16"
        id="slug"
        v-model="fields.slug"
        type="text"
        required
      />
    </div>
    <button class="btn btn-primary" type="submit">Ajouter</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      fields: {
        name: null,
        slug: null,
      },
    };
  },
  methods: {
    // function to clear the inputs after submit
    clearInputs() {
      this.fields.name = "";
      this.fields.slug = "";
    },
    // submit handler which takes input fields as input
    async submitForm(fields) {
      try {
        // post to the api with the input fields data
        const item = await axios.post(
          `http://localhost/mystuff/tipeee/hire-technical-api/public/projects`,
          fields
        );
        // set the response data in order to add the item to the store list
        const newItem = item.data;
        // dispatch the addItem mutation from the store and send it the response data
        this.$store.dispatch("addItem", newItem);
        // clear the inputs
        this.clearInputs();
      } catch {
        console.error(error.item.data);
      }
    },
  },
};
</script>

<style scoped>
input:not([type="radio"]):not([type="checkbox"]) {
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  box-shadow: 1px 1px 0 0 #e8e8e8;
  color: #535657;
  font-size: 1rem;
  font-weight: 400;
  padding: 0.5rem;
  transition: all 0.1s ease;
}
input:not([type="radio"]):not([type="checkbox"]):focus {
  border-color: #4dc4d6;
  box-shadow: inset 0 0 0 3px #b6e5ec;
  outline: 0;
}
.btn {
  background-color: #16ba16;
  color: white;
  border-radius: 2px;
}
</style>
