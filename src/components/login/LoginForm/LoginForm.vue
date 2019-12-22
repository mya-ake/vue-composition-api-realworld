<template>
  <form @submit.prevent="onSubmit">
    <fieldset class="form-group" :disabled="disabled">
      <BaseInput
        v-model="values.email"
        type="email"
        class="form-control-lg"
        placeholder="Email"
      />
    </fieldset>
    <fieldset class="form-group" :disabled="disabled">
      <BaseInput
        v-model="values.password"
        type="password"
        class="form-control-lg"
        placeholder="Password"
      />
    </fieldset>
    <BaseButton
      :disabled="disabled"
      type="submit"
      class="btn-lg btn-primary pull-xs-right"
    >
      Sign in
    </BaseButton>
  </form>
</template>

<script lang="ts" src="./LoginForm.script.ts"></script>
