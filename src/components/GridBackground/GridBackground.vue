<template>
  <div
    class="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center"
  >
    <div
      class="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_60%,black)]"
    ></div>
    <div
      class="flex justify-center items-center absolute left-0 top-0 w-full h-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,102,153,0.25)_0%,transparent)]"
    >
      <slot></slot>
    </div>
  </div>
</template>
