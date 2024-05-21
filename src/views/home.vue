<script setup></script>

<template>
  <main>
    <h1 className="text-3xl font-bold underline">Hello world!</h1>
    <a-button type="primary">Primary Button</a-button>
    <ul class="list-none p-0 m-0">
      <li v-for="item in [1, 2, 3]" :key="item">{{ item }}</li>
    </ul>
  </main>
</template>
