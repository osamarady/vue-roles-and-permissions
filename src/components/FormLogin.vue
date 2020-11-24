<template>
    <form @submit.prevent>
        <div v-if="generalErr != null" class="alert alert-danger text-capitalize mb-2">
            {{ generalErr }}
        </div>
        <input
            type="email"
            placeholder="email"
            class="form-control"
            :class="mailErr != null && mailErr != '' ? 'border-danger' : ''"
            v-model="mailVal"
            @blur="mailValidation"
        >
        <p v-if="mailErr != null" class="text-danger text-capitalize">
            {{ mailErr }}
        </p>
        <input
            type="password"
            placeholder="Password"
            class="form-control mt-3"
            :class="passwordErr != null && passwordErr != '' ? 'border-danger' : ''"
            v-model="passwordVal"
            @blur="passValidation"
        >
        <p v-if="passwordErr != null" class="text-danger text-capitalize">
            {{ passwordErr }}
        </p>
        <input type="submit" value="Login" class="btn btn-primary btn-block mt-3" :class="mailErr != null || passwordErr != null ? 'disabled' : ''" @click="submitLogin">
    </form>
</template>

<script>

export default {
  props: ['users'],
  data() {
    return {
      mailVal: '',
      passwordVal: '',
      mailErr: '',
      passwordErr: '',
      generalErr: null
    }
  },
  methods: {
    mailValidation () {
      if (this.mailVal == '') {
        this.mailErr = "your mail is missing. please enter mail."
      } else if (!this.mailVal.includes('@')) {
        this.mailErr = "mail not valid. please enter a valid mail"
      } else {
        this.mailErr = null
      }
    },
    passValidation () {
      if (this.passwordVal == '') {
        this.passwordErr = "your password is missing. please enter passowrd."
      } else if (this.passwordVal.length < 8  || this.passwordVal.length > 11) {
        this.passwordErr = "password should be between 8 and 11 digits."
      } else {
        this.passwordErr = null
      }
    },
    submitLogin () {
        for(let i = 0; i < this.users.length; i++ ) {
            if (this.mailVal == this.users[i].email && this.passwordVal == this.users[i].password && this.users[i].role != 5) {
                this.generalErr = null
                localStorage.setItem('user', JSON.stringify(this.users[i]))
                // const x = JSON.parse(localStorage.getItem('user'))
                // alert(x.role)
                this.$router.push({ name: 'category'})
            } else if (this.mailVal == this.users[i].email && this.passwordVal == this.users[i].password && this.users[i].role == 5) {
                this.generalErr = "Your Account is Susbended! Please contact our support team"
            } else {
                this.generalErr = "You Are not Registered ! Please contact our support team"
            }
        }
    }
  }
}
</script>
