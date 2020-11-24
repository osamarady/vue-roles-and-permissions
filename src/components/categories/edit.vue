<template>
  <div>
      <p class="font-weight-bold">Add New Category</p>
      <form @submit.prevent>
          <div v-if="g_err != null" class="alert alert-danger text-capitalize mb-2">
            {{ g_err }}
          </div>
          <input type="text" placeholder="name" class="form-control mb-2" v-model="catName">
          <input type="number" min="0" placeholder="Subscription" class="form-control mb-2" v-model="catSubscription">
          <textarea cols="30" rows="7" placeholder="description" class="form-control mb-2" v-model="catDescription"></textarea>
          <button type="submit" class="btn btn-primary btn-block" @click="AddNewCategory">Submit</button>
      </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            catName: '',
            catSubscription: '',
            catDescription: '',
            g_err: null
        }
    },
    emits: ['new-category'],
    methods: {
        AddNewCategory () {
            if ( this.catName != '' && this.catDescription != '' && this.catSubscription != '' ) {
                const category = {
                    id: Math.floor(Math.random() * Math.floor(1000)),
                    name: this.catName,
                    description: this.catDescription,
                    subscribtions: this.catSubscription
                }
                this.$emit('new-category', category)

                this.catName = ''
                this.catDescription = ''
                this.catSubscription = ''
                this.g_err = null
            } else {
                this.g_err = "Fill All Data Fields"
            }
        }
    }
}
</script>

<style scoped>

</style>