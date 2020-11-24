<template>
  <div class="Home container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="bg-white shadow-sm rounded-lg p-3 mt-5">
          <h1 class="text-uppercase text-center">Login</h1>

          <LoginForm :users="users" />

        </div>
      </div>
      <div class="col-md-12">
        <div class="bg-white shadow-sm rounded-lg p-3 mt-5">
          <h2 class="text-center">Users Data</h2>
          <hr>
          <div class="row">
            <div v-for="user in users" :key="user.passowrd" class="col-md-4 my-2">
              <p class="font-weight-bold">{{ user.title }}</p>
              <p class="m-0">email: {{ user.email }}</p>
              <p class="m-0">password: {{ user.password }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/FormLogin'

export default {
  name: 'Home',
  components: {
    LoginForm
  },
  data () {
    return {
      users: [
        {
          title: 'Admin - all permissions',
          email: 'admin@admin.com',
          password: 'admin123',
          role: 0
        },
        {
          title: 'User - Create Only',
          email: 'create@user.com',
          password: 'create123',
          role: 1
        },
        {
          title: 'User - Read Only',
          email: 'read@user.com',
          password: 'read1234',
          role: 2
        },
        {
          title: 'User - Update Only',
          email: 'update@user.com',
          password: 'update123',
          role: 3
        },
        {
          title: 'User - Delete Only',
          email: 'delete@user.com',
          password: 'delete123',
          role: 4
        },
        {
          title: 'Suspended User',
          email: 'suspended@user.com',
          password: 'suspended',
          role: 5
        },
      ]
    }
  }
}
</script>
