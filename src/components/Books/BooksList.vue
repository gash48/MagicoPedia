<template>
  <app-entity-card v-if="getBooks.length > 0" :entityList="getBooks" :keyMap="keyMap" :redirectTo="redirectTo"></app-entity-card>
</template>

<script>
import EnitityCard from 'sharedComponent/EntityCard.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  data(){
    return {
      keyMap : {
        id : 'bookId',
        title : 'bookTitle',
        basePath : '/book-covers/',
        coverImage : 'bookCover'
      }
    }
  },
  computed: {
    ...mapGetters(['getBooks'])
  },
  methods: {
    ...mapActions(['fetchBooks']),
    redirectTo({bookId}){
      this.$router.push({name:'bookContent', params:{id : bookId}});
    }
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
