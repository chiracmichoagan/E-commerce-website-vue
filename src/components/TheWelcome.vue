<script setup lang="ts">
import Header from './Header.vue'
import Navigate from './Navigate.vue'
import Footer from './Footer.vue'
import Main from './Main.vue'
import ChatBot from './ChatBot.vue'
</script>

<template>
  <div>
    <!-- HEADER -->
    <div><Header /></div>
    <div><Navigate /></div>
    <!-- MAIN CONTENT -->
    <div><Main /></div>
    
      <!-- Chat Bot Assistant -->
      <ChatBot />
    <div><Footer /></div>
  </div>
</template>

<style scoped></style>
