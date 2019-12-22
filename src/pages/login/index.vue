<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign in</h1>
          <p class="text-xs-center">
            <BaseLink to="/register">Need an account?</BaseLink>
          </p>

          <LoginContainer />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api';
import { BaseLink } from '@/components/base';
import { LoginContainer } from '@/components/login';

export default createComponent({
  components: {
    BaseLink,
    LoginContainer,
  },
  setup() {
    return {};
  },
});
</script>
