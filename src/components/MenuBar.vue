<script setup>
import LearnMoreBtn from './LearnMoreBtn.vue';
import { gsap } from 'gsap';
import { ref } from 'vue'

var tabs = ref(['ABOUT', 'FOUNDATION', 'STRATEGY AND TACTIC', 'ACTION', 'MESSAGE'])

</script>
<template>
  <div class="menu">
    <ul class="list">
      <li v-for="tab in tabs" :key="tab" >
        {{ tab }}
      </li>
    </ul>
    <LearnMoreBtn />
  </div>
</template>
<style scoped>
li{
  list-style: none;
  margin-left: 24px;
  font-size: 12px;
}

li:hover {
  cursor: pointer;
}


.list {
  display: flex;
}

.menu{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>