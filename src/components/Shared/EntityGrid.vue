<template>
  <div>
    <div class="card entityCard" v-for="(entity,index) in entityList" :key="index" :title="entity.commonName" @click="onClick(entity)">
      <div class="card-body" :class="backgroundSwitcher(entity.rating)">
        <h3 class="entityName">{{entity.name}}</h3>
        <h5 class="entityArea">Found {{entity.area.length ? `in ${entity.area.join(', ')}` : `Worldwide`}}</h5>
      </div>
      <div class="card-footer">Rating
        <span class="ratingLevel">
          <i class="fa fa-star" aria-hidden="true" v-for="(no,index) in entity.rating" :key="index"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:["entityList", "backgroundSwitcher", "onClick"]
};
</script>

<style scoped>
.entityCard{
  width: 20%;
  display: inline-flex;
  margin: 0px 0px 10px 10px;
  font-family: cursive;
  box-shadow: 2px 2px 5px lightgrey;
}
.entityCard:hover{
  cursor: pointer;
  box-shadow: 2px 2px 5px darkgrey;
}
.card-body{
  padding: 12px;
  height: 140px;
}
.entityName{
  font-size: 1.35rem;
  font-weight: 400;
  margin-bottom: 2.5rem;
}
.entityName::first-letter{
  color: white;
  font-size: 40px;
  font-weight: 600;
}
.entityArea{
  text-align: right;
  font-size: 12px;
}
.ratingLevel{
  display: inline-block;
  margin-left: 6px;
}
</style>
