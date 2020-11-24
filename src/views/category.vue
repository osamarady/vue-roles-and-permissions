<template>
  <div class="container py-5">
    <h1>Categories</h1>
    <div class="row">
      <div class="col-md-8">
        <div class="bg-white shadow-sm p-2">
          
          <button class="btn btn-info mb-3">Add New Category</button>

          <table class="table table-bordered">
            <tbody>
              <tr v-for="category in categories" :key="category.name">
                <td>{{ category.name }}</td>
                <td>
                  <button class="btn btn-primary">show</button>
                </td>
                <td>
                  <button class="btn btn-success">edit</button>
                </td>
                <td>
                  <button class="btn btn-danger">delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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