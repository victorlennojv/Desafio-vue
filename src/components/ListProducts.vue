<template>
  <q-card class="row justify-center my-card q-ma-md" horizontal>
    <q-card-section class="q-pt-xs">
      <div class="text-h5 q-mt-sm q-mb-xs">{{ product.name }}</div>
      <div class="text-caption text-grey">
        Quantidade:
        {{ product.quantity }}
      </div>
      <div class="text-overline">Valor: R${{ product.price }}</div>
    </q-card-section>

    <q-card-section class="q-pa-none col-5 flex flex-center"> </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    product: Object,
  },
};
</script>

<style lang="scss" scoped>
.my-card {
  width: 200px;
  height: 140px;
}
</style>
