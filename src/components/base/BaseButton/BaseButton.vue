<template>
  <button class="btn" :type="type" :disabled="disabled" v-on="listeners">
    <slot />
  </button>
</template>

<script lang="ts" src="./BaseButton.script.ts"></script>
