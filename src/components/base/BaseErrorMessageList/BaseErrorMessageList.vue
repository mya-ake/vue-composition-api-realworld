<template functional>
  <ul class="error-messages">
    <li v-for="message in props.messages" :key="message">{{ message }}</li>
  </ul>
</template>

<script lang="ts" src="./BaseErrorMessageList.script.ts"></script>
