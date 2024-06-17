<template>
  <div>
    <img src="@/assets/logo.png" />
    <HeaderSearch />
    <HeaderCart />
    <sapn v-if="!user"
      >你好，请！<router-link to="/login">登录</router-link> 免费
      <router-link to="/register">注册</router-link>
    </sapn>
    <span v-else
      >欢迎您，{{ user.username }},<a href="javascript:;" @click="logout"
        >退出登录</a
      ></span
    >
  </div>
</template>

<script>
import HeaderSearch from "./HeaderSearch.vue";
import HeaderCart from "./HeaderCart.vue";
import { mapState, mapMutations } from "vuex";
export default {
  name: "HeaderPage",
  components: {
    HeaderSearch,
    HeaderCart,
  },
  computed: {
    // user模块带有命名空间
    ...mapState("user", [
      // 将this.user 映射为 this.$store.state.user.user
      "user",
    ]),
  },
  methods: {
    logout() {
      this.deleteUser();
    },
    // user模块带有命名空间
    ...mapMutations("user", [
      // 将this.deleteUser 映射为 this.$store.commit('user/deleteUser')
      "deleteUser",
    ]),
  },
};
</script>

<style>
img {
  width: 40px;
  height: 30px;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
