<template>
  <app-entity-grid v-if="getBeasts.length" :entityList="getBeasts" :backgroundSwitcher="backgroundSwitcher"  :onClick="onClick"></app-entity-grid>  
</template>

<script>
import EntityGrid from 'sharedComponent/EntityGrid.vue';
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
  components:{
    appEntityGrid : EntityGrid
  },
  computed: {
    ...mapGetters(['getBeasts'])
  },
  methods: {
    ...mapActions(['fetchBeasts']),
    onClick(data){
      console.log(data);
    },
    backgroundSwitcher(level){
      switch(level){
        case 1:
          return 'bg-secondary';
        case 2:
          return 'bg-info';
        case 3:
          return 'bg-primary';
        case 4:
          return 'bg-warning';
        case 5:
          return 'bg-danger';
      }
    }
  },
  created(){
    this.fetchBeasts();
  }
}
</script>

<style scoped>

</style>
