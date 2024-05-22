<template>
  <div
    class="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center"
  >
    <div
      class="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"
    ></div>
    <div class="bg"></div>
  </div>
</template>

<style>
.bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(50% 50% at 50% 50%, rgba(255, 102, 153, 0.3) 0, transparent);
}
</style>
