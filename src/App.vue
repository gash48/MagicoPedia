<template>
  <div class="container-fluid">
    <app-header></app-header>
    <div id="mainBody">
      <router-view></router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';

export default {
  data() {
    return {};
  },
  created() {},
  methods: {},
  components: {
    appHeader: Header,
    appFooter: Footer
  }
};
</script>

<style scoped>
#mainBody {
  padding: 20px 5px;
  margin-top: 120px;
  height: 80%;
}
</style>




