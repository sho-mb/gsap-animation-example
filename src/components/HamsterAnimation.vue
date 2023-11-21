<script setup>
import { Vue3Lottie } from 'vue3-lottie'
import Hamster from '../assets/Aniki Hamster.json'
import { gsap } from 'gsap';

const hamBeforeEnter = (el) => {
  gsap.set(el, {
    opacity:0,
    x:"-150%"
  })
}

const hamEnter = (el, done) => {
  gsap.to(el ,{
    opacity:1,
    x:0,
    duration:1,
    delay:0.5,
    onComplete:done
  })
} 

const ham1BeforeEnter = (el) => {
  gsap.set(el, {
    opacity:0,
    y:"-150%"
  })
}

const ham1Enter = (el, done) => {
  gsap.to(el ,{
    opacity:1,
    y:0,
    duration:1,
    delay:2.5,
    onComplete:done
  })
} 

const ham2BeforeEnter = (el) => {
  gsap.set(el, {
    opacity:0,
    x:"-150%"
  })
}

const ham2Enter = (el, done) => {
  gsap.to(el ,{
    opacity:1,
    x:0,
    duration:1,
    delay:1.5,
    onComplete:done
  })
} 

function calcLottieSize() {
  const windowHeight = window.innerHeight;

  var lottieHeight = windowHeight - 220;

  return lottieHeight / 2;
}

</script>
<template>
  <div class="grid-container-left-content">
    <Transition
    appear
    @beforeEnter="hamBeforeEnter"
    @enter="hamEnter"
    >
      <Vue3Lottie :scale="1.5" :noMargin="true" :pause-animation="true" class="ham0" :animationData = Hamster :height=calcLottieSize() :width="calcLottieSize()"/>
    </Transition>
  
      <Transition
      appear
      @beforeEnter="ham1BeforeEnter"
      @enter="ham1Enter"
      >
        <Vue3Lottie :scale="1.5" :pause-animation="true" :noMargin="true" class="ham1" :animationData = Hamster :height="calcLottieSize()" :width="calcLottieSize()"/>
      </Transition>

      <Transition
        appear
        @beforeEnter="ham2BeforeEnter"
        @enter="ham2Enter"
      >
        <Vue3Lottie :scale="1.5" :noMargin="true" :pause-animation="true" :animationData = Hamster :height="calcLottieSize()" :width="calcLottieSize()"/>
      </Transition>
  </div>  
</template>
<style>
  .grid-container-left-content {
    display: grid;
    grid-template-columns: auto auto;
  }

  .ham0{
    grid-column-start: 1;
  }

  .ham1{
    grid-column-start: 1;
  }
</style>