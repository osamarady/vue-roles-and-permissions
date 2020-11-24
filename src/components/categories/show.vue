<template>
  <div>
      <p class="font-weight-bold">show Category</p>
      <hr>
      <p>
          <strong>Category Title: </strong>
          {{ category.name }}
      </p>
      <p>
          <strong>Category Description: </strong>
          {{ category.description }}
      </p>
      <p>
          <strong>Category subscribtions: </strong>
          {{ category.subscribtions }} Subscriper
      </p>
  </div>
</template>

<script>
export default {
    props: ['category'],
    data() {
        return {
        }
    }
}
</script>

<style scoped>

</style>