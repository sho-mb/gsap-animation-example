<script setup>
import { ref } from 'vue'
import gsap from 'gsap';

const items = ref([
  { phrase: "we" },
  { phrase: "are" },
  { phrase: "Hamster" },
])

const titleBeforeEnter = (el) => {
  gsap.set (el, {
    opacity:0,
    y:"-100%"
  })
}

const titleEnter = (el, done) => {
  gsap.to (el, {
    opacity:1,
    y: "0",
    ease: "bounce.out",
    duration:1.2,
    delay: 1 + 0.4 * (items.value.length - el.dataset.index),
    onComplete:done
  })
}

</script>

<template>
    <TransitionGroup
    tag="div"
    class="title-grid"
    appear
    @before-enter="titleBeforeEnter"
    @enter="titleEnter"
    >
      <div 
        v-for="(item, index) in items" 
        :key="item.phrase"
        :class="{ 'title': true, [`item-${index + 1}`]: true }" 
        :data-index="index"
      >
        {{ item.phrase }}
      </div>
    </TransitionGroup>
</template>
<style>
.title {
  font-size: 7rem;
  line-height: normal;
}

.title-grid{
  display: grid;
  grid-template-columns: auto auto;
  width: 400px;
  text-align: right;
}

.item-3{
  grid-column-start: 1;
  grid-column-end: 3;
}

</style>