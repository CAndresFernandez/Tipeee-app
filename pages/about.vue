<template>
  <div>
    <h2 class="pt-24 pb-24 text-center">Comment ça marche ?</h2>
    <!-- include header and set location prop -->
    <Header2 :location="this.location" />
    <div class="text-center flex flex-col">
      <p class="text-box">
        Sur <strong>Tipeee</strong>, chaque créateur peut lancer sa page de
        soutien,
        <em>peu importe ses besoins, ce qu’il fait ou d’où il vient.</em>
      </p>
      <p class="text-box">
        Sa communauté peut le soutenir financièrement en lui envoyant un
        <strong>Tip</strong> du montant de son choix, de façon ponctuelle ou
        récurrente (<em>sans durée d’engagement</em>).
      </p>
      <p class="text-box">
        <strong>Ce soutien est volontaire</strong> : il permet d’aider un
        créateur à développer son activité et de lui dire qu'on aime son
        travail. S’il le souhaite, le créateur peut proposer différentes
        contreparties pour ses tipeurs.
      </p>
    </div>
  </div>
</template>

<script>
import Header2 from "@/components/layout/header2";
import { mapState, mapActions } from "vuex";

export default {
  // set location on mount
  async mounted() {
    await this.setLocation();
    console.log(this.location);
  },
  name: "AboutPage",
  components: { Header2 },
  computed: { ...mapState(["location"]) },
  methods: { ...mapActions(["setLocation"]) },
};
</script>

<style scoped>
h2 {
  background-image: linear-gradient(-145deg, #d54757, #e9595b);
  color: white;
  margin-bottom: 0;
}
.text-box {
  border: 1px solid #e9595b;
  border-radius: 4px;
  align-self: center;
  justify-content: center;
  padding: 2rem;
  width: 30%;
  margin: 1rem 0;
  box-shadow: inset 0 0 12px 3px #e9595b, 0 0 51px rgba(0, 0, 0, 0.1);
}
</style>
