<template>
  <div class="form-wrapper">
    <!-- prevent refresh on submit and call the submitForm function below which takes the input fields as input -->
    <form
      v-on:submit.prevent="submitForm(fields)"
      class="flex flex-col content-center"
    >
      <h2 class="text-center">Ajouter une page</h2>
      <div class="flex justify-center">
        <label for="name" class="pt-8 pr-8"></label>
        <input
          class="mb-16"
          placeholder="Nom"
          id="name"
          v-model="fields.name"
          type="text"
          required
        />
      </div>
      <div class="flex justify-center">
        <label for="slug" class="pt-8 pr-8"></label>
        <input
          class="mb-16"
          placeholder="Slug"
          id="slug"
          v-model="fields.slug"
          type="text"
          required
        />
      </div>
      <button class="btn btn-primary" type="submit">ajouter!</button>
    </form>
  </div>
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
  transition: all 0.2s ease;
}
input:not([type="radio"]):not([type="checkbox"]):focus {
  border-color: #d64758;
  box-shadow: inset 0 0 3px 1px #d64758;
  outline: 0;
}
.form-wrapper {
  display: flex;
  flex-direction: column;
  justify-self: center;
  border: 1px solid #d64758;
  border-radius: 4px;
  margin-top: 2rem;
  height: fit-content;
  padding: 2rem 1rem;
  width: 75%;
  box-shadow: inset 0 0 12px 3px #d64758, 0 0 51px rgba(0, 0, 0, 0.1);
}
.btn {
  align-self: center;
  background-color: #d64758;
  font-weight: 600;
  color: white;
  border-radius: 4px;
  transition: all 0.1s ease-in-out;
}
.btn:hover {
  transform: scale(1.05);
}

.btn:active {
  transform: scale(1);
}

label {
  display: none;
}
</style>
