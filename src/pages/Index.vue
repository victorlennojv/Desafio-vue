<template>
  <q-page class="flex flex-center">
    <div class="row justify-center content-center">
      <div class="col-9 text-center q-pa-md">
        <q-img alt="LeadBase logo" src="~assets/leadbase-logo.png " />
      </div>
      <div
        class="q-ma-xl col-12 text-h3 text-weight-bold text-grey-8 text-center"
      >
        Como desejar entrar?
      </div>
      <div>
        <q-btn class="q-mr-sm q-pa-sm" color="primary" label="Gerente" />
        <q-btn class="q-ml-sm q-pa-sm" color="primary" label="Vendedor" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
});
</script>
