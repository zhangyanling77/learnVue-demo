<template>
  <zf-menu>
    <template v-for="menu in data">
      <Resub v-if="menu.children" :key="menu.id" :data="menu"></Resub>
      <zf-menu-item  v-else :key="menu.id">{{menu.name}}</zf-menu-item>
    </template>
  </zf-menu>
</template>
<script>
import Resub from "./Resub";
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  components: {
    Resub
  }
};
</script>
