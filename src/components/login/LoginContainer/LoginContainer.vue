<template>
  <div>
    <BaseErrorMessageList :messages="state.messages" />
    <LoginForm @submit="onSubmit" />
  </div>
</template>

<script lang="ts" src="./LoginContainer.script.ts"></script>
