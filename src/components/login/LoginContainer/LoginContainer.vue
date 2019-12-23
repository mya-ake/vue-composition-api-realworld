<template>
  <div>
    <BaseErrorMessageList :errors="state.errors" />
    <LoginForm @submit="onSubmit" />
  </div>
</template>

<script lang="ts" src="./LoginContainer.script.ts"></script>
