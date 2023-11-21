<script setup>
import { ref } from "vue";
import { Vue3Lottie } from "vue3-lottie";
import animationDataMan from "../assets/man.json";
import gsap from "gsap";

const cardTitle = ref("pickup");

const cardAnimationStart = (done) => {
  var tl = gsap.timeline()

  tl.to(".card-outline", {  ease:"power3.inOut", right:"0", bottom:"0"});

  tl.to(".btn-container", {  x:"20", opacity:0, ease:"power3.inOut"})
  .from(".btn-container", { x:"-20", opacity:0}, "-=0.5")
  .to(".btn-container", {
    x:0,
    opacity:1,
    ease:"power3.outIn",
    onComplete:done,
  }, "-=0.5")
}

const cardAnimationEnd = (done) => {
  var tl = gsap.timeline()

  tl.to(".card-outline", { duration:0.5, ease:"power3.inOut", right:"20", bottom:"20"});

  tl.to(".btn-container", {  x:"20", opacity:0, ease:"power3.inOut"})
  .from(".btn-container", { x:"-20", opacity:0}, "-=0.5")
  .to(".btn-container", {
    x:0,
    opacity:1,
    ease:"power3.outIn",
    onComplete:done,
  },"-=0.5")
}

</script>
<template>
  <div class="margin-adjust-card">
      <div class="card card-outline"></div>
        <div 
          @mouseenter="cardAnimationStart" @mouseleave="cardAnimationEnd" 
          class="card card-inline"
        >
          <h1 class="card-title">{{ cardTitle.toUpperCase() }}</h1>
          <div class="flex-container-card">
            <Vue3Lottie
              class="anime-men"
              :animation-data="animationDataMan"
              :width="140"
              :height="140"
            />
            <div class="card-right-container">
              <p class="disc-card">
                Check it out <br />
                our special cource
              </p>
              <div class="btn-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M10.024 4h6.015l7.961 8-7.961 8h-6.015l7.961-8-7.961-8zm-10.024 16h6.015l7.961-8-7.961-8h-6.015l7.961 8-7.961 8z"
                  />
                </svg>
                <p class="btn_message">More</p>
              </div>
            </div>
          </div>
        </div>
  </div>
</template>
<style scoped>
.card-outline {
  position: absolute;
  right: 24px;
  bottom:24px;
  z-index: -1;
}

.card{
  width: 480px;
  border: solid 2px #333;
  height: 200px;
  background-color: rgb(255, 160, 160);
}

.card-inline {
  text-align: center;
  align-items: right;
}

.card-inline:hover {
  cursor: pointer;
}

.margin-adjust-card {
  margin-top: 64px;
  position: relative;
}

.btn_message {
  margin-left: 16px;
}

.disc-card {
  font-size: 24px;
  text-align: left;
}

.card-right-container {
  padding: 8px;
  width: 50%;
}

.flex-container-card {
  display: flex;
  justify-content: space-between;
}

.btn-container {
  display: flex;
  justify-content: right;
  margin-right: 24px;
  margin-top: 8px;
}

.card-title {
  font-weight: bold;
}

.anime-men {
  position: relative;
  margin: 0;
  left: 40px;
}
</style>