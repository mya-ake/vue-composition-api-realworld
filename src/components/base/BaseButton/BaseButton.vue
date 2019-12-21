<template>
  <button class="btn" :type="type" :disabled="disabled" @click="clickListener">
    <slot />
  </button>
</template>

<script lang="ts" src="./BaseButton.script.ts"></script>
