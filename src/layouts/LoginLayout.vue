<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal elevated class="q-pa-md bg-white text-grey-8">
      <q-toolbar>
        <q-img
          class="q-ml-xl"
          height="auto"
          width="180px"
          alt="LeadBase logo"
          src="~assets/leadbase-logo.png "
        />
        <q-space />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {},
};
</script>
