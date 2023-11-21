<script setup>
import MainTitle from './MainTitle.vue';
import HamsterAnimation from './HamsterAnimation.vue';
import Card from './Card.vue';
import ScrollAnimation from './ScrollAnimation.vue';

</script>
<template>
  <div class="grid-container">
    <div class="grid-item-left">
      <HamsterAnimation />
    </div>
    <div class="sub_title">Vue 3 and hamsters are creating world</div>
    <div class="grid-item-right">
      <div class="item-title">
        <MainTitle />
      </div>
      <div class="item-card">
        <Card />
      </div>
      <div class="scroll-container">
        <ScrollAnimation class="scroll-animation" />
      </div> 
    </div>
  </div>
</template>
<style>
.scroll-container{
  margin-left: auto;
  margin-top: 16px;
  position:relative;
}

.scroll-animation{
  position: absolute;
}

.grid-item-left{
  height: auto;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 1rem;
  margin-top: 80px;
}

.item-title, 
.item-card {
  display: flex;
  justify-content: flex-end;
}

.sub_title{
  margin-top: 48px;
  font-size: 32px;
  writing-mode: vertical-lr;
  text-orientation: mixed;
}
</style>