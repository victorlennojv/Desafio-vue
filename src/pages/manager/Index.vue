<template>
  <div class="bg-third row wrap justify-center">
    <div class="col-12 col-sm-12 col-md-3 wrap text-center">
      <UserProfile />
    </div>
  </div>
</template>

<script>
import UserProfile from "src/components/seller/UserProfile.vue";

export default {
  components: {
    UserProfile,
  },
};
</script>

<style>
.bg-third {
  background-color: rgb(192, 172, 161);
  min-height: 100vh;
}

.card-size1 {
  height: 450px;
  min-width: 320px;
}
</style>
