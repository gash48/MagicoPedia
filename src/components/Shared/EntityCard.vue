<template>
  <div>
    <div class="card displayCards" v-for="entity in entityList" :key="entity[keyMap.id]" @click="redirectTo(entity)">
      <div class="card-body imageCover">
        <img :src="'../src/assets/images'+keyMap.basePath+entity[keyMap.coverImage]" alt="No Preview Available" />
      </div>
      <div class="card-footer">{{entity[keyMap.title]}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["entityList", "keyMap", "redirectTo"]
};
</script>

<style scoped>
.displayCards {
  display: inline-flex;
  width: 12%;
  margin: 15px;
  box-shadow: 2px 2px 5px lightgrey;
}
.displayCards:hover {
  cursor: pointer;
  box-shadow: 2px 2px 5px darkgrey;
}
.imageCover {
  height: 200px;
  padding: 0px;
}
.imageCover img {
  width: 100%;
  height: 200px;
}
.card-footer {
  font-size: 12px;
  font-family: fantasy;
  height: 17vh;
}
</style>
