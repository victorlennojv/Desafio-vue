<template>
  <q-page class="bg-secondary flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="row my-card justify-center">
        <q-card-section class="col-12 bg-white text-center">
          <q-img
            class="q-mt-lg"
            height="auto"
            width="360px"
            alt="LeadBase logo"
            src="~assets/leadbase-logo.png "
          />
        </q-card-section>

        <q-card-section class="col-12 bg-white text-center">
          <div class="text-h4 text-grey-8 text-weight-bold">Entrar como:</div>
        </q-card-section>

        <q-card-actions class="col-10">
          <q-btn
            class="full-width"
            size="lg"
            color="primary"
            label="Vendedor"
            @click="$router.push({ name: 'seller' })"
          />
          <q-btn
            class="full-width"
            size="lg"
            color="primary"
            label="Gestor"
            @click="$router.push({ name: 'manager' })"
          />
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  name: "PageIndex",

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.my-card {
  max-width: 500px;
  min-width: 300px;
  height: 450px;
}
</style>
