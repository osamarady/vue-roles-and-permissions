<template>
  <div>
      <p class="font-weight-bold">Edit "{{ category.name }}" Category</p>
      <form @submit.prevent>
          <div v-if="g_err != null" class="alert alert-danger text-capitalize mb-2">
            {{ g_err }}
          </div>
          <input type="text" placeholder="name" class="form-control mb-2" v-model="catName">
          <input type="number" min="0" placeholder="Subscription" class="form-control mb-2" v-model="catSubscription">
          <textarea cols="30" rows="7" placeholder="description" class="form-control mb-2" v-model="catDescription"></textarea>
          <button type="submit" class="btn btn-primary btn-block" @click="editCategory">Submit</button>
      </form>
  </div>
</template>

<script>
export default {
    props: ['category'],
    data() {
        return {
            catName: this.category.name,
            catSubscription: this.category.subscribtions,
            catDescription: this.category.description,
            g_err: null
        }
    },
    emits: ['update-category'],
    methods: {
        editCategory () {
            if ( this.catName != '' && this.catDescription != '' && this.catSubscription != '' ) {
                const category = [{
                    id: this.category.id,
                    name: this.catName,
                    description: this.catDescription,
                    subscribtions: this.catSubscription
                }]
                this.$emit('update-category', category)
            } else {
                this.g_err = "Fill All Data Fields"
            }
        }
    }
}
</script>

<style scoped>

</style>