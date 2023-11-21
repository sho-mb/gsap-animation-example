<script setup>
import{ gsap }from 'gsap';

const scrollAfterApper = (el) => {
  let tween = gsap.fromTo(el, {
    opacity:0,
    height:"0"
  }, {
    opacity:0.8,
    duration:1,
    height:"120"
  })
  tween.repeat(-1);
}

</script>
<template>
  <div class="scroll-container">
    <p class="scroll">Scroll</p>
    <Transition
      appear
      @after-appear="scrollAfterApper"
    >
      <span class="scroll-line"></span>
    </Transition>
    
  </div>
</template>
<style>
.scroll-container{
  display: flex;
  writing-mode: vertical-lr;
  text-orientation: mixed;
  align-items: center;
}

.scroll-line{
  margin-top: 16px;
  height: 120px;
  width: 2px;
  display: block;
  border: solid 1px #333;  
}

.scroll{
  font-size: 32px;
}
</style>