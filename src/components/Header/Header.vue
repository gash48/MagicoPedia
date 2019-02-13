<template>
  <div>
    <div class="row headerWrapper">
      <h2>Header</h2>
    </div>
    <div class="row navBarWrapper">
      <ul class="list-inline">
        <router-link v-for="(route, index) in routes" v-show="route.label" :key="index" tag="li" class="navItem" :to="route.path">
          <a>{{route.label}}</a>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import { routes } from "resources/routes";

export default {
  data() {
    return {
      routes
    };
  }
};
</script>

<style scoped>
.headerWrapper {
  padding: 10px 20px;
  background: #4ba4d3;
  position: fixed;
  width: 100%;
  top: 0px;
  z-index: 10;
  box-shadow: 1px 2px 8px lightslategrey;
}
.navBarWrapper {
  position: fixed;
  background: #85c3e2;
  width: 100%;
  top: 66px;
}
.navItem {
  display: inline-block;
  padding: 15px 20px;
}
.navItem:hover {
  background: #4ba4d350;
  box-shadow: 0px -1px 1px lightslategrey;
}
.activeLink {
  background: #4ba4d350;
  box-shadow: 0px -1px 1px lightslategrey;
}
.list-inline {
  margin: 0px;
}
</style>

