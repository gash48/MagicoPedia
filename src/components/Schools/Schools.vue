<template>
  <div class="container-fluid">
    <app-entity-card v-if="getSchools.length > 0" :entityList="getSchools" :keyMap="keyMap" :redirectTo="redirectTo"></app-entity-card>
  </div>
</template>

<script>
import EnitityCard from '../Shared/EntityCard.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  data(){
    return {
      keyMap : {
        id : 'id',
        title : 'name',
        basePath : '/school-covers/',
        coverImage : 'coverImage'
      }
    }
  },
  computed: {
    ...mapGetters(['getSchools'])
  },
  methods: {
    ...mapActions(['fetchSchools']),
    redirectTo(data){
      console.log(data)
    }
  },
  components: {
    appEntityCard: EnitityCard
  },
  created() {
    this.fetchSchools();
  }
};
</script>

<style scoped>
</style>
