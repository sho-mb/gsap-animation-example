<script setup>
import { gsap } from 'gsap';

const startAnimation = (el) => {
  var tl = gsap.timeline({});
  tl.to(".circle", { duration:0.5, ease:"power3.inOut", width:"232px"});
  tl.to(".btn_text", {color:'white', duration:1});
}

const resetAnimation = (el) => {
  var tl = gsap.timeline({});
  tl.to(".circle", { duration:1, ease:"power3.inOut", width:"32px"});
  tl.to(".btn_text", {color:'#333', duration:1});
}

</script>
<template>
      <div
       @mouseover="startAnimation"
       @mouseleave="resetAnimation" 
       class="continer">
        <div class="btn_content">
          <span class="circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </span>
          <span class="btn_text">Learn more</span>
        </div>
      </div>
</template>
<style scoped>
.btn_text {
  position:absolute;
  font-weight: 700;
  right:72px;
}

.bi-arrow-right {
  color: white;
  margin: 4px;
}

.continer{
  padding: 4px;
  margin-left: 12px;
  width: 160px;
}

.circle{
  width: 32px;
  /* width: 180px; */
  height: 32px;
  border-radius: 100px;
  background-color: #333;
  margin-left: 16px;
}

.btn_content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.btn_content :hover {
  cursor: pointer;
}

</style>