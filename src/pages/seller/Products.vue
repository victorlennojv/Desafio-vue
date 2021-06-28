<template>
  <div class="bg-third row justify-center">
    <div class="col-12 col-sm-12 col-md-3 text-center">
      <SellerProfile />
      <q-card class="q-ma-md q-pa-md">
        <q-btn
          color="primary"
          label="Voltar"
          @click="$router.push({ name: 'seller' })"
        ></q-btn>
      </q-card>
    </div>
    <div style="width: 70%; min-width: 360px">
      <q-card class="row justify-center q-ma-md">
        <div class="col-12 text-center text-h4 q-ma-md">
          Lista de Mercadorias
        </div>

        <div class="q-ma-md" v-for="product in products" :key="product.id">
          <ListProducts :product="product" />
        </div>
      </q-card>
    </div>
  </div>
</template>

<script>
import ListProducts from "src/components/ListProducts.vue";
import SellerProfile from "src/components/seller/SellerProfile.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    ListProducts,
    SellerProfile,
  },

  mounted() {
    this.setAllProducts();
  },

  computed: {
    ...mapState("products", ["products"]),
  },

  methods: {
    ...mapActions("products", ["setAllProducts"]),
  },
};
</script>

<style>
.bg-third {
  background-color: rgb(248, 239, 231);
}

.card-size1 {
  height: 450px;
  min-width: 320px;
}
</style>
