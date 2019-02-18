<template>
  <div class="container-fluid">
    <app-entity-card v-if="getBooks.length > 0" :entityList="getBooks"></app-entity-card>
  </div>
</template>

<script>
import EnitityCard from '../Shared/EntityCard.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getBooks'])
  },
  methods: {
    ...mapActions(['fetchBooks'])
  },
  components: {
    appEntityCard: EnitityCard
  },
  created() {
    this.fetchBooks();
  }
};
</script>

<style scoped>
</style>
