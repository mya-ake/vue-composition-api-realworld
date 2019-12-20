<template>
  <div>
    <nav class="navbar navbar-light">
      <div class="container">
        <a class="navbar-brand" href="index.html">conduit</a>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <BaseLink to="/" class="nav-link" active-class="active"
              >Home</BaseLink
            >
          </li>
          <li class="nav-item">
            <BaseLink to="/editor" class="nav-link" active-class="active">
              <i class="ion-compose"></i>&nbsp;New Post
            </BaseLink>
          </li>
          <li class="nav-item">
            <BaseLink to="/settings" class="nav-link" active-class="active">
              <i class="ion-gear-a"></i>&nbsp;Settings
            </BaseLink>
          </li>
          <li class="nav-item">
            <BaseLink to="/register" class="nav-link" active-class="active"
              >Sign up</BaseLink
            >
          </li>
        </ul>
      </div>
    </nav>

    <router-view />

    <footer>
      <div class="container">
        <BaseLink to="/" class="logo-font">conduit</BaseLink>
        <span class="attribution">
          An interactive learning project from
          <BaseLink to="https://thinkster.io">Thinkster</BaseLink>
          . Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api';
import { BaseLink } from '@/components/base';

export default createComponent({
  components: {
    BaseLink,
  },

  setup() {
    return {};
  },
});
</script>
