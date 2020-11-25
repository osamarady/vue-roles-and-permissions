<template>
  <div>
      <p class="font-weight-bold">show {{type}}</p>
      <hr>
      <p>
          <strong>{{type}} Title: </strong>
          {{ category.name }}
      </p>
      <p>
          <strong>{{type}} Description: </strong>
          {{ category.description }}
      </p>
      <p>
          <strong>{{type}} subscribtions: </strong>
          {{ category.subscribtions }} Subscriper
      </p>
  </div>
</template>

<script>
export default {
    props: ['category', 'type'],
    data() {
        return {
        }
    }
}
</script>

<style scoped>

</style>