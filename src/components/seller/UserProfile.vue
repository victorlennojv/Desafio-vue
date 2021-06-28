<template>
  <q-card class="q-ma-md">
    <q-card-section>
      <q-avatar
        size="150px"
        font-size="100px"
        color="secondary"
        text-color="white"
        icon="person"
      />
    </q-card-section>
    <q-card-section>
      <div class="text-h6">Usuário:</div>
      <div class="text-weight-bold"></div>
    </q-card-section>
    <q-card-actions class="justify-center">
      <q-btn
        color="primary"
        label="Mercadorias"
        @click="$router.push({ name: 'products' })"
      ></q-btn>
    </q-card-actions>
    <q-card-actions class="justify-center">
      <q-btn color="secondary" label="Vendas"></q-btn>
    </q-card-actions>
    <q-card-actions class="justify-center"> </q-card-actions>
  </q-card>
</template>

<script>
export default {};
</script>

<style></style>
