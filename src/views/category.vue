<template>
  <div class="container py-5">
    <h1>Categories</h1>
    <div class="row">
      <div class="col-md-8">
        <div class="bg-white shadow-sm p-2">
          
          <button class="btn btn-info mb-3">Add New Category</button>

          <AllCategories :categories="categories" />
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AllCategories from '@/components/categories/display'
export default {
  components: {
    AllCategories
  },
  data() {
    return {
      categories: [
        {
          name: 'Medical Insurance'
        },
        {
          name: 'Life & Disability'
        },
        {
          name: 'Employee benefits'
        },
        {
          name: 'General Insurance'
        }
      ]
    }
  }
}
</script>