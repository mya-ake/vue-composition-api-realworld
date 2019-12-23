<template functional>
  <ul class="error-messages">
    <li v-for="error in props.errors" :key="error.code">
      {{ error.message }}
    </li>
  </ul>
</template>

<script lang="ts" src="./BaseErrorMessageList.script.ts"></script>
