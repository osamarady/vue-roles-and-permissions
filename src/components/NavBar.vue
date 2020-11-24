<template>
  <div class="bg-white shadow-sm">
      <nav class="navbar navbar-expand-lg navbar-light container">
        <router-link class="navbar-brand" to="/">
          <img src="@/assets/logo.png" alt="wisly insure">
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/category" exact>Category</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/plan">Plan</router-link>
            </li>
            <li class="nav-item">
              <button class="btn nav-link" @click="logout">Logout</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
</template>

<script>
export default {
    methods: {
        logout () {
            localStorage.removeItem('user')
            this.$router.push({ name: 'Login'})
        }
    }
}
</script>

<style scoped>

</style>